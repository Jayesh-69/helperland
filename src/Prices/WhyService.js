import React from 'react'

import star from "../resources/assests/title-bottom-star.png"
import whyHelperland from "../resources/assests/why-helperland.png"

function WhyService() {
  return (
    <div className="container-fluid priceWhy">
        <p className="priceHeading">Why Helperland</p>
        <img src={star} alt=""/>
        <div className="row priceWhyMain">
            <div className="col-md-4" style={{textAlign: 'right'}}>
                <div className="priceWhypart1">
                    <p className="priceWhyHeading">Experienced and vetted professionals</p>
                    <p className="priceWhyPara">dominate the industry in scale and scope with an adaptable, extensive network that consistently delivers exceptional results.</p>
                </div>
                <div className="priceWhypart1">
                    <p className="priceWhyHeading">Dedicated customer service</p>
                    <p className="priceWhyPara">to our customers and are guided in all we do by their needs.The team is always happy to support you and offer all the information you need.</p>
                </div>
            </div>
            <div className="col-md-4"><img src={whyHelperland} style={{maxWidth: '100%'}} alt=""/></div>
            <div className="col-md-4" style={{textAlign: 'left'}}>
                <div className="priceWhypart2">
                    <p className="priceWhyHeading">Every cleaning is insured</p>
                    <p className="priceWhyPara">and seek to provide exceptional service and engage in proactive behavior.We‘d be happy to clean your homes.</p>
                </div>
                <div className="priceWhypart2">
                    <p className="priceWhyHeading">Secure online payment</p>
                    <p className="priceWhyPara">Payment is processed securely online. Customers pay safely online and manage the booking.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyService