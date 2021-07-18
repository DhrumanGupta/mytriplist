import React from 'react';

function Button(props) {
	const handleClick = (event) => {
		if (props.disabled) return;
		if (props.handleClick) {
			props.handleClick(event);
		}
	}
	
	return (
		<button className={`button ${props.white ? 'button-white' : 'button-blue'} ${props?.className || ''}`} type={props.type} onClick={handleClick} disabled={props.disabled || false}>
			{props.children}
		</button>
	);
}

export default Button;