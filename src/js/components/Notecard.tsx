import '../../css/Notecard.css';
import React, { useState } from 'react';

interface NotecardProps {
	text: string;
} 

const Notecard: React.FC<NotecardProps> = ({ text }) => {
	const [flipped, setFlipped] = useState(false);

	const toggle = () => setFlipped((f) => !f);

	// this could even have a function for the direction cards face
	return (
		<div
			className={`wrapper ${!flipped ? 'back flipped' : 'front'}`}
			onMouseOver={toggle}
			onMouseLeave={toggle}
			aria-pressed={flipped}
		>
			{/* <div className={`lid one ${color}`}></div>
			<div className={`lid two ${color}`}></div>
			<div className={`envelope ${color}`}>
				<div className="heart">❤️</div>
			</div> */}
			<div className="letter" >
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Notecard;
