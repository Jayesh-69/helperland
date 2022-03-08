import React from 'react'

import cusSay from "../resources/assests/customer-says-bg.png";

import Lary from "../resources/assests/lary-watson.jpg";
import John from "../resources/assests/john-smith.jpg";
import Lars from "../resources/assests/lars-johnson.jpg";

import arrow from "../resources/assests/arrow.png"

function What() {
  return (
    <div className="what">
		<h1>What Our Customer Say</h1>
		<div className="row container customer">
			<div className="col-md col-sm-12 col-sm customerCard">
				<div className="customerContact">
					<img src={cusSay} alt="" />
				</div>
				<div className="customerCardContent">
					<img src={Lary} alt="" />
					<div className="info">
						<p className="customerName">Lary Watson</p>
						<p className="cardDate">Manchester</p>
					</div>
				</div>
				<div className="customerSay">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
					saepe ex vel, ut eum pariatur nulla dolore eaque, aperiam sunt
					fugiat officia reprehenderit ipsam accusantium,
				</div>
				<div className="readThePost">
					Read More
					<img src={arrow} alt="" />
				</div>
			</div>
			<div className="col-md col-sm-12 col-sm customerCard">
				<div className="customerContact">
					<img src={cusSay} alt="" />
				</div>
				<div className="customerCardContent">
					<img src={John} alt="" />
					<div className="info">
						<p className="customerName">John Smith</p>
						<p className="cardDate">Manchester</p>
					</div>
				</div>
				<div className="customerSay">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
					saepe ex vel, ut eum pariatur nulla dolore eaque, aperiam sunt
					fugiat officia reprehenderit ipsam accusantium,
				</div>
				<div className="readThePost">
					Read More
					<img src={arrow} alt="" />
				</div>
			</div>
			<div className="col-md col-sm-12 col-sm customerCard">
				<div className="customerContact">
					<img src={cusSay} alt="" />
				</div>
				<div className="customerCardContent">
					<img src={Lars} alt="" />
					<div className="info">
						<p className="customerName">Lars Johnson</p>
						<p className="cardDate">Manchester</p>
					</div>
				</div>
				<div className="customerSay">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
					saepe ex vel, ut eum pariatur nulla dolore eaque, aperiam sunt
					fugiat officia reprehenderit ipsam accusantium,
				</div>
				<div className="readThePost">
					Read More
					<img src={arrow} alt="" />
				</div>
			</div>
		</div>
	</div>
  )
}

export default What