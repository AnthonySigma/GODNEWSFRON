import React from 'react';
import { Calendar, User, ExternalLink } from 'lucide-react';
import '../styles/NewsCard.css';

function NewsCard({ news }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <article className="news-card fade-in">
      <div className="news-card-content">
        <img src={news.imageUrl} alt={news.title} className="news-card-image" loading="lazy" />
        <div className="news-card-body">
          <div className="news-card-meta">
            <span className="news-card-category">{news.category}</span>
            <div className="news-card-date">
              <Calendar />
              <span>{formatDate(news.date)}</span>
            </div>
          </div>
          <h3 className="news-card-title">{news.title}</h3>
          <p className="news-card-summary">{news.summary}</p>
          <div className="news-card-footer">
            <div className="news-card-author">
              <User />
              <div>
                <p className="news-card-author-name">{news.author}</p>
                <p className="news-card-author-source">{news.source}</p>
              </div>
            </div>
            <a href={news.sourceUrl} target="_blank" rel="noopener noreferrer" className="news-card-link">
              Leer artículo completo
              <ExternalLink />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;