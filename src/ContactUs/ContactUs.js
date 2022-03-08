import React from 'react'

import Banner from "../resources/assests/contact-us-banner.png"
import map from "../resources/assests/map.png"

import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Privacy from "../components/Privacy"

import Contact from "./Contact"
import GetInTouch from "./GetInTouch"

function ContactUs() {
  return (
    <div>
        <Navbar/>
        <div className="contactPoster">
            <img src={Banner} class="img-fluid" alt=""/>
        </div>
        <Contact/>
        <GetInTouch/>
        <div class="contactMap">
            <img src={map} class="img-fluid" alt=""/>
        </div>
        <Newsletter/>
        <Footer/>
        <div className="horizontalLine">
            <hr style={{width:'80%',textAlign:'left',marginLeft:'10%',color:'white',marginTop: '0',marginBottom: '0'}}/>
        </div>
        <Privacy/>
    </div>
  )
}

export default ContactUs