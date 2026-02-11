import Notecard from './Notecard';
import Button from '../../assets/button.svg';
import '../../css/Grid.css';
import messages from '../../data.json';
import { useMemo, useState } from 'react';

interface Message {
	Timestamp: string;
	'Your email': string;
	'Sender Name (If you want to be anonymous, leave this blank!)': string;
	'Receiver Name': string;
	'Receiver Email': string;
	Message: string;
}

const Grid: React.FC = () => {
	// const messages = ['Hey', 'Wassup', 'Hello', 'Happy birthday Jeff! Have a good birthday! This is a really long example message because i want to check if scrolling works']; // Example messages

	// Explicitly assert that 'messages' is of type Messages
	const typedMessages: Message[] = messages;

	// Shuffle messages using the Fisher-Yates algorithm
	const shuffledMessages = useMemo(() => {
		const copy = [...typedMessages];

		for (let i = copy.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[copy[i], copy[j]] = [copy[j], copy[i]];
		}

		return copy;
	}, [typedMessages]);

	const [visibleNotes, setVisibleNotes] = useState(10);

	// Function to render only the visible notecards
	const renderNotecards = () => {
		return shuffledMessages.slice(0, visibleNotes).map((message, index) => {

			return (
				<div key={index} className="grid-item">
					<Notecard text={message.Message}/>
				</div>
			);
		});
	};

	const loadMoreNotes = () => {
		setVisibleNotes((prev) => Math.min(prev + 10, shuffledMessages.length));
	};

	return (
		<div className="grid-container">
			<div className="grid">{renderNotecards()}</div>
			<button id="load-more-button" onClick={loadMoreNotes}>
				<img src={Button} alt='Load More button'/>
			</button>
		</div>
	);
};

export default Grid;
