import React from 'react';

function ForgetPassword(props) {
	return (props.trigger) ? (
		<div className="popup-box">
			<div className="box" style={{marginTop: '6%'}}>
				<span className="close-icon" onClick={() => props.setTrigger(false)}>x</span>
				{props.children}
			</div>
		</div>
	): "";
}

export default ForgetPassword;