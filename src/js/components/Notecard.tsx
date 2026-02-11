import '../../css/Notecard.css';
import React, { useState, useRef } from 'react';

interface NotecardProps {
	text: string;
}

const Notecard: React.FC<NotecardProps> = ({ text }) => {
	const [flipped, setFlipped] = useState(false);
	const rotationA = useRef(`${Math.random() * 10 - 5}deg`);
	const rotationB = useRef(`${Math.random() * 10 - 5}deg`);

	const toggle = () => setFlipped((f) => !f);

	return (
		<div
			className="notecard"
			onClick={toggle}
			onPointerEnter={(e) => { if (e.pointerType === 'mouse') setFlipped(true); }}
			onPointerLeave={(e) => { if (e.pointerType === 'mouse') setFlipped(false); }}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					toggle();
				}
			}}
			aria-pressed={flipped}
			style={{
				'--rota': rotationA.current,
				'--rotb': rotationB.current
			} as React.CSSProperties}
		>
			<div className={`notecard-card ${flipped ? 'flipped' : ''}`}>
				<div className="card-face front">
					<div className="letter">
						<p>{text}</p>
					</div>
				</div>
				<div className="card-face back" aria-hidden="true" />
			</div>
		</div>
	);
};

export default Notecard;
