function GuideCard({ guide }) {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'text-green-400';
      case 'intermediate':
        return 'text-yellow-400';
      case 'advanced':
        return 'text-orange-400';
      case 'extreme':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div 
      className="ff-card hover-scale overflow-hidden"
      data-path="components/GuideCard.js"
      data-id={`guide-card-${guide.id}`}
    >
      <div 
        className="h-48 overflow-hidden relative"
        data-path="components/GuideCard.js"
        data-id={`guide-image-container-${guide.id}`}
      >
        <img 
          src={guide.image} 
          alt={guide.title} 
          className="w-full h-full object-cover"
          data-path="components/GuideCard.js"
          data-id={`guide-image-${guide.id}`}
        />
        <div 
          className="absolute top-0 left-0 right-0 p-3 flex justify-between items-center"
          data-path="components/GuideCard.js"
          data-id={`guide-badges-${guide.id}`}
        >
          <div 
            className="job-icon" 
            style={{ backgroundColor: guide.jobColor }}
            data-path="components/GuideCard.js"
            data-id={`guide-job-icon-${guide.id}`}
          >
            <i className={`fas ${guide.jobIcon} text-white`}></i>
          </div>
          
          <span 
            className={`px-2 py-1 rounded-md text-xs font-medium bg-gray-900 bg-opacity-75 ${getDifficultyColor(guide.difficulty)}`}
            data-path="components/GuideCard.js"
            data-id={`guide-difficulty-${guide.id}`}
          >
            {guide.difficulty}
          </span>
        </div>
        <div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-24"
          data-path="components/GuideCard.js"
          data-id={`guide-image-gradient-${guide.id}`}
        ></div>
      </div>
      
      <div 
        className="p-5"
        data-path="components/GuideCard.js"
        data-id={`guide-content-${guide.id}`}
      >
        <h3 
          className="text-xl font-bold text-white mb-2 line-clamp-2"
          data-path="components/GuideCard.js"
          data-id={`guide-title-${guide.id}`}
        >
          {guide.title}
        </h3>
        
        <p 
          className="text-gray-300 mb-4 line-clamp-3"
          data-path="components/GuideCard.js"
          data-id={`guide-summary-${guide.id}`}
        >
          {guide.summary}
        </p>
        
        <div 
          className="flex justify-between items-center"
          data-path="components/GuideCard.js"
          data-id={`guide-footer-${guide.id}`}
        >
          <div 
            className="flex items-center space-x-2"
            data-path="components/GuideCard.js"
            data-id={`guide-author-container-${guide.id}`}
          >
            <div 
              className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center"
              data-path="components/GuideCard.js"
              data-id={`guide-author-avatar-${guide.id}`}
            >
              <i className="fas fa-user text-gray-400 text-xs"></i>
            </div>
            <span 
              className="text-sm text-gray-400"
              data-path="components/GuideCard.js"
              data-id={`guide-author-name-${guide.id}`}
            >
              {guide.author}
            </span>
          </div>
          
          <button 
            className="ff-btn px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-1"
            data-path="components/GuideCard.js"
            data-id={`guide-read-button-${guide.id}`}
          >
            <span>Read Guide</span>
            <i className="fas fa-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
}