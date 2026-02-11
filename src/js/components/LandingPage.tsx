import '../../css/main.scss'; // Import the external CSS file

const LANDING_IMAGE = 'https://www.michigandaily.com/wp-content/uploads/2026/02/IMG_6697-scaled.png';

const LandingPage = () => {
	return (
		<section className="landing-hero">
			<div className="landing-page-container">
				<img
					src={LANDING_IMAGE}
					alt="2026 Statement Love Edition Cover: Scrabble, cards, chess pieces, and dice"
					className="landing-image"
				/>
			</div>
			<a href="#word-search" className="down-arrow-wrapper">
				<img
					src="https://www.michigandaily.com/wp-content/uploads/2025/02/chevron_wrapper.png"
					alt="Downwards white arrow"
					id="down-arrow"
				/>
				<span className="down-arrow-text">READ MORE</span>
			</a>
		</section>
	);
};

export default LandingPage;