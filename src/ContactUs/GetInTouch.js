import React, { useState } from "react";

function GetInTouch() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mnumber, setMnumber] = useState("");
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
    console.log(contactInfo);
    setFname("");
    setLname("");
    setMnumber("");
    setEmail("");
    setSubject("");
    setMessage("");
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
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <input
          id="mnumber"
          type="number"
          placeholder="Mobile Number"
          value={mnumber}
          onChange={(e) => setMnumber(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
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
