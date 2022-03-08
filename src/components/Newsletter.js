import React from 'react';

import topArrow from "../resources/assests/top-arrow.png";
import liveChat from "../resources/assests/ic-live-chat.png";

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="backToTop">
        <img src={topArrow} style={{ width: "64px" }} />
      </div>
      <div className="newsletterContent">
        <p className="text">GET OUR NEWSLETTER</p>
        <div className="emailcol">
          <div className="emailCol">
            <input className="emailTextbox" placeholder="  YOUR EMAIL" />
          </div>
          <div className="submitCol">
            <button className="submitButton">SUBMIT</button>
          </div>
        </div>
      </div>
      <div className="liveChat">
        <img src={liveChat} style={{ width: "42px" }} />
      </div>
    </div>
  );
}

export default Newsletter;