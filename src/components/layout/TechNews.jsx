import React from 'react';
import news from '../../json/news.json';
import '../../style/layout/TechNews.scss';
const TechNews = () => {
	return (
		<div className="TechNews-div">
			<div className="news-title">
				<p className="news-title-p">TechNews</p>
			</div>
			<div className="news-div">
				{news.map((article, index) => {
					return (
						<div className="article-div" key={index}>
							<div className="article-img">
								<img src={article.img} className="article-photo" alt="article photos" />
							</div>
							<p className="article-title"> {article.title}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TechNews;
// clip-path: polygon(0% 15%, 15% 0%, 100% 0, 100% 85%, 85% 100%, 0 100%);
