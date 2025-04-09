function NewsCard({ news }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div 
      className="ff-card hover-scale overflow-hidden"
      data-path="components/NewsCard.js"
      data-id={`news-card-${news.id}`}
    >
      <div 
        className="h-48 overflow-hidden relative"
        data-path="components/NewsCard.js"
        data-id={`news-image-container-${news.id}`}
      >
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover"
          data-path="components/NewsCard.js"
          data-id={`news-image-${news.id}`}
        />
        <div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-24"
          data-path="components/NewsCard.js"
          data-id={`news-image-gradient-${news.id}`}
        ></div>
      </div>
      
      <div 
        className="p-5"
        data-path="components/NewsCard.js"
        data-id={`news-content-${news.id}`}
      >
        <div 
          className="flex justify-between items-center mb-2"
          data-path="components/NewsCard.js"
          data-id={`news-meta-${news.id}`}
        >
          <span 
            className="text-xs text-purple-400 font-medium"
            data-path="components/NewsCard.js"
            data-id={`news-author-${news.id}`}
          >
            {news.author}
          </span>
          <span 
            className="text-xs text-gray-400"
            data-path="components/NewsCard.js"
            data-id={`news-date-${news.id}`}
          >
            {formatDate(news.date)}
          </span>
        </div>
        
        <h3 
          className="text-xl font-bold text-white mb-2 line-clamp-2"
          data-path="components/NewsCard.js"
          data-id={`news-title-${news.id}`}
        >
          {news.title}
        </h3>
        
        <p 
          className="text-gray-300 mb-4 line-clamp-3"
          data-path="components/NewsCard.js"
          data-id={`news-summary-${news.id}`}
        >
          {news.summary}
        </p>
        
        <div 
          className="flex justify-between items-center"
          data-path="components/NewsCard.js"
          data-id={`news-actions-${news.id}`}
        >
          <button 
            className="ff-btn px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-1"
            data-path="components/NewsCard.js"
            data-id={`news-read-more-${news.id}`}
          >
            <span>Read More</span>
            <i className="fas fa-arrow-right text-xs"></i>
          </button>
          
          <div 
            className="flex space-x-3"
            data-path="components/NewsCard.js"
            data-id={`news-social-${news.id}`}
          >
            <button 
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Share"
              data-path="components/NewsCard.js"
              data-id={`news-share-${news.id}`}
            >
              <i className="fas fa-share-alt"></i>
            </button>
            <button 
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="Like"
              data-path="components/NewsCard.js"
              data-id={`news-like-${news.id}`}
            >
              <i className="fas fa-heart"></i>
            </button>
            <button 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Comment"
              data-path="components/NewsCard.js"
              data-id={`news-comment-${news.id}`}
            >
              <i className="fas fa-comment"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}