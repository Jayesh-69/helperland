import React, { useState } from "react";

import { send } from "emailjs-com";

import star from "../resources/assests/title-bottom-star.png"

function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mnumber, setMnumber] = useState("");
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const contactInfo = {
    firstName: fname,
    lastName: lname,
    number: mnumber,
    email: email,
    pass: password,
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if(!isError){
      	if(password === cpassword){
	    	console.log(contactInfo);
	    	setFname("");
	    	setLname("");
	    	setMnumber("");
	    	setIsError(false);
	    	setEmail("");
	    	setPassword("");
	    	setCpassword("");
	    	send(
      			"service_vmh0swv",
      			"template_hqmy109",
      			contactInfo,
      			"GgqxB6g5J7vInlvcn"
    		)
      		.then((response) => {
		        console.log("SUCCESS!", response.status, response.text);
      		})
      		.catch((err) => {
		        console.log("FAILED...", err);
      		});
      	}
      	else{
      		alert("password doesnt match")
      	}
    }
    else{
    	alert("The number you entered should be of length 10")
    }
  };

  return (
    <div className="contactTouch container-fluid">
      <p className="contactTouchHeading"style={{marginBottom: '0'}} >Create an account</p>
      <div style={{display: 'flex',justifyContent: 'center',marginBottom: '2%'}}>
        <img src={star} alt=""/>
      </div>
      <form className="contactTouchForm" onSubmit={handelSubmit}>
        <input
          id="fname"
          type="text"
          placeholder="First Name"
          value={fname}
          required
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lname}
          required
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <input
          id="mnumber"
          type="tel"
          placeholder="Mobile Number"
          value={mnumber}
          error={isError}
          required
          onChange={(e) => {
            setMnumber(e.target.value);
            if (e.target.value.length != 10) {
              setIsError(true);
            }
            else{
              setIsError(false);
            }
          }}
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={cpassword}
          required
          onChange={(e) => setCpassword(e.target.value)}
        />
        <br />
        <button
          type="submit"
          style={{ border: "1px solid #1d7a8c", marginTop: "2%" }}
        >
          Register
        </button><br/>
        Already register? <a href="/">Login Now</a><br/>
      </form>
    </div>
  );
}

export default SignUp;
