import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';
import Instagram from '../../assets/instagram.svg';
// import Mailbox from '../../assets/mailbox.svg';
import FooterItems from '../../assets/footer-items.svg';
import '../../css/main.scss';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="top-row">
				<div className="credits">
					<p>
						<strong>Designed By:</strong> Annice Chang, Aalleyah Fysudeen, Sanvika Inturi, Shanshan Ye
					</p>
					<p>
						<strong>Developed By:</strong> 
					</p>
				</div>
				<div className='social-icons'>
					<a href="https://www.facebook.com/michigandaily" target="_blank" rel="noreferrer">
						<img src={Facebook} alt="Facebook" />
					</a>
					<a href="https://twitter.com/michigandaily" target="_blank" rel="noreferrer">
						<img src={Twitter} alt="Twitter" />
					</a>
					<a href="https://www.instagram.com/michigandaily" target="_blank" rel="noreferrer">
						<img src={Instagram} alt="Instagram" />
					</a>
				</div>
			</div>
			<div className='bottom-row'>
				<img src={FooterItems} alt="SVG with two pictures" style={{
    width: '80%',    // stretch full width
    height: 'auto',   // keep aspect ratio
    display: 'block'  // remove default inline spacing
  }}/>
  				<span className="overlay-text">The Michigan Daily Love Edition, 2026</span>
			</div>
		</footer>
	);
};

export default Footer;
