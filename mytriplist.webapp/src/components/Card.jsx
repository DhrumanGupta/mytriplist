import React from 'react';

function Card(props) {
	return (
		<div className={`card ${props?.className || ''} ${props.shadow && 'card-shadow'}`}>
			{props.children}
		</div>
	);
}

export default Card;