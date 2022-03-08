import React from 'react'

import banner from "../resources/assests/faq-banner.png"
import star from "../resources/assests/title-bottom-star.png"

import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Privacy from "../components/Privacy"

import Faq from "./Faq"

function Faqs() {
  return (
    <div>
        <Navbar/>
        <div className="faqPoster">
            <img src={banner} alt=""/>
        </div>
        <div class="faqHeading">
            FAQ's
            <div class="faqStar">
                <img src={star} alt=""/>
            </div>
        </div>
        <Faq/>
        <Newsletter/>
        <Footer/>
        <div className="horizontalLine">
            <hr style={{width:'80%',textAlign:'left',marginLeft:'10%',color:'white',marginTop: '0',marginBottom: '0'}}/>
        </div>
        <Privacy/>
    </div>
  )
}

export default Faqs