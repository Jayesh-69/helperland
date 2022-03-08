import React from 'react'

import star from "../resources/assests/title-bottom-star.png"
import checkmark from "../resources/assests/checkmark-blue-small.png"

function Prices() {
  return (
    <div className="container pricePrice">
        <p className="priceHeading">Prices</p>
        <img src={star} alt=""/>
        <div className="priceType col">
            <div className="priceTypeHeading">
                One Time
            </div>
            <div className="priceTypeContent">
                <p className="priceTypePrice"><span style={{fontSize: '48px'}}>€ 20</span><span style={{fontSize: '30px'}}>/hr</span></p>
                <div className="priceTypeBenifits">
                    <div><img src={checkmark} alt=""/> Lower prices</div>
                    <div><img src={checkmark} alt=""/> Easy online & secure payment</div>
                    <div><img src={checkmark} alt=""/> Easy amendment</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prices