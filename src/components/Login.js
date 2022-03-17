import React from 'react';

function Login(props) {
	return (props.trigger) ? (
		<div className="popup-box">
			<div className="box">
				<span className="close-icon" onClick={() => props.setTrigger(false)}>x</span>
				{props.children}
			</div>
		</div>
	): "";
}

export default Login;