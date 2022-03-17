import React from "react"

import one from "../resources/assests/1.png"
import two from "../resources/assests/2.png"
import three from "../resources/assests/3.png"
import four from "../resources/assests/4.png"
import five from "../resources/assests/5.png"

import vDetails from "../resources/assests/view-details.png"
import plan from "../resources/assests/schedule-plan (copy).png"
import uDetails from "../resources/assests/user-details-1.png" 
import payment from "../resources/assests/payment-1.png"

const BookServiceMenu = () => {

	const showMenu = (i) => {

		for(var j=1; j < 5; j++) {
			var x = document.getElementById("menu" + j);
        	if(j === i){
        		x.style.display = "block";
        	}
        	else{
        		x.style.display = "none";
        	}
    	}
	}

	return(
		<div className="col-md-7 bookServiceMain">
            <div className="row bookServiceMenu">
                <div className="col-md-3 text-center">
                    <a href="#Setup" onClick={() => {showMenu(1)}}><img src={vDetails} alt=""/> Setup Service</a>
                </div>
                <div className="col-md-3 text-center currentMenu">
                    <a href="#Plan" onClick={() => {showMenu(2)}}><img src={plan} alt=""/> Schedule & Plan</a>
                </div>
                <div className="col-md-3 text-center">
                    <a href="#Details" onClick={() => {showMenu(3)}}><img src={uDetails} alt=""/> Your details</a>
                </div>
                <div className="col-md-3 text-center">
                    <a href="#Payment" onClick={() => {showMenu(4)}}><img src={payment} alt=""/> Make Payment</a>
                </div>
            </div>
            <div id="menu1">
            	<p>Enter your Postal Code</p>
            	<br/>
            	<input
            		type="number"
            		placeholder="Postal Code"
            	>
            	</input>
            	<button>Check Availability</button>
            </div>
            <div id="menu2">
            	<div className="bookServiceSelect">
                    <p>
                        Select number of rooms and bath
                    </p>
                    <div className="row">
                        <div className="col">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>1 bed</option>
                                <option value="1">2 bed</option>
                                <option value="2">3 bed</option>
                                <option value="3">4 bed</option>
                            </select>
                        </div>
                        <div className="col">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>1 bath</option>
                                <option value="1">2 bath</option>
                                <option value="2">3 bath</option>
                                <option value="3">4 bath</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="bookServiceTime">
                    <div className="row">
                        <div className="col">
                            <p>
                                When do you need a cleaner?
                            </p>
                            <div className="row">
                                <div className="col" style={{maxWidth: 'fit-content'}}>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Date</option>
                                        <option value="1">Date</option>
                                        <option value="1">Date</option>
                                        <option value="1">Date</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Time</option>
                                        <option value="1">Time</option>
                                        <option value="2">Time</option>
                                        <option value="3">Time</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <p>
                                How long do you need  your cleaner to stay?
                            </p>
                            <div className="row">
                                <div className="col">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Time</option>
                                        <option value="1">Time</option>
                                        <option value="2">Time</option>
                                        <option value="3">Time</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bookServiceExtra">
                    <p className="bookServiceExtraHeading">
                        Extra services
                    </p>
                    <div className="row priceExtraType">
                        <div className="col col-md-2 priceExtraMain">
                            <div className="priceExtraMainImgActive">
                                <img src={three} alt=""/>
                            </div>
                            <div className="priceExtraContent">
                                <p className="priceExtraWhereService">Inside cabinets</p>
                            </div>
                        </div>
                        <div className="col col-md-2 priceExtraMain">
                            <div className="priceExtraMainImg">
                                <img src={five} alt="" style={{margin:'-3px 7px'}}/>
                            </div>
                            <div className="priceExtraContent">
                                <p className="priceExtraWhereService">Inside fridge</p>
                            </div>
                        </div>
                        <div className="col col-md-2 priceExtraMain">
                            <div className="priceExtraMainImg">
                                <img src={four} alt="" style={{margin:'7px -3px'}}/>
                            </div>
                            <div className="priceExtraContent">
                                <p className="priceExtraWhereService">Inside oven</p>
                            </div>
                        </div>
                        <div className="col col-md-2 priceExtraMain">
                            <div className="priceExtraMainImg">
                                <img src={two} alt=""/>
                            </div>
                            <div className="priceExtraContent">
                                <p className="priceExtraWhereService">Laundry<br/>wash & dry</p>
                            </div>
                        </div>
                        <div className="col col-md-2 priceExtraMain">
                            <div className="priceExtraMainImg">
                                <img src={one} alt=""/>
                            </div>
                            <div className="priceExtraContent">
                                <p className="priceExtraWhereService">Inside windows</p>
                            </div>
                        </div>
                    </div>
                </div>
            	<div className="bookServiceComment">
                    <p className="bookServiceCommentHeading">
                        Comments
                    </p>
                    <textarea name="comments" id="comments"></textarea>
                    <div className="bookServiceCheckbox">
                        <input type="checkbox" name="pets"/>
                        <label for="pets"> I have pets at home</label><br/>
                    </div>
                </div>
                <div className="bookServiceContinue">
                    <button>Continue</button>
                </div>
            </div>
            <div id="menu3">
            	lol3
            </div>
            <div id="menu4">
            	lol4
            </div>
		</div>
	)
}

export default BookServiceMenu