import React from 'react'
import blogLeft from "../resources/assests/blog-left-bg.png";
import blogRight from "../resources/assests/blog-right-bg.png";
import freeTime from "../resources/assests/free-time-img.png";

import blogImg1 from "../resources/assests/blog-img-1.jpg";
import blogImg2 from "../resources/assests/blog-img-2.jpg";
import blogImg3 from "../resources/assests/blog-img-3.jpg";

import arrow from "../resources/assests/arrow.png";

function Blog() {
  return (
    <div className="blog">
      <div className="container-fluid">
        <div className="row" style={{ overflow: "hidden" }}>
          <div className="blogImage col-lg-1 col-md-1">
            <img src={blogLeft} alt="" />
          </div>
          <div className="blogContent col-lg-10 col-md-10">
            <div className="row blogHeadingCol">
              <div className="blogHeading col-md-8 col-sm-12">
                <h1>We do not know what makes you happy,but...</h1>
                <p>
                  If it's not dusting off,our friendly helpers will free you
                  from this burden-do not worry anymore about spending valuable
                  time doing housework, but savor life,you're well worth your
                  time with beautiful experiences.Free yourself and enjoy
                  the gained time: Go celebrate, relax, play with your children,
                  meet friends or dare to jump on the bungee.Other leisure ideas
                  and exclusive events can be found in our blog - guaranteed
                  free from dust and cleaning tips!
                </p>
              </div>
              <div className="blogHeadingImage col-md-4 col-sm-12">
                <img src={freeTime} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="why-helperhand">
              <h2 className="text-center">Our Blog</h2>
              <div className="container ">
                <div className="row">
                  <div
                    className="col-lg-4 col-md-4"
                    style={{
                      boxShadow: "0px 0px 30px #e4ebf0",
                      borderRadius: "4px",
                      opacity: "1",
                      marginBottom: "3%",
                    }}
                  >
                    <img className="blog-img" src={blogImg1} />
                    <p className="blog-text">Lorem ipsum dolor sit amet</p>
                    <p className="blog-date">January 28,2019</p>
                    <p className="blog-sub-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed fermentum metus pulvinar aliquet.
                    </p>
                    <button type="submit" className="btn read-post">
                      Read the post
                      <img src={arrow} />
                    </button>
                  </div>
                  <div
                    className="col-lg-4 col-md-4"
                    style={{
                      boxShadow: "0px 0px 30px #e4ebf0",
                      borderRadius: "4px",
                      opacity: "1",
                      marginBottom: "3%",
                    }}
                  >
                    <img className="blog-img" src={blogImg2} />
                    <p className="blog-text">Lorem ipsum dolor sit amet</p>
                    <p className="blog-date">January 28,2019</p>
                    <p className="blog-sub-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed fermentum metus pulvinar aliquet.
                    </p>
                    <button type="submit" className="btn read-post">
                      Read the post
                      <img src={arrow} />
                    </button>
                  </div>
                  <div
                    className="col-lg-4 col-md-4"
                    style={{
                      boxShadow: "0px 0px 30px #e4ebf0",
                      borderRadius: "4px",
                      opacity: "1",
                      marginBottom: "3%",
                    }}
                  >
                    <img className="blog-img" src={blogImg3} />
                    <p className="blog-text">Lorem ipsum dolor sit amet</p>
                    <p className="blog-date">January 28,2019</p>
                    <p className="blog-sub-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed fermentum metus pulvinar aliquet.
                    </p>
                    <button type="submit" className="btn read-post">
                      Read the post
                      <img src={arrow} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blogImage col-lg-1 col-md-1">
            <img src={blogRight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog