import React,{useState} from 'react'

import { send } from "emailjs-com";
import arrow from "../resources/assests/arrow.png"

function Register() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mnumber, setMnumber] = useState("");
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

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
        if(password === cPassword){
        console.log(contactInfo);
        setFname("");
        setLname("");
        setMnumber("");
        setIsError(false);
        setEmail("");
        setPassword("");
        setCPassword("");
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
    <div className="container-fluid proRegister">
      <p className="proRegisterHeading">Register Now!</p>
        <form className="" onSubmit={handelSubmit}>
          <input
            id="fname"
            type="text"
            placeholder="First Name"
            value={fname}
            required
            onChange={(e) => setFname(e.target.value)}
          /><br/>
          <input
            id="lname"
            type="text"
            placeholder="Last Name"
            value={lname}
            required
            onChange={(e) => setLname(e.target.value)}
          /><br/>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          /><br/>
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
          /><br/>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          <input
            type="password"
            placeholder="Confirm password"
            value={cPassword}
            required
            onChange={(e) => setCPassword(e.target.value)}
          />
          <br />
          <input type="checkbox" name="tnc" id="protnc" style={{width: 'auto', height: '13px'}} required/>
          <label htmlFor="tnc">I accept <a href="#" style={{color: '#1FB6FF'}}>terms and conditions</a> & <a href="#" style={{color: '#1FB6FF'}}>privacy policy</a></label>
          <button
            type="submit"
            style={{ 
              backgroundColor:'#1D7A8C',
              borderRadius: '23px 23px 23px 23px',
              marginBottom: '3%',
              color :'white',
              padding:'13px 19px 14px 27px',
              border: "1px solid #1d7a8c", 
              marginTop: "2%",
            }}
          >
            Get Started <img src={arrow} alt=""/>
          </button><br/>
        </form>
    </div>
  )
}

export default Register