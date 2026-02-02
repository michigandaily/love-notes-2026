import '../../css/main.scss'; // Import the external CSS file
import WordSearch from '../../assets/word-search.svg';
import ArticleGallery from '../components/ArticleGallery';

const articles = [
	{
		title: 'My vain fascination with ChatGPT',
		author: 'Statement Correspondent Madison Hammond',
		date: '02/11/2025',
		articleUrl: 'https://www.michigandaily.com/statement/my-vain-fascination-with-chatgpt/',
		photoUrl:
			'https://www.michigandaily.com/wp-content/uploads/2025/02/Web-Design-Artwork-83-1.png',
		photoAltText:
			'Digital illustration of a pink robot smiling, with a heart border around the frame'
	},
	{
		title: 'What is love: Love defined through the eyes of elementary school students',
		author: 'Statement Contributor Lola Post',
		date: '02/12/2025',
		articleUrl:
			'https://www.michigandaily.com/statement/what-is-love-love-defined-through-the-eyes-of-elementary-school-students/',
		photoUrl: 'https://www.michigandaily.com/wp-content/uploads/2025/02/Web-Design-Artwork-87.png',
		photoAltText:
			'Digital illustration of a female child coloring a heart on the ground, with love-themed drawings around her'
	},
	{
		title: 'Ode to the sapphic love song',
		author: 'Statement Correspondent Amanda Venclovaite-Pirani',
		date: '02/13/2025',
		articleUrl: 'https://www.michigandaily.com/statement/ode-to-the-sapphic-love-song/',
		photoUrl: 'https://www.michigandaily.com/wp-content/uploads/2025/02/Web-Design-Artwork-84.png',
		photoAltText: 'Digital illustration of two cassette tapes with two tulips'
	},
	{
		title: 'Just friends: Are boys and girls ever purely platonic?',
		author: 'Statement Correspondent Liska Torok',
		date: '02/14/2025',
		articleUrl:
			'https://www.michigandaily.com/statement/just-friends-are-boys-and-girls-ever-purely-platonic/',
		photoUrl: 'https://www.michigandaily.com/wp-content/uploads/2025/02/Web-Design-Artwork-85.png',
		photoAltText: 'Digital illustration of two hands grazing each other against a pink background'
	},
	{
		title: 'Him & I (Me & Her)',
		author: 'Statement Columnist Allana Smith',
		date: '02/14/2025',
		articleUrl: 'https://www.michigandaily.com/statement/him-i-me-her/',
		photoUrl: 'https://www.michigandaily.com/wp-content/uploads/2025/02/Web-Design-Artwork-86.png',
		photoAltText:
			"Digital illustration of two girls' eyes, looking at each other against a pink background"
	}
];

const LandingPage = () => {
	return (
		<div className="landing-page-container">
			{/* <img
				src="https://www.michigandaily.com/wp-content/uploads/2025/02/love-edition-cover-page-scaled.jpg"
				alt="Statement Love Edition Cover: Flowers, chocolates, and love letters"
				id="landing-page-image"
			></img>
			<img
				src="https://www.michigandaily.com/wp-content/uploads/2025/02/chevron_wrapper.png"
				alt=""
				id="down-arrow"
			></img> */}
			<div className='word-search'>
				<img src={WordSearch} alt='Michiga Daily word search' />
				<div className='article-bank'>
					
				</div>
			</div>
			<div className='articles'>
				<ArticleGallery articles={articles} />
			</div>
		</div>
	);
};

export default LandingPage;
