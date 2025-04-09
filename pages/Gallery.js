function Gallery() {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('newest');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState(null);
  
  // Additional mock gallery data
  const allGalleryItems = [
    ...galleryData,
    {
      id: "gallery7",
      title: "Savage Raid Victory",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      submitter: "RaidLeader",
      likes: 156,
      category: "raids"
    },
    {
      id: "gallery8",
      title: "Glamour Showcase",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      submitter: "FashionDesigner",
      likes: 203,
      category: "glamour"
    },
    {
      id: "gallery9",
      title: "Housing Interior",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      submitter: "InteriorDesigner",
      likes: 178,
      category: "housing"
    },
    {
      id: "gallery10",
      title: "Character Portrait",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      submitter: "PortraitArtist",
      likes: 221,
      category: "character"
    },
    {
      id: "gallery11",
      title: "Gold Saucer Fun",
      image: "https://images.unsplash.com/photo-1563941402257-87c15c8a4349?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      submitter: "GoldSaucerFan",
      likes: 89,
      category: "events"
    },
    {
      id: "gallery12",
      title: "Dungeon Run",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      submitter: "DungeonCrawler",
      likes: 112,
      category: "dungeons"
    }
  ];
  
  // Filter gallery items based on selected filters
  const filteredGalleryItems = allGalleryItems.filter(item => {
    // Filter by search query
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !item.submitter.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by category
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    
    return true;
  });
  
  // Sort gallery items
  const sortedGalleryItems = [...filteredGalleryItems].sort((a, b) => {
    if (sortBy === 'newest') {
      // In a real app, you'd sort by date
      return b.id.localeCompare(a.id);
    } else if (sortBy === 'popular') {
      return b.likes - a.likes;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  
  // Handle image click to open modal
  const openImageModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };
  
  // Handle closing the modal
  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Images', icon: 'fa-images' },
    { id: 'character', name: 'Characters', icon: 'fa-user' },
    { id: 'glamour', name: 'Glamours', icon: 'fa-tshirt' },
    { id: 'housing', name: 'Housing', icon: 'fa-home' },
    { id: 'raids', name: 'Raids', icon: 'fa-dragon' },
    { id: 'dungeons', name: 'Dungeons', icon: 'fa-dungeon' },
    { id: 'events', name: 'Events', icon: 'fa-calendar-day' }
  ];

  return (
    <div 
      className="min-h-screen bg-gray-900 py-12"
      data-path="pages/Gallery.js"
      data-id="gallery-container"
    >
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div 
          className="text-center mb-12"
          data-path="pages/Gallery.js"
          data-id="gallery-header"
        >
          <h1 
            className="text-4xl font-bold text-white mb-4"
            data-path="pages/Gallery.js"
            data-id="gallery-title"
          >
            Screenshot Gallery
          </h1>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            data-path="pages/Gallery.js"
            data-id="gallery-description"
          >
            Browse beautiful screenshots shared by our community members, from epic raid moments to stunning landscapes and creative glamours.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div 
          className="bg-gray-800 rounded-lg p-6 mb-8"
          data-path="pages/Gallery.js"
          data-id="gallery-filters"
        >
          <div 
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6"
            data-path="pages/Gallery.js"
            data-id="gallery-search-row"
          >
            {/* Search Input */}
            <div 
              className="flex-grow"
              data-path="pages/Gallery.js"
              data-id="gallery-search-container"
            >
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search gallery..." 
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-path="pages/Gallery.js"
                  data-id="gallery-search-input"
                />
                <div 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  data-path="pages/Gallery.js"
                  data-id="gallery-search-icon"
                >
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
            
            {/* Upload Button */}
            <div 
              data-path="pages/Gallery.js"
              data-id="gallery-upload-container"
            >
              <button 
                className="ff-btn px-4 py-2 rounded-md text-white font-medium w-full md:w-auto flex items-center justify-center space-x-2"
                data-path="pages/Gallery.js"
                data-id="gallery-upload-button"
              >
                <i className="fas fa-cloud-upload-alt"></i>
                <span>Upload Screenshot</span>
              </button>
            </div>
          </div>
          
          <div 
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between"
            data-path="pages/Gallery.js"
            data-id="gallery-filter-options"
          >
            {/* Categories */}
            <div 
              className="flex flex-wrap gap-2"
              data-path="pages/Gallery.js"
              data-id="gallery-categories"
            >
              {categories.map(category => (
                <button 
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1 rounded-md text-sm flex items-center space-x-1 ${
                    activeCategory === category.id 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  data-path="pages/Gallery.js"
                  data-id={`category-${category.id}`}
                >
                  <i className={`fas ${category.icon} text-xs mr-1`}></i>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
            
            {/* Sort Options */}
            <div 
              className="flex items-center space-x-2"
              data-path="pages/Gallery.js"
              data-id="gallery-sort"
            >
              <span 
                className="text-sm text-gray-400"
                data-path="pages/Gallery.js"
                data-id="sort-label"
              >
                Sort by:
              </span>
              <select 
                className="bg-gray-700 text-white border border-gray-600 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                data-path="pages/Gallery.js"
                data-id="sort-select"
              >
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <div 
          className="mb-6 text-gray-400"
          data-path="pages/Gallery.js"
          data-id="gallery-results-count"
        >
          Showing {sortedGalleryItems.length} {sortedGalleryItems.length === 1 ? 'image' : 'images'}
        </div>
        
        {/* Gallery Grid */}
        {sortedGalleryItems.length > 0 ? (
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            data-path="pages/Gallery.js"
            data-id="gallery-grid"
          >
            {sortedGalleryItems.map(item => (
              <div 
                key={item.id}
                onClick={() => openImageModal(item)}
                className="cursor-pointer"
                data-path="pages/Gallery.js"
                data-id={`gallery-item-wrapper-${item.id}`}
              >
                <GalleryItem item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div 
            className="text-center py-12"
            data-path="pages/Gallery.js"
            data-id="gallery-empty-state"
          >
            <div 
              className="text-gray-500 text-6xl mb-4"
              data-path="pages/Gallery.js"
              data-id="gallery-empty-icon"
            >
              <i className="fas fa-images"></i>
            </div>
            <h3 
              className="text-xl font-medium text-white mb-2"
              data-path="pages/Gallery.js"
              data-id="gallery-empty-title"
            >
              No images found
            </h3>
            <p 
              className="text-gray-400"
              data-path="pages/Gallery.js"
              data-id="gallery-empty-message"
            >
              Try adjusting your filters or search query
            </p>
          </div>
        )}
        
        {/* Load More Button */}
        {sortedGalleryItems.length > 0 && (
          <div 
            className="mt-10 text-center"
            data-path="pages/Gallery.js"
            data-id="gallery-load-more"
          >
            <button 
              className="ff-btn px-6 py-2 rounded-md text-white font-medium"
              data-path="pages/Gallery.js"
              data-id="load-more-button"
            >
              Load More
            </button>
          </div>
        )}
        
        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
            data-path="pages/Gallery.js"
            data-id="image-modal-overlay"
          >
            <div 
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
              data-path="pages/Gallery.js"
              data-id="image-modal-container"
            >
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 text-white bg-gray-900 bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center z-10"
                onClick={closeImageModal}
                data-path="pages/Gallery.js"
                data-id="image-modal-close"
              >
                <i className="fas fa-times"></i>
              </button>
              
              {/* Navigation Buttons */}
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center z-10"
                data-path="pages/Gallery.js"
                data-id="image-modal-prev"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center z-10"
                data-path="pages/Gallery.js"
                data-id="image-modal-next"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
              
              {/* Image */}
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                data-path="pages/Gallery.js"
                data-id="image-modal-img"
              />
              
              {/* Image Info */}
              <div 
                className="bg-gray-900 rounded-b-lg p-4"
                data-path="pages/Gallery.js"
                data-id="image-modal-info"
              >
                <h3 
                  className="text-xl font-bold text-white mb-2"
                  data-path="pages/Gallery.js"
                  data-id="image-modal-title"
                >
                  {selectedImage.title}
                </h3>
                
                <div 
                  className="flex justify-between items-center"
                  data-path="pages/Gallery.js"
                  data-id="image-modal-meta"
                >
                  <span 
                    className="text-gray-400"
                    data-path="pages/Gallery.js"
                    data-id="image-modal-submitter"
                  >
                    Submitted by {selectedImage.submitter}
                  </span>
                  
                  <div 
                    className="flex items-center space-x-4"
                    data-path="pages/Gallery.js"
                    data-id="image-modal-actions"
                  >
                    <button 
                      className="text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-1"
                      data-path="pages/Gallery.js"
                      data-id="image-modal-like"
                    >
                      <i className="far fa-heart"></i>
                      <span>{selectedImage.likes}</span>
                    </button>
                    
                    <button 
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      data-path="pages/Gallery.js"
                      data-id="image-modal-share"
                    >
                      <i className="fas fa-share-alt"></i>
                    </button>
                    
                    <button 
                      className="text-gray-400 hover:text-green-500 transition-colors"
                      data-path="pages/Gallery.js"
                      data-id="image-modal-download"
                    >
                      <i className="fas fa-download"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Upload CTA */}
        <div 
          className="mt-12 bg-gray-800 rounded-lg p-8 text-center"
          data-path="pages/Gallery.js"
          data-id="upload-cta"
        >
          <h3 
            className="text-2xl font-bold text-white mb-4"
            data-path="pages/Gallery.js"
            data-id="cta-title"
          >
            Share Your FFXIV Moments
          </h3>
          <p 
            className="text-gray-300 mb-6 max-w-2xl mx-auto"
            data-path="pages/Gallery.js"
            data-id="cta-description"
          >
            Got an amazing screenshot you want to share with the community? Upload it now and let others see your adventures in Eorzea.
          </p>
          <button 
            className="ff-btn px-6 py-3 rounded-md text-white font-medium"
            data-path="pages/Gallery.js"
            data-id="cta-button"
          >
            <i className="fas fa-cloud-upload-alt mr-2"></i>
            Upload Your Screenshot
          </button>
        </div>
      </div>
    </div>
  );
}