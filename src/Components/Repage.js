import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Mens from "./Mens";
import Womens from "./Womens";
import Kids from "./Kids";
import Accessories from "./Accessories";
import Shirts from "./Shirts";
import Pants from "./Pants";
import Tshirts from "./Tshirts";
import Newdesgin from "./Newdesgin";
import Navbar from "./Navbar";
import AImode from "./AImode";
function Repage(){
    return(
    
    <>
      <Router>
      
 <Navbar/>
      <Routes>
        <Route path="/Movie/" element={<Mainpage/>} />
        <Route path="/mens" element={<Mens/>} />
        <Route path="/mens/accessories" element={<Accessories/>}/>
        <Route path="/mens/shirts" element={<Shirts/>}/>
        <Route path="/mens/pants" element={<Pants/>}/>
        <Route path="/mens/tshirts"element={<Tshirts/>}/>
        <Route path="/womens" element={<Womens/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/newdesign" element={<Newdesgin/>}/>
        <Route path="/Aimode" element={<AImode/>}/>

        {/* <Route path="/models" element={<Models />} /> */}
      </Routes>
    </Router>
           
    </>
    
)
}

export default Repage;