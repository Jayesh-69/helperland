import React from 'react'

import darrow from "../resources/assests/down-arrow-dark.png"
import rarrow from "../resources/assests/right-arrow-dark.png"

const BookAServiceQuestions = () => {

	const showFaq = (i) => {
		var x = document.getElementById("faq" + i);
  		if (x.style.display === "none") {
    		x.style.display = "block";
    		var y = document.getElementById("faq" + i + "BulletImg");
    		y.src = darrow;
  		} else {
    		x.style.display = "none";
    		var y = document.getElementById("faq" + i + "BulletImg");
    		y.src = rarrow;
  		}
	}

	return (
		<div className="bookServiceQuestion">
            <p style={{textAlign: 'center', fontSize: '20px', color: '#4F4F4F', fontWeight: 'bold'}}>Questions?</p>
            <div className="row bookQuestions">
                <div className="col-1">
                    <a href="#faq1" onClick={() => showFaq(1)}><img id="faq1BulletImg" src={rarrow}/></a>
                </div>
                <div className="col-11">
                    <p className="bookServicebulletPoints"> Lorem ipsum dolor sit amet</p>
                    <p id="faq1" className="bookServicebulletPointsAns">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
			</div>
			<div className="row bookQuestions">
                <div className="col-1">
                    <a href="#faq2" onClick={() => showFaq(2)}><img id="faq2BulletImg" src={rarrow}/></a>
                </div>
                <div className="col-11">
                    <p className="bookServicebulletPoints"> Lorem ipsum dolor sit amet</p>
                    <p id="faq2" className="bookServicebulletPointsAns">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
			</div>
			<div className="row bookQuestions">
                <div className="col-1">
                    <a href="#faq3" onClick={() => showFaq(3)}><img id="faq3BulletImg" src={rarrow}/></a>
                </div>
                <div className="col-11">
                    <p className="bookServicebulletPoints"> Lorem ipsum dolor sit amet</p>
                    <p id="faq3" className="bookServicebulletPointsAns">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
			</div>
			<div className="row bookQuestions">
                <div className="col-1">
                    <a href="#faq4" onClick={() => showFaq(4)}><img id="faq4BulletImg" src={rarrow}/></a>
                </div>
                <div className="col-11">
                    <p className="bookServicebulletPoints"> Lorem ipsum dolor sit amet</p>
                    <p id="faq4" className="bookServicebulletPointsAns">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
			</div>
 		</div>
	)
}

export default BookAServiceQuestions