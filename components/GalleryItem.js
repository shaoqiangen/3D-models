function GalleryItem({ item }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const [likesCount, setLikesCount] = React.useState(item.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className="relative rounded-lg overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-path="components/GalleryItem.js"
      data-id={`gallery-item-${item.id}`}
    >
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        data-path="components/GalleryItem.js"
        data-id={`gallery-image-${item.id}`}
      />
      
      {/* Overlay that appears on hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        data-path="components/GalleryItem.js"
        data-id={`gallery-overlay-${item.id}`}
      ></div>
      
      {/* Content that appears on hover */}
      <div 
        className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ${
          isHovered ? 'translate-y-0' : 'translate-y-10 opacity-0'
        }`}
        data-path="components/GalleryItem.js"
        data-id={`gallery-content-${item.id}`}
      >
        <h3 
          className="text-white font-bold text-lg mb-1"
          data-path="components/GalleryItem.js"
          data-id={`gallery-title-${item.id}`}
        >
          {item.title}
        </h3>
        
        <div 
          className="flex justify-between items-center"
          data-path="components/GalleryItem.js"
          data-id={`gallery-meta-${item.id}`}
        >
          <span 
            className="text-sm text-gray-300"
            data-path="components/GalleryItem.js"
            data-id={`gallery-submitter-${item.id}`}
          >
            By {item.submitter}
          </span>
          
          <div 
            className="flex items-center space-x-1"
            data-path="components/GalleryItem.js"
            data-id={`gallery-likes-container-${item.id}`}
          >
            <button 
              onClick={handleLike}
              className={`transition-colors ${isLiked ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}
              aria-label={isLiked ? 'Unlike' : 'Like'}
              data-path="components/GalleryItem.js"
              data-id={`gallery-like-button-${item.id}`}
            >
              <i className={`${isLiked ? 'fas' : 'far'} fa-heart`}></i>
            </button>
            <span 
              className="text-sm text-gray-300"
              data-path="components/GalleryItem.js"
              data-id={`gallery-likes-count-${item.id}`}
            >
              {likesCount}
            </span>
          </div>
        </div>
      </div>
      
      {/* Action buttons that appear on hover */}
      <div 
        className={`absolute top-2 right-2 flex space-x-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        data-path="components/GalleryItem.js"
        data-id={`gallery-actions-${item.id}`}
      >
        <button 
          className="w-8 h-8 rounded-full bg-gray-900/80 text-white flex items-center justify-center hover:bg-purple-600 transition-colors"
          aria-label="View full size"
          data-path="components/GalleryItem.js"
          data-id={`gallery-view-button-${item.id}`}
        >
          <i className="fas fa-expand-alt text-sm"></i>
        </button>
        
        <button 
          className="w-8 h-8 rounded-full bg-gray-900/80 text-white flex items-center justify-center hover:bg-purple-600 transition-colors"
          aria-label="Download"
          data-path="components/GalleryItem.js"
          data-id={`gallery-download-button-${item.id}`}
        >
          <i className="fas fa-download text-sm"></i>
        </button>
        
        <button 
          className="w-8 h-8 rounded-full bg-gray-900/80 text-white flex items-center justify-center hover:bg-purple-600 transition-colors"
          aria-label="Share"
          data-path="components/GalleryItem.js"
          data-id={`gallery-share-button-${item.id}`}
        >
          <i className="fas fa-share-alt text-sm"></i>
        </button>
      </div>
    </div>
  );
}