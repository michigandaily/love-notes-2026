import '../../css/article.scss';
import '../../css/main.scss';
import RightArrow from '../../assets/right-button.svg';
import LeftArrow from '../../assets/left-button.svg';
import ProgressBar0 from '../../assets/progress-bar-0.svg';
import ProgressBar1 from '../../assets/progress-bar-1.svg';
import ProgressBar2 from '../../assets/progress-bar-2.svg';
import ProgressBar3 from '../../assets/progress-bar-3.svg';
import ProgressBar4 from '../../assets/progress-bar-4.svg';
import Article from './Article';

const ArticleGallery = ({ articles, index, setIndex }: ArticleListProps) => {
	// articles is a list of JSON

	const progressBars = [ProgressBar0, ProgressBar1, ProgressBar2, ProgressBar3, ProgressBar4];

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
						<img src={LeftArrow} alt='Left arrow button' />
					</button>

					<img src={progressBars[index]} alt='Heart progress bar' />

					{/* right arrow button */}
					<button 
						onClick={() => setIndex((index + 1) % progressBars.length)} 
						className="arrow right"
					>
						<img src={RightArrow} alt='Right arrow button' />
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
