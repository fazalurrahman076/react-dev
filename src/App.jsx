import React from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Review } from './components/Review';
import { ContactUs } from './components/ContactUs';
import { Products } from './components/Products';
import { AboutUs } from './components/AboutUs';
import { Signup } from './components/Signup';
import { Home } from "./components/Home";
import { Signin } from "./components/Signin";

const App = () => { 
  return(
    <>
    <Router>
       <NavBar />
        <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/review" element={<Review />} />           
            </Routes>
      </div>
              <Footer />
    </Router>
    </>
  );
}

export default App;
