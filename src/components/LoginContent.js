import React,{useState} from "react";

import ForgetPassword from "./ForgetPassword"
import ForgetPasswordContent from "./ForgetPasswordContent"

const LoginContent = () => {

	const [isOpen, setIsOpen] = useState(false);
 
  	const togglePopup = () => {
	    setIsOpen(!isOpen);
  	}

    const [email, setEmail] = useState("");
  	const [password, setPassword] = useState("");

	const handelSubmit = (e) => {
    e.preventDefault();
    console.log(69);
    setEmail("");
    setPassword("");
  }

	return(
		<>
			<h3>Login with your account</h3>
          	<form className="contactTouchForm" onSubmit={handelSubmit}>
	            <input
              		id="email"
              		type="email"
              		placeholder="Email"
              		value={email}
              		required
              		onChange={(e) => setEmail(e.target.value)}
            	/>
            	<br />
            	<input
              		type="password"
              		placeholder="Password"
              		value={password}
              		required
              		onChange={(e) => setPassword(e.target.value)}
            	/>
            	<br />
            	<input
              		type="checkbox"
              		style={{width:"auto"}}
            	/>
            		Remember me
            	<br/>
            	<button
              		type="submit"
              		style={{ border: "1px solid #1d7a8c", marginTop: "2%" }}
            	>
              		Login
            	</button>
            	<br/>
            	<a href="#" onClick={togglePopup}>Forgot Password?</a><br/>
            	Don't have an account?<a href="/sign-up">Create an account</a>
          	</form>
          	<ForgetPassword trigger={isOpen} setTrigger={setIsOpen}>
          		<ForgetPasswordContent/>
          	</ForgetPassword>
         </>
	)
}

export default LoginContent