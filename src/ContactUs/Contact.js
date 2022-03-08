import React from 'react'

import star from "../resources/assests/title-bottom-star.png"
import location from "../resources/assests/location.png"
import phone from "../resources/assests/phone.png"
import mail from "../resources/assests/mail.png"


function Contact() {
  return (
    <div className="contactUs container-fluid">
        <p className="contactUsHeading">Contact us</p>
        <img src={star} alt=""/>
        <div className="row contactUsMain">
            <div className="col-md-4">
                <img src={location} alt=""/>
                <div className="contactUsWhere">
                    <p>Konigswinterer Str. 116</p>
                    <p>53227 Bonn</p>
                </div>
            </div>
            <div className="col-md-4">
                <img src={phone} alt=""/>
                <div className="contactUsWhere">
                    <p>+49 (228) 28693320</p>
                </div>
            </div>
            <div className="col-md-4">
                <img src={mail} alt=""/>
                <div className="contactUsWhere">
                    <p>info@helperland.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact