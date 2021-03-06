import React, { useState } from "react";

import { send } from "emailjs-com";

function GetInTouch() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mnumber, setMnumber] = useState("");
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const contactInfo = {
    firstName: fname,
    lastName: lname,
    number: mnumber,
    email: email,
    sub: subject,
    textMsg: message,
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if(isError){
      alert("The number you entered should be of length 10")
    }
    console.log(contactInfo);
    setFname("");
    setLname("");
    setMnumber("");
    setIsError(false);
    setEmail("");
    setSubject("");
    setMessage("");
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
  };

  return (
    <div className="contactTouch container-fluid">
      <p className="contactTouchHeading">Get in touch with us</p>
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
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option>Subject</option>
          <option>lorem</option>
          <option>ipsum</option>
          <option>dolor</option>
          <option>sit</option>
          <option>consectetur</option>
          <option>elit</option>
          <option>eius</option>
          <option>quaerat</option>
        </select>
        <br />
        <textarea
          cols="45"
          rows="5"
          placeholder="Message"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        <button
          type="submit"
          style={{ border: "1px solid #1d7a8c", marginTop: "2%" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default GetInTouch;
