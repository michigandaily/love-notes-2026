import '../../css/main.scss';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="top-row">
				<div className="credits">
					<p>
						<strong>Designed By:</strong> Annice Chang, Aalleyah Fysudeen, Sanvika Inturi, and
						Shanshan Ye
					</p>
					<p>
						<strong>Developed By:</strong> Grace Liu, Matthew Prock, Siya Vashi, Daniel Liu, and
						Julia Mei
					</p>
				</div>
				<div className="social-icons">
					<a href="https://www.facebook.com/michigandaily" target="_blank" rel="noreferrer">
						<img
							src={'https://www.michigandaily.com/wp-content/uploads/2026/02/facebook.png'}
							alt="Facebook"
						/>
					</a>
					<a href="https://twitter.com/michigandaily" target="_blank" rel="noreferrer">
						<img
							src={'https://www.michigandaily.com/wp-content/uploads/2026/02/twitter.png'}
							alt="Twitter"
						/>
					</a>
					<a href="https://www.instagram.com/michigandaily" target="_blank" rel="noreferrer">
						<img
							src={'https://www.michigandaily.com/wp-content/uploads/2026/02/instagram.png'}
							alt="Instagram"
						/>
					</a>
				</div>
			</div>
			<div className="bottom-row">
				<img
					src={'https://www.michigandaily.com/wp-content/uploads/2026/02/footer-items.png'}
					alt="SVG with two pictures"
					className="footer-svg"
				/>
				<img
					src={'https://www.michigandaily.com/wp-content/uploads/2026/02/footer-items-mobile.png'}
					alt="SVG with two pictures"
					className="footer-svg-mobile"
				/>
				<span className="overlay-text">The Michigan Daily Love Edition, 2026</span>
			</div>
		</footer>
	);
};

export default Footer;
