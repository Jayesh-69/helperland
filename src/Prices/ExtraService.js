import React from 'react'

import star from "../resources/assests/title-bottom-star.png"
import one from "../resources/assests/1.png"
import two from "../resources/assests/2.png"
import three from "../resources/assests/3.png"
import four from "../resources/assests/4.png"
import five from "../resources/assests/5.png"

function ExtraService() {
  return (
    <div className="container-fluid priceExtraService">
        <p className="priceHeading">Extra Service</p>
        <img src={star} alt=""/>
        <div className="row priceExtraType">
            <div className="col col-md-2 col-sm col-sm-6 priceExtraMain">
                <div className="priceExtraMainImg">
                    <img src={three} alt=""/>
                </div>
                <div className="priceExtraContent">
                    <p className="priceExtraWhere">Inside cabinets</p>
                    <p className="priceExtraWhereTime">30 minutes</p>
                </div>
            </div>
            <div className="col col-md-2 col-sm col-sm-6 priceExtraMain">
                <div className="priceExtraMainImg">
                    <img src={five} alt="" style={{margin:'-3px 7px'}}/>
                </div>
                <div className="priceExtraContent">
                    <p className="priceExtraWhere">Inside fridge</p>
                    <p className="priceExtraWhereTime">30 minutes</p>
                </div>
            </div>
            <div className="col col-md-2 col-sm col-sm-6 priceExtraMain">
                <div className="priceExtraMainImg">
                    <img src={four} alt="" style={{margin:'7px -3px'}}/>
                </div>
                <div className="priceExtraContent">
                    <p className="priceExtraWhere">Inside oven</p>
                    <p className="priceExtraWhereTime">30 minutes</p>
                </div>
            </div>
            <div className="col col-md-2 col-sm col-sm-6 priceExtraMain">
                <div className="priceExtraMainImg">
                    <img src={two} alt=""/>
                </div>
                <div className="priceExtraContent">
                    <p className="priceExtraWhere">Inside wash & dry</p>
                    <p className="priceExtraWhereTime">30 minutes</p>
                </div>
            </div>
            <div className="col col-md-2 col-sm col-sm-6 priceExtraMain">
                <div className="priceExtraMainImg" id="pricesExtraInsideWindows">
                    <img src={one} alt=""/>
                </div>
                <div className="priceExtraContent">
                    <p className="priceExtraWhere">Inside windows</p>
                <p className="priceExtraWhereTime">30 minutes</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExtraService