import React from 'react'

import expVetPro from "../resources/assests/experience-vetted-professionals.jpg";
import secOnPay from "../resources/assests/secure-online-payment.jpg";
import dedCusSer from "../resources/assests/dedicated-customer-service.jpg";

function Why() {
  return (
    <div className="why">
		<h1>Why Helperland</h1>
		<div className="container" style={{marginTop: '3%', width: '65%'}}>
			<div className="row">
				<div className="points col col-md-4 col-sm-6">
					<img src={expVetPro} className="img-fluid" alt="" />
					<p className="heading">Experience & Vetted<br />Professionals</p>
					<p className="subHeading">
						dominate the industry in scale and scope with an adaptable,
						extensive network that consistently delivers exceptional results.
					</p>
				</div>
				<div className="points col col-md-4 col-sm-6">
					<img src={secOnPay} className="img-fluid" alt="" />
					<p className="heading">Secure Online<br/>Payment</p>
					<p className="subHeading">
						Payment is processed securely online.Customers pay safely online
						and manage the booking.
					</p>
				</div>
				<div className="points col col-md-4 col-sm-6" style={{margin:'0 auto'}}>
					<img src={dedCusSer} className="img-fluid" alt="" />
					<p className="heading">Dedicated Customer<br />Service</p>
					<p className="subHeading">
						to our customers and are guided in all we do by their needs. The
						team is always happy to support you and offer all the information.
					</p>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Why