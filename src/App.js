import React from "react";
import Home from "./cmp/Home";
import Middle1 from "./cmp/Middle1";
import Middle2 from "./cmp/Middle2";
import Footer  from "./cmp/Footer";
// import Tech from "./cmp/Tech";
// import AboutUs from "./cmp/AboutUs";
// import ContactUs from "./cmp/ContactUs";
// import { BrowserRouter as Router ,Route, Link, Routes } from "react-router-dom";



function App() {
  return (
    <>
      <Home />
      <Middle1 />
      <Middle2 />
      <Footer />
      
      {/* <Router>


     <Link to = "/">Home</Link>
     <Link to ="/about">About Us</Link>
     <Link to ="/contact">Contact Us</Link>

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<AboutUs/>}/>
        <Route path = "/contact" element = {<ContactUs/>}/>
      </Routes>

      </Router> */}




    </>
  );
}

export default App;

