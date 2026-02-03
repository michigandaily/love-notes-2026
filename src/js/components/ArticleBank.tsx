import '../../css/main.scss';
import '../../css/article-bank.scss';

const ArticleBank = ({ articles, index }: ArticleListProps) => {
	// articles is a list of JSON

	// const [index, setIndex] = useState(0);

	return (
        <div className='article-bank-container'>
            <h2>ARTICLES</h2>
            <div className="article-bank-list">
                {articles.map((article, articleIndex) => (
				    <a href={article.articleUrl} target="_blank" rel="noreferrer"
                        key={articleIndex}
                        className={`article ${articleIndex === index ? 'selected' : ''}`}
                    >
                        <p className="article-name">{article.title}</p>
                    </a>
						
                ))}
            </div>
        </div>
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
	// setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default ArticleBank;
