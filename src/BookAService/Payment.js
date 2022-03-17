import React from "react"

import smiley from "../resources/assests/smiley.png"

import BookAServiceQuestions from "./BookAServiceQuestions"

const Payment = () => {
	return(
		<div className="col-md-4">
			<div className="bookServicePayment">
                <p className="bookServicePaymentHeading">Payment Summary</p>
                <div style={{
                	borderBottom: '1px solid #C8C8C8', 
                	paddingBottom: '5%'
                }}>
                    <p className="bookServiceDate" style={{
                    	paddingLeft: '3%',
                    	marginBottom: '0'
                    }}>
                    	01/01/2018 @ 4:00 pm
                    </p>
                    <p className="bookServiceNumber" style={{
                    	paddingLeft: '3%'
                    }}>
                    	1 bed, 1 bath.
                    </p>
                    <p className="durationHeading">Duration</p>
                    <p style={{
                    	margin: '3%', 
                    	marginBottom: '0'
                    }}>
                    	Basic <span style={{float: 'right'}}>3 Hrs</span>
                    </p>
                    <p style={{
                    	margin: '3%',
                    	marginBottom: '0', 
                    	borderBottom: '2px solid #F3F3F3'
                    }}>
                    	Inside cabinets(extra) <span style={{float: 'right'}}>30 mins</span>
                    </p>
                    <p className="bookServiceTotalTime" style={{
                    	margin: '3%',
                    	marginBottom: '0'
                    }}>
                    	Total Service Time <span style={{float: 'right'}}>3.5 Hrs</span>
                    </p>
                </div>
                <div style={{borderBottom: '1px solid #C8C8C8', paddingBottom: '5%'}}>
                    <p style={{margin: '3%',marginBottom: '0'}}>Per cleaning <span style={{float: 'right', fontWeight: 'bold'}}>$87</span></p>
                    <p style={{margin: '3%',marginBottom: '0'}}>Discount <span style={{float: 'right', fontWeight: 'bold'}}>-$27</span></p>
                </div>
                <div style={{marginBottom: '5%'}}>
                    <p style={{margin: '3%', marginBottom: '2px', color: '#1D7A8C', fontSize: '20px',display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}><span>Total Payement</span> <span style={{float: 'right', fontSize: '42px', fontWeight: 'bold'}}>$63</span></p>
                    <p style={{margin: '0 3%'}}>Effective Price <span style={{float: 'right', fontWeight: 'bold'}}>$50.4</span></p>
                    <p style={{margin: '3%', marginBottom: '0', fontSize: '14px'}}><span style={{color: 'red'}}>*</span>You will save 20% according to lol</p>
                </div>
                <div>
                    <p style={{background: '#F3F3F3', padding: '3%', color: '#8D8D8D', fontSize: '14px'}}><img src={smiley} alt=""/> See what is always include.</p>
                </div>
            </div>
            <BookAServiceQuestions/>
            <div style={{paddingTop: '3%'}}>
                <a href="" style={{fontWeight: 'bold', color: '#1D7A8C'}}>For more help</a>
            </div>
		</div>
	)
}

export default Payment