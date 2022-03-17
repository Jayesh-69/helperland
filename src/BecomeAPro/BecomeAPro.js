import React from 'react'

import ProNavbar from "../components/ProNavbar"
import Blog from "./Blog"

import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Privacy from "../components/Privacy";

function BecomeAPro() {
  return (
    <div>
        <ProNavbar/>
        <Blog/>
        <Footer/>
        <div className="horizontalLine">
          <hr style={{width:'80%',textAlign:'left',marginLeft:'10%',color:'white',marginTop: '0',marginBottom: '0'}}/>
        </div>
        <Privacy/>
    </div>
  )
}

export default BecomeAPro