function Characters() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [serverFilter, setServerFilter] = React.useState('all');
  const [jobFilter, setJobFilter] = React.useState('all');
  
  // Filter characters based on selected filters
  const filteredCharacters = charactersData.filter(character => {
    // Filter by search query
    if (searchQuery && !character.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by server
    if (serverFilter !== 'all' && character.server !== serverFilter) {
      return false;
    }
    
    // Filter by job
    if (jobFilter !== 'all' && character.mainJob !== jobFilter) {
      return false;
    }
    
    return true;
  });

  // List of servers for filter
  const servers = [...new Set(charactersData.map(char => char.server))];
  
  // List of jobs for filter
  const jobs = [...new Set(charactersData.map(char => char.mainJob))];

  return (
    <div 
      className="min-h-screen bg-gray-900 py-12"
      data-path="pages/Characters.js"
      data-id="characters-container"
    >
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div 
          className="text-center mb-12"
          data-path="pages/Characters.js"
          data-id="characters-header"
        >
          <h1 
            className="text-4xl font-bold text-white mb-4"
            data-path="pages/Characters.js"
            data-id="characters-title"
          >
            Community Characters
          </h1>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            data-path="pages/Characters.js"
            data-id="characters-description"
          >
            Browse characters from our community members, connect with fellow Warriors of Light, and find new friends to adventure with.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div 
          className="bg-gray-800 rounded-lg p-6 mb-8"
          data-path="pages/Characters.js"
          data-id="characters-filters"
        >
          <div 
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6"
            data-path="pages/Characters.js"
            data-id="characters-search-row"
          >
            {/* Search Input */}
            <div 
              className="flex-grow"
              data-path="pages/Characters.js"
              data-id="characters-search-container"
            >
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search characters by name..." 
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-path="pages/Characters.js"
                  data-id="characters-search-input"
                />
                <div 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  data-path="pages/Characters.js"
                  data-id="characters-search-icon"
                >
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
            
            {/* Add Character Button */}
            <div 
              data-path="pages/Characters.js"
              data-id="characters-add-container"
            >
              <button 
                className="ff-btn px-4 py-2 rounded-md text-white font-medium w-full md:w-auto flex items-center justify-center space-x-2"
                data-path="pages/Characters.js"
                data-id="characters-add-button"
              >
                <i className="fas fa-user-plus"></i>
                <span>Add Your Character</span>
              </button>
            </div>
          </div>
          
          <div 
            className="flex flex-col md:flex-row space-y-4 md:space-y-0"
            data-path="pages/Characters.js"
            data-id="characters-filter-options"
          >
            {/* Server Filter */}
            <div 
              className="md:w-1/2 md:pr-2"
              data-path="pages/Characters.js"
              data-id="characters-server-filter"
            >
              <label 
                className="block text-sm font-medium text-gray-400 mb-2"
                data-path="pages/Characters.js"
                data-id="server-label"
              >
                Server
              </label>
              <select 
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={serverFilter}
                onChange={(e) => setServerFilter(e.target.value)}
                data-path="pages/Characters.js"
                data-id="server-select"
              >
                <option value="all">All Servers</option>
                {servers.map(server => (
                  <option key={server} value={server}>{server}</option>
                ))}
              </select>
            </div>
            
            {/* Job Filter */}
            <div 
              className="md:w-1/2 md:pl-2"
              data-path="pages/Characters.js"
              data-id="characters-job-filter"
            >
              <label 
                className="block text-sm font-medium text-gray-400 mb-2"
                data-path="pages/Characters.js"
                data-id="job-label"
              >
                Main Job
              </label>
              <select 
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={jobFilter}
                onChange={(e) => setJobFilter(e.target.value)}
                data-path="pages/Characters.js"
                data-id="job-select"
              >
                <option value="all">All Jobs</option>
                {jobs.map(job => (
                  <option key={job} value={job}>{job}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <div 
          className="mb-6 text-gray-400"
          data-path="pages/Characters.js"
          data-id="characters-results-count"
        >
          Showing {filteredCharacters.length} {filteredCharacters.length === 1 ? 'character' : 'characters'}
        </div>
        
        {/* Characters Grid */}
        {filteredCharacters.length > 0 ? (
          <div 
            className="grid grid-cols-1 gap-6"
            data-path="pages/Characters.js"
            data-id="characters-grid"
          >
            {filteredCharacters.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <div 
            className="text-center py-12"
            data-path="pages/Characters.js"
            data-id="characters-empty-state"
          >
            <div 
              className="text-gray-500 text-6xl mb-4"
              data-path="pages/Characters.js"
              data-id="characters-empty-icon"
            >
              <i className="fas fa-user-slash"></i>
            </div>
            <h3 
              className="text-xl font-medium text-white mb-2"
              data-path="pages/Characters.js"
              data-id="characters-empty-title"
            >
              No characters found
            </h3>
            <p 
              className="text-gray-400"
              data-path="pages/Characters.js"
              data-id="characters-empty-message"
            >
              Try adjusting your filters or search query
            </p>
          </div>
        )}
        
        {/* Pagination */}
        <div 
          className="flex justify-center mt-12"
          data-path="pages/Characters.js"
          data-id="characters-pagination"
        >
          <nav 
            className="flex items-center space-x-2"
            data-path="pages/Characters.js"
            data-id="pagination-nav"
          >
            <button 
              className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
              data-path="pages/Characters.js"
              data-id="pagination-prev"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <button 
              className="px-3 py-1 rounded-md bg-purple-600 text-white"
              data-path="pages/Characters.js"
              data-id="pagination-1"
            >
              1
            </button>
            
            <button 
              className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700"
              data-path="pages/Characters.js"
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