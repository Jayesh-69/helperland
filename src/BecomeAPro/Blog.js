import React from 'react'

import Newsletter from "../components/Newsletter"

import blogLeftImg from "../resources/assests/blog-left-bg.png"
import blogRightImg from "../resources/assests/blog-right-bg.png"
import arrow from "../resources/assests/arrow.png"
import pro1 from "../resources/assests/pro1.png"
import pro2 from "../resources/assests/pro2.png"
import pro3 from "../resources/assests/pro3.png"

function Blog() {
  return (
     <div className="blog">
        <div className="container-fluid">
            <div className="row" style={{overflow: 'hidden'}}>
                <div className="blogImage col-lg-1 col-md-1">
                    <img src={blogLeftImg} alt=""/>
                </div>
                <div className=" col-lg-10 col-md-10">
                    <div className="proContent">
                        <h2 style={{marginBottom: '5%'}}>How it works</h2>
                        <div className="col-md-6 proHow">
                            <div className="row proRow d-flex justify-md-content-between justify-content-center align-items-center flex-md-nowrap flex-wrap-reverse">
                                <div className="col-md-6 proMain">
                                    <p className="proHowHeading">Register yourself</p>
                                    <p className="proHowPara">provide your basic information to register yourself as a service provider.</p>
                                    <p className="proReadMore">Read more <img src={arrow} alt=""/></p>
                                </div>
                                <div className="col-md-6 img-fluid" style={{display: 'flex', justifyContent: 'center'}}><img className="proImage" src={pro2} alt=""/></div>
                            </div>
                            <div className="row proRow d-flex justify-md-content-between justify-content-center align-items-center flex-md-nowrap flex-wrap">
                                <div className="col-md-6 img-fluid" style={{display: 'flex', justifyContent: 'center'}}><img className="proImage" src={pro1} alt=""/></div>
                                <div className="col-md-6 proMain">
                                    <p className="proHowHeading">Get service requests</p>
                                    <p className="proHowPara">You will get service request from customer depends on service area and profile.</p>
                                    <p className="proReadMore">Read more <img src={arrow} alt=""/></p>
                                </div>
                            </div>
                            <div className="row proRow d-flex justify-md-content-between justify-content-center align-items-center flex-md-nowrap flex-wrap-reverse">
                                <div className="col-md-6 proMain">
                                    <p className="proHowHeading">Complete service</p>
                                    <p className="proHowPara">Accept service requests from your customers and complete your work.</p>
                                    <p className="proReadMore">Read more <img src={arrow} alt=""/></p>
                                </div>
                                <div className="col-md-6 img-fluid" style={{display: 'flex', justifyContent: 'center'}}><img className="proImage" src={pro3} alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter" style={{backgroundColor: 'white'}}>
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
                    </div>
                </div>
                <div className="blogImage col-lg-1 col-md-1">
                    <img src={blogRightImg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog