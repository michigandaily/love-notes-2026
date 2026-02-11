import '../css/app.scss'; // Import the external CSS file
import WordSearch from '../assets/word-search.svg';
import ArticleGallery from './components/ArticleGallery';
import ArticleBank from './components/ArticleBank';

import { useState } from 'react';

const articles = [
	{
		title: 'Love, redefined by college students',
		author: 'Sarayu Bongale',
		date: '02/10/2026',
		articleUrl: 'https://www.michigandaily.com/statement/love-redefined-by-college-students/',
		photoUrl:
			'https://www.michigandaily.com/wp-content/uploads/2026/02/love-ed-web-lede.png',
		photoAltText:
			'An illustration of a section of a board game with a game piece sitting behind a booth on the side of the game path. Written on the booth is the phrase "What is love?".'
	},
	{
		title: 'Dear Michelle: A college love advice column',
		author: 'Michelle Liao',
		date: '02/10/2026',
		articleUrl:
			'https://www.michigandaily.com/statement/dear-michelle-a-college-love-advice-column/',
		photoUrl: 'https://www.michigandaily.com/wp-content/uploads/2026/02/love-ed-web-love-advice-column.png',
		photoAltText:
			'An illustration of a set of stationary including letter paper, a feather pen, and envelopes. There is also a newspaper and a puzzle with the final piece sitting aside of the puzzle.'
	},
	{
		title: 'Band of Brothers',
		author: 'Gabe Efros',
		date: '02/10/2026',
		articleUrl: 'https://www.michigandaily.com/statement/band-of-brothers/',
		photoUrl: 'https://www.michigandaily.com/wp-content/uploads/2026/02/love-ed-web-fleeting-love-2.png',
		photoAltText: 'An illustration of three boys watching a sunset with “GAME OVER” and “Restart?” written overhead.'
	},
	{
		title: 'We\'ll believe in anything',
		author: 'Brenna Wendell',
		date: '02/10/2026',
		articleUrl:
			'https://www.michigandaily.com/statement/well-believe-in-anything/',
		photoUrl: 'https://www.michigandaily.com/wp-content/uploads/2026/02/love-ed-web-heated-rivalry.png',
		photoAltText: 'An illustration of an air hockey table with a heart-shaped puck and a TV showing two hockey sticks clashing against another heart-shaped puck.'
	},
	{
		title: 'It\'s no secret that I love love — I mean, who doesn\'t? ',
		author: 'Filip Vignjevik',
		date: '02/10/2026',
		articleUrl: 'https://www.michigandaily.com/statement/its-no-secret-that-i-love-love-i-mean-who-doesnt/',
		photoUrl: 'https://www.michigandaily.com/wp-content/uploads/2026/02/love-ed-web-loving-to-love.png',
		photoAltText:
			"An illustration of a 'spin-the-bottle' setup with the bottle sitting on a heart-shaped mat."
	}
];


const App = () => {

	const [index, setIndex] = useState(0);

	return (
		<div className="header-container">
			<div className='word-search' id="word-search">
				<img src={WordSearch} alt='Michigan Daily word search'/>
				<div className='article-bank'>
					<ArticleBank articles={articles} index={index} />
				</div>
			</div>
			<div className='articles'>
				<ArticleGallery articles={articles} index={index} setIndex={setIndex} />
			</div>
		</div>
	);
};

export default App;
