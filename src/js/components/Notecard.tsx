import '../../css/Notecard.css';
import React, { useState, useRef, useCallback } from 'react';

interface NotecardProps {
	text: string;
}

const Notecard: React.FC<NotecardProps> = ({ text }) => {
	const [flipped, setFlipped] = useState(false);
	const rotationA = useRef(`${Math.random() * 10 - 5}deg`);
	const rotationB = useRef(`${Math.random() * 10 - 5}deg`);
	const didScroll = useRef(false);

	const onLetterTouchStart = useCallback(() => {
		didScroll.current = false;
	}, []);
	const onLetterTouchMove = useCallback(() => {
		didScroll.current = true;
	}, []);
	const onLetterClick = useCallback((e: React.MouseEvent) => {
		e.stopPropagation(); // always stop — letter never flips
		if (!didScroll.current) {
			// tap (not scroll) → flip manually
			setFlipped((f) => !f);
		}
	}, []);

	return (
		<div
			className="notecard"
			onClick={() => setFlipped((f) => !f)}
			onPointerEnter={(e) => {
				if (e.pointerType === 'mouse') setFlipped(true);
			}}
			onPointerLeave={(e) => {
				if (e.pointerType === 'mouse') setFlipped(false);
			}}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					setFlipped((f) => !f);
				}
			}}
			aria-pressed={flipped}
			style={
				{
					'--rota': rotationA.current,
					'--rotb': rotationB.current
				} as React.CSSProperties
			}
		>
			<div className={`notecard-card ${flipped ? 'flipped' : ''}`}>
				<div className="card-face front" />
				<div className="card-face back" aria-hidden="true" />
			</div>
			<div
				className="letter"
				onTouchStart={onLetterTouchStart}
				onTouchMove={onLetterTouchMove}
				onClick={onLetterClick}
			>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Notecard;
