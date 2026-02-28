import '../../css/article.scss';
import '../../css/main.scss';
import Article from './Article';

const ArticleGallery = ({ articles, index, setIndex }: ArticleListProps) => {
	// articles is a list of JSON

	const progressBars = [
		'https://www.michigandaily.com/wp-content/uploads/2026/02/progress-bar-0.png',
		'https://www.michigandaily.com/wp-content/uploads/2026/02/progress-bar-1.png',
		'https://www.michigandaily.com/wp-content/uploads/2026/02/progress-bar-2.png',
		'https://www.michigandaily.com/wp-content/uploads/2026/02/progress-bar-3.png',
		'https://www.michigandaily.com/wp-content/uploads/2026/02/progress-bar-4.png'
	];

	return (
		<>
			<div className="letter-with-arrows">
				<Article {...articles[index]} />
				<div className="arrows-and-progress-bar">
					{/* left arrow button */}
					<button
						onClick={() => setIndex((index - 1 + progressBars.length) % progressBars.length)}
						className="arrow left"
					>
						<img
							src={'https://www.michigandaily.com/wp-content/uploads/2026/02/left-button.png'}
							alt="Left arrow button"
						/>
					</button>

					<img className="progress-bar" src={progressBars[index]} alt="Heart progress bar" />

					{/* right arrow button */}
					<button
						onClick={() => setIndex((index + 1) % progressBars.length)}
						className="arrow right"
					>
						<img
							src={'https://www.michigandaily.com/wp-content/uploads/2026/02/right-button.png'}
							alt="Right arrow button"
						/>
					</button>
				</div>
			</div>
		</>
	);
};

// the "data" contained in each article (part of articles list)
interface ArticleProps {
	title: string;
	author: string;
	date: string;
	articleUrl: string;
	photoUrl: string;
	photoAltText: string;
}

interface ArticleListProps {
	articles: ArticleProps[]; // List of articles
	index: number;
	setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default ArticleGallery;
