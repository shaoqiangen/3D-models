function Guides() {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [activeDifficulty, setActiveDifficulty] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Filter guides based on selected filters
  const filteredGuides = guidesData.filter(guide => {
    // Filter by search query
    if (searchQuery && !guide.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !guide.summary.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by difficulty
    if (activeDifficulty !== 'all' && guide.difficulty.toLowerCase() !== activeDifficulty.toLowerCase()) {
      return false;
    }
    
    // Filter by category (would need to add category to guide data)
    if (activeCategory !== 'all') {
      // This is a placeholder. In a real app, you'd have categories for each guide
      return true;
    }
    
    return true;
  });

  return (
    <div 
      className="min-h-screen bg-gray-900 py-12"
      data-path="pages/Guides.js"
      data-id="guides-container"
    >
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div 
          className="text-center mb-12"
          data-path="pages/Guides.js"
          data-id="guides-header"
        >
          <h1 
            className="text-4xl font-bold text-white mb-4"
            data-path="pages/Guides.js"
            data-id="guides-title"
          >
            FFXIV Guides
          </h1>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            data-path="pages/Guides.js"
            data-id="guides-description"
          >
            Browse our collection of player-created guides for all aspects of Final Fantasy XIV, from beginner tips to advanced raid strategies.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div 
          className="bg-gray-800 rounded-lg p-6 mb-8"
          data-path="pages/Guides.js"
          data-id="guides-filters"
        >
          <div 
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6"
            data-path="pages/Guides.js"
            data-id="guides-search-row"
          >
            {/* Search Input */}
            <div 
              className="flex-grow"
              data-path="pages/Guides.js"
              data-id="guides-search-container"
            >
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search guides..." 
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-path="pages/Guides.js"
                  data-id="guides-search-input"
                />
                <div 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  data-path="pages/Guides.js"
                  data-id="guides-search-icon"
                >
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
            
            {/* Create Guide Button */}
            <div 
              data-path="pages/Guides.js"
              data-id="guides-create-container"
            >
              <button 
                className="ff-btn px-4 py-2 rounded-md text-white font-medium w-full md:w-auto flex items-center justify-center space-x-2"
                data-path="pages/Guides.js"
                data-id="guides-create-button"
              >
                <i className="fas fa-plus-circle"></i>
                <span>Create Guide</span>
              </button>
            </div>
          </div>
          
          <div 
            className="flex flex-col md:flex-row space-y-4 md:space-y-0"
            data-path="pages/Guides.js"
            data-id="guides-filter-options"
          >
            {/* Category Filter */}
            <div 
              className="md:w-1/2 md:pr-2"
              data-path="pages/Guides.js"
              data-id="guides-category-filter"
            >
              <label 
                className="block text-sm font-medium text-gray-400 mb-2"
                data-path="pages/Guides.js"
                data-id="category-label"
              >
                Category
              </label>
              <div 
                className="flex flex-wrap gap-2"
                data-path="pages/Guides.js"
                data-id="category-options"
              >
                <button 
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1 rounded-md text-sm ${
                    activeCategory === 'all' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  data-path="pages/Guides.js"
                  data-id="category-all"
                >
                  All
                </button>
                
                {jobCategories.map(category => (
                  <button 
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 py-1 rounded-md text-sm flex items-center space-x-1 ${
                      activeCategory === category.id 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                    data-path="pages/Guides.js"
                    data-id={`category-${category.id}`}
                  >
                    <i className={`fas ${category.icon} text-xs`} style={{ color: activeCategory === category.id ? 'white' : category.color }}></i>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Difficulty Filter */}
            <div 
              className="md:w-1/2 md:pl-2"
              data-path="pages/Guides.js"
              data-id="guides-difficulty-filter"
            >
              <label 
                className="block text-sm font-medium text-gray-400 mb-2"
                data-path="pages/Guides.js"
                data-id="difficulty-label"
              >
                Difficulty
              </label>
              <div 
                className="flex flex-wrap gap-2"
                data-path="pages/Guides.js"
                data-id="difficulty-options"
              >
                <button 
                  onClick={() => setActiveDifficulty('all')}
                  className={`px-3 py-1 rounded-md text-sm ${
                    activeDifficulty === 'all' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  data-path="pages/Guides.js"
                  data-id="difficulty-all"
                >
                  All
                </button>
                
                <button 
                  onClick={() => setActiveDifficulty('beginner')}
                  className={`px-3 py-1 rounded-md text-sm ${
                    activeDifficulty === 'beginner' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-700 text-green-400 hover:bg-gray-600'
                  }`}
                  data-path="pages/Guides.js"
                  data-id="difficulty-beginner"
                >
                  Beginner
                </button>
                
                <button 
                  onClick={() => setActiveDifficulty('intermediate')}
                  className={`px-3 py-1 rounded-md text-sm ${
                    activeDifficulty === 'intermediate' 
                      ? 'bg-yellow-600 text-white' 
                      : 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                  }`}
                  data-path="pages/Guides.js"
                  data-id="difficulty-intermediate"
                >
                  Intermediate
                </button>
                
                <button 
                  onClick={() => setActiveDifficulty('advanced')}
                  className={`px-3 py-1 rounded-md text-sm ${
                    activeDifficulty === 'advanced' 
                      ? 'bg-orange-600 text-white' 
                      : 'bg-gray-700 text-orange-400 hover:bg-gray-600'
                  }`}
                  data-path="pages/Guides.js"
                  data-id="difficulty-advanced"
                >
                  Advanced
                </button>
                
                <button 
                  onClick={() => setActiveDifficulty('extreme')}
                  className={`px-3 py-1 rounded-md text-sm ${
                    activeDifficulty === 'extreme' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-700 text-red-400 hover:bg-gray-600'
                  }`}
                  data-path="pages/Guides.js"
                  data-id="difficulty-extreme"
                >
                  Extreme
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <div 
          className="mb-6 text-gray-400"
          data-path="pages/Guides.js"
          data-id="guides-results-count"
        >
          Showing {filteredGuides.length} {filteredGuides.length === 1 ? 'guide' : 'guides'}
        </div>
        
        {/* Guides Grid */}
        {filteredGuides.length > 0 ? (
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-path="pages/Guides.js"
            data-id="guides-grid"
          >
            {filteredGuides.map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        ) : (
          <div 
            className="text-center py-12"
            data-path="pages/Guides.js"
            data-id="guides-empty-state"
          >
            <div 
              className="text-gray-500 text-6xl mb-4"
              data-path="pages/Guides.js"
              data-id="guides-empty-icon"
            >
              <i className="fas fa-book-open"></i>
            </div>
            <h3 
              className="text-xl font-medium text-white mb-2"
              data-path="pages/Guides.js"
              data-id="guides-empty-title"
            >
              No guides found
            </h3>
            <p 
              className="text-gray-400"
              data-path="pages/Guides.js"
              data-id="guides-empty-message"
            >
              Try adjusting your filters or search query
            </p>
          </div>
        )}
        
        {/* Pagination */}
        <div 
          className="flex justify-center mt-12"
          data-path="pages/Guides.js"
          data-id="guides-pagination"
        >
          <nav 
            className="flex items-center space-x-2"
            data-path="pages/Guides.js"
            data-id="pagination-nav"
          >
            <button 
              className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
              data-path="pages/Guides.js"
              data-id="pagination-prev"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <button 
              className="px-3 py-1 rounded-md bg-purple-600 text-white"
              data-path="pages/Guides.js"
              data-id="pagination-1"
            >
              1
            </button>
            
            <button 
              className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700"
              data-path="pages/Guides.js"
              data-id="pagination-2"
            >
              2
            </button>
            
            <button 
              className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700"
              data-path="pages/Guides.js"
              data-id="pagination-3"
            >
              3
            </button>
            
            <span 
              className="text-gray-400"
              data-path="pages/Guides.js"
              data-id="pagination-ellipsis"
            >
              ...
            </span>
            
            <button 
              className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700"
              data-path="pages/Guides.js"
              data-id="pagination-next"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}