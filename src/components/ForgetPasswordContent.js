import React,{useState} from 'react';

function ForgetPasswordContent() {

	const [email, setEmail] = useState("");

	const handelSubmit = (e) => {
    e.preventDefault();
    alert('password reset link has been sent to your email')
  }

	return (
		<div>
			<h3>Forget Password</h3>
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
            	<button
              		type="submit"
              		style={{ border: "1px solid #1d7a8c", marginTop: "2%" }}
            	>
              		Send
            	</button>
            	<br/>
            	<a href="/">Login</a>
          	</form>
		</div>
	)
}

export default ForgetPasswordContent;