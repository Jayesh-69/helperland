import React from 'react'
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignUp from "./components/SignUp";

import Homepage from "./Homepage/Homepage";
import Price from "./Prices/Price";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import Faqs from "./Faqs/Faqs";
import BecomeAPro from "./BecomeAPro/BecomeAPro";
import BookAService from "./BookAService/BookAService";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route path="/price" element={<Price />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/faq" element={<Faqs />}></Route>
        <Route path="/pro" element={<BecomeAPro />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/book-a-service" element={<BookAService />}></Route>
      </Routes>
    </Router>
  );
}

export default App