import React from 'react'

import star from "../resources/assests/title-bottom-star.png"
import bulletArrow from "../resources/assests/bullet-arrow.png"

import serviceBanner1 from "../resources/assests/service-detail-banner-1.png"
import serviceBanner2 from "../resources/assests/service-detail-banner-2.png"
import serviceBanner3 from "../resources/assests/service-detail-banner-3.png"

function WhatService() {
  return (
    <div className="container-fluid priceWhatWe">
        <p className="priceHeading">What we include in cleaning</p>
        <img src={star} alt=""/>
        <div className="row priceWhatWeMain">
            <div className="col-md-4 col-sm-12 priceWhatWeMainPart">
                <img className="pricesWhatImages" src={serviceBanner1} alt=""/>
                <div className="priceWhatWeBenifite">
                    <p className="priceWhatWeTypeHeading">Bedroom and Living Room</p>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Dust all accessible surface
                    </div>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Wipe down all minors and glass fixtures
                    </div>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Clean all floor surface
                    </div>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Take out garbage and recycling
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 priceWhatWeMainPart">
                <img className="pricesWhatImages" src={serviceBanner2} alt=""/>
                <div className="priceWhatWeBenifite">
                    <p className="priceWhatWeTypeHeading">Bathrooms</p>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Wash and sanitize the toilet,shower,tub,sink
                    </div>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Dust all accessible surface
                    </div>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Wipe down all minors and glass fixtures
                    </div>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Clean all floor surface
                    </div>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Take out garbage and recycling
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 priceWhatWeMainPart">
                <img className="pricesWhatImages" src={serviceBanner3} alt=""/>
                <div className="priceWhatWeBenifite">
                    <p className="priceWhatWeTypeHeading">Kitchen</p>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Dust all accessible surface
                    </div>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Empty sink and load up dishwasher
                    </div>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Wipe down exterior of stove,oven and fridge
                    </div>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Clean all floor surfaces
                    </div>
                    <div className="priceWhatWeContent">
                        <img src={bulletArrow} alt=""/>
                        Take out garbage and recycling
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatService