import React from 'react'

import AboutUsBanner from "../resources/assests/about-us-banner.png"
import star from "../resources/assests/title-bottom-star.png"

import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Privacy from '../components/Privacy'


function AboutUs() {
  return (
    <div>
      <Navbar/>
      <div className="aboutPoster">
        <img src={AboutUsBanner} alt=""/>
      </div>
      {/* few words */}
      <div className="aboutWord container-fluid">
          <p className="contactUsHeading">A Few words about us</p>
          <img src={star} alt=""/>
          <div className="aboutContent">
              <p>
                  Ipsa facilis earum ea rerum odio. Sunt et sit ut tempore debitis. Aliquid consequuntur pariatur quas blanditiis qui.
              </p>
              <p>
                  Eum voluptate omnis quo soluta nesciunt ut ut dicta nulla. Voluptatem dicta accusantium consequatur qui a sint quia dolorum. Culpa facere ratione ut. Et tempore molestiae. 
                  Debitis animi laboriosam minima eum ullam a. Quae tenetur qui iusto et. Modi quam a numquam.
                  Ut dolore voluptatem eum non. Delectus vel et. Quae ut et quidem quia qui. Dolores non ipsam nihil dicta non sapiente qui.
              </p>
          </div>
      </div>
      {/* our story  */}
      <div className="aboutStory container-fluid">
          <p className="contactUsHeading">Our Story</p>
          <img src={star} alt=""/>
          <div className="aboutContent">
              <p>Ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti necessitatibus dolorem soluta, amet alias atque possimus ab distinctio fugiat delectus in obcaecati, cum ad exercitationem animi nulla molestiae doloribus officiis? facilis earum ea rerum odio. Sunt et sit ut tempore debitis. Aliquid consequuntur pariatur quas blanditiis
                  qui.
              </p>
              <p>
                  Eum voluptate omnis quo soluta nesciunt ut ut dicta nulla. Voluptatem dicta accusantium consequatur qui a sint
                  quia dolorum. Culpa facere ratione ut. Et tempore molestiae.
                  Debitis animi laboriosam minima eum ullam a. Quae tenetur qui iusto et. Modi quam a numquam.
                  Ut dolore voluptatem eum non. Delectus vel et. Quae ut et quidem quia qui. Dolores non ipsam nihil dicta non
                  sapiente qui.
              </p>
          </div>
      </div>
      <Newsletter/>
      <Footer/>
      <div className="horizontalLine">
        <hr style={{width:'80%',textAlign:'left',marginLeft:'10%',color:'white',marginTop: '0',marginBottom: '0'}}/>
      </div>
      <Privacy/>
    </div>
  )
}

export default AboutUs