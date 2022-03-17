import React from 'react'

import Banner from "../resources/assests/calculator-banner.png"
import star from "../resources/assests/title-bottom-star.png"

import BookAServiceContent from "./BookAServiceContent"

import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Privacy from "../components/Privacy"

function BookAService() {
  return (
    <div>
        <Navbar/>
        <div className="aboutPoster">
            <img src={Banner} class="img-fluid" alt=""/>
        </div>
        <div className="aboutWord container-fluid">
            <p className="contactUsHeading">Set up your cleaning service</p>
            <img className="col" src={star} alt=""/>
        </div>
        <BookAServiceContent/>
        <Newsletter/>
        <Footer/>
        <div className="horizontalLine">
            <hr style={{width:'80%',textAlign:'left',marginLeft:'10%',color:'white',marginTop: '0',marginBottom: '0'}}/>
        </div>
        <Privacy/>
    </div>
  )
}

export default BookAService