import '../../css/Notecard.css';
import React, { useState, useRef, useEffect } from 'react';

interface NotecardProps {
	text: string;
} 

const Notecard: React.FC<NotecardProps> = ({ text }) => {
	const [flipped, setFlipped] = useState(false);

	const toggle = () => setFlipped((f) => !f);

	const rotationA = useRef(`${Math.random() * 10 - 5}deg`); // 0 to 5
	const rotationB = useRef(`${Math.random() * 10 - 5}deg`); 
	
	
	
	// this could even have a function for the direction cards face
	return (
		
		<div
			className={`wrapper ${!flipped ? 'back flipped' : 'front'}`}
			onMouseOver={toggle}
			onMouseLeave={toggle}
			aria-pressed={flipped}
			style={{
				'--rota': rotationA.current, 
				'--rotb': rotationB.current
			  } as React.CSSProperties}
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
