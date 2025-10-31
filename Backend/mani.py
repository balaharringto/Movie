from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import numpy as np
import cv2
from io import BytesIO

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Utility to detect skin tone
def detect_skin_tone(image: Image.Image) -> str:
    # Convert PIL image to numpy array
    img = np.array(image)
    img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)

    # Resize for faster processing
    img = cv2.resize(img, (100, 100))

    # Convert to HSV for skin detection
    hsv_img = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

    # Skin color range in HSV
    lower = np.array([0, 20, 70], dtype=np.uint8)
    upper = np.array([20, 255, 255], dtype=np.uint8)

    mask = cv2.inRange(hsv_img, lower, upper)
    skin_pixels = cv2.countNonZero(mask)
    total_pixels = img.shape[0] * img.shape[1]

    skin_ratio = skin_pixels / total_pixels

    # Simple thresholding to determine skin type
    if skin_ratio > 0.1:
        # For simplicity, we categorize based on average brightness
        brightness = np.mean(cv2.cvtColor(img, cv2.COLOR_BGR2GRAY))
        if brightness > 160:
            return "Fair"
        elif brightness > 100:
            return "Medium"
        else:
            return "Dark"
    else:
        return "Unknown"

# Suggest colors based on skin type
def suggest_colors(skin_type: str):
    mapping = {
        "Fair": ["Red", "Beige", "Olive Green"],
        "Medium": ["Yellow", "Orange", "Blue"],
        "Dark": ["Purple", "White", "Gold"],
        "Unknown": ["Gray", "Black", "White"]
    }
    return mapping.get(skin_type, ["Gray", "Black", "White"])

@app.post("/analyze")
async def analyze_skin(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        image = Image.open(BytesIO(contents)).convert("RGB")
        skin_type = detect_skin_tone(image)
        colors = suggest_colors(skin_type)
        return {"skinType": skin_type, "suggestedColors": colors}
    except Exception as e:
        return {"error": str(e)}
