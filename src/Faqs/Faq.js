import React from 'react'

import bullet from "../resources/assests/bullet-arrow.png"
import bulletdown from "../resources/assests/bullet-arrow-down.png";

function Faq() {

  const showFaq = (i) => {
    var x = document.getElementById("faq" + i);
    if (x.style.display === "none") {
      x.style.display = "block";
      var y = document.getElementById("faq" + i + "BulletImg");
      y.src = bulletdown;
    } else {
      x.style.display = "none";
      var y = document.getElementById("faq" + i + "BulletImg");
      y.src = bullet;
    }
  }

  const switchFaqs = (temp) => {
    var x = document.getElementById("customerFaqs");
    var y = document.getElementById("serviceFaqs");
    if (temp == 0) {
      x.style.display = "block";
      y.style.display = "none";
      var xx = document.getElementById("contentCustomer");
      var xxx = document.getElementById("customerSwitch");
      var yy = document.getElementById("contentService");
      var yyy = document.getElementById("serviceSwitch");
      yyy.style.color = "black";
      yy.style.backgroundColor = "#f4f5f8";
      xxx.style.color = "white";
      xx.style.backgroundColor = "#29626d";
    } else {
      x.style.display = "none";
      y.style.display = "block";
      var xx = document.getElementById("contentCustomer");
      var xxx = document.getElementById("customerSwitch");
      xxx.style.color = "black";
      xx.style.backgroundColor = "#f4f5f8";
      var yy = document.getElementById("contentService");
      var yyy = document.getElementById("serviceSwitch");
      yyy.style.color = "white";
      yy.style.backgroundColor = "#29626d";
    }
  }


  return (
    <div className="container-fluid faqsContent">
      <div className="faqContentHeading">
        <p>
          Whether you are Customer or Service provider,
          <br /> We have tried our best to solve all your queries and questions.
        </p>
      </div>
      <div className="row faqSwitch">
        <div className="col-md-6 text-center" id="contentCustomer">
          <a href="#customer" onClick={() => switchFaqs(0)} id="customerSwitch">
            For Customer
          </a>
        </div>
        <div className="col-md-6 text-center" id="contentService">
          <a href="#service" onClick={() => switchFaqs(1)} id="serviceSwitch">
            For Service Provider
          </a>
        </div>
      </div>
      <div id="customerFaqs">
        <div className="row">
          <div className="col-1">
            <a href="#faq1" onClick={() => showFaq(1)}>
              <img id="faq1BulletImg" src={bullet} />
            </a>
          </div>
          <div className="col-11">
            <p className="bulletPoints"> What's included in cleaning?</p>
            <p id="faq1" className="bulletPointsAns">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              diam tincidunt, fringilla ante vitae, dapibus
            </p>
          </div>
          <div className="col-1">
            <a href="#faq2" onClick={() => showFaq(2)}>
              <img id="faq1BulletImg" src={bullet} />
            </a>
          </div>
          <div className="col-11">
            <p className="bulletPoints"> Do I need to be home for the booking?</p>
            <p id="faq2" className="bulletPointsAns">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              diam tincidunt, fringilla ante vitae, dapibus
            </p>
          </div>
        </div>
      </div>
      <div id="serviceFaqs">
        <div className="row">
          <div className="col-1">
            <a href="#faq1" onclick={() => showFaq(1)}>
              <img id="faq1BulletImg" src={bullet} />
            </a>
          </div>
          <div className="col-11">
            <p className="bulletPoints">
              {" "}
              Lol Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nisl nunc, iaculis mattis tellus ac ut non imperdiet
              velit?
            </p>
            <p id="faq1" className="bulletPointsAns">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              diam tincidunt, fringilla ante vitae, dapibus velit. Vivamus id
              tortor rhoncus, efficitur quam at, suscipit tortor. Integer
              fermentum convallis eros vel semper. Ut non imperdiet velit.
              Praesent eu dui vel lacus porta eleifend eget quis dui. Integer
              tempus massa in gravida tincidunt. Fusce in libero tristique,
              euismod nisi vel, luctus urna. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Donec et placerat arcu. Suspendisse
              lacinia tristique massa. Etiam risus justo, scelerisque id arcu
              eu, sodales tempor eros. Aliquam efficitur pretium urna, sit amet
              congue risus malesuada rutrum. Donec id massa vel velit
              ullamcorper accumsan ut eget nisl. Fusce viverra commodo lacus,
              sit amet facilisis leo luctus dictum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq