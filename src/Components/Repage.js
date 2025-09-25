import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Mens from "./Mens";
import Womens from "./Womens";
import Kids from "./Kids";
function Repage(){
    return(
    
    <>
      <Router>
      
 
      <Routes>
        <Route path="/Fashion" element={<Mainpage/>} />
        <Route path="/mens" element={<Mens/>} />
        <Route path="/womens" element={<Womens/>} />
        <Route path="/kids" element={<Kids/>} />
        {/* <Route path="/models" element={<Models />} /> */}
      </Routes>
    </Router>
           
    </>
    
)
}

export default Repage;