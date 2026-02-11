import '../../css/main.scss'; // Import the external CSS file

const LANDING_IMAGE = 'https://www.michigandaily.com/wp-content/uploads/2026/02/IMG_6697-scaled.png';

const LandingPage = () => {
	return (
		<div
			className="landing-page-container"
			style={{ backgroundImage: `url(${LANDING_IMAGE})` }}
			role="img"
			aria-label="2026 Statement Love Edition Cover: Scrabble, cards, chess pieces, and dice"
		>
			<img
				src="https://www.michigandaily.com/wp-content/uploads/2025/02/chevron_wrapper.png"
				alt=""
				id="down-arrow"
			/>
		</div>
	);
};

export default LandingPage;