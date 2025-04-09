function Header({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => document.getElementById('search-input').focus(), 100);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log(`Searching for: ${searchQuery}`);
    setSearchOpen(false);
    setSearchQuery('');
  };

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50" 
      data-path="components/Header.js" 
      data-id="header-container"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => handleNavClick('home')}
            data-path="components/Header.js" 
            data-id="logo-container"
          >
            <div 
              className="w-10 h-10 rounded-full ff-gradient flex items-center justify-center"
              data-path="components/Header.js" 
              data-id="logo-icon"
            >
              <i className="fas fa-meteor text-white text-xl"></i>
            </div>
            <div 
              className="text-xl font-bold text-white"
              data-path="components/Header.js" 
              data-id="logo-text"
            >
              FFXIV <span className="text-purple-400">Hub</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex space-x-6"
            data-path="components/Header.js" 
            data-id="desktop-nav"
          >
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${
                  activePage === item.id 
                    ? 'text-purple-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                data-path="components/Header.js" 
                data-id={`nav-item-${item.id}`}
              >
                <i className={`fas ${item.icon} text-sm`}></i>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Right side actions */}
          <div 
            className="flex items-center space-x-4"
            data-path="components/Header.js" 
            data-id="header-actions"
          >
            {/* Search button */}
            <button 
              onClick={toggleSearch}
              className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-800"
              aria-label="Search"
              data-path="components/Header.js" 
              data-id="search-button"
            >
              <i className="fas fa-search"></i>
            </button>

            {/* Login button */}
            <button 
              className="hidden md:flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
              data-path="components/Header.js" 
              data-id="login-button"
            >
              <i className="fas fa-sign-in-alt"></i>
              <span>Login</span>
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white p-2"
              onClick={toggleMobileMenu}
              aria-label="Menu"
              data-path="components/Header.js" 
              data-id="mobile-menu-button"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden py-4 border-t border-gray-800"
            data-path="components/Header.js" 
            data-id="mobile-nav"
          >
            <nav className="flex flex-col space-y-3">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-md ${
                    activePage === item.id 
                      ? 'text-purple-400 bg-gray-800' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                  data-path="components/Header.js" 
                  data-id={`mobile-nav-item-${item.id}`}
                >
                  <i className={`fas ${item.icon} w-5 text-center`}></i>
                  <span>{item.label}</span>
                </button>
              ))}
              <button 
                className="flex items-center space-x-3 px-4 py-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
                data-path="components/Header.js" 
                data-id="mobile-login-button"
              >
                <i className="fas fa-sign-in-alt w-5 text-center"></i>
                <span>Login</span>
              </button>
            </nav>
          </div>
        )}

        {/* Search overlay */}
        {searchOpen && (
          <div 
            className="absolute top-0 left-0 w-full bg-gray-900 p-4 border-b border-gray-800 shadow-lg"
            data-path="components/Header.js" 
            data-id="search-overlay"
          >
            <form 
              onSubmit={handleSearch}
              className="flex items-center"
              data-path="components/Header.js" 
              data-id="search-form"
            >
              <input
                id="search-input"
                type="text"
                placeholder="Search guides, events, characters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow bg-gray-800 text-white border border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                data-path="components/Header.js" 
                data-id="search-input"
              />
              <button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md transition-colors"
                data-path="components/Header.js" 
                data-id="search-submit"
              >
                <i className="fas fa-search"></i>
              </button>
              <button 
                type="button"
                onClick={toggleSearch}
                className="ml-2 text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-800"
                aria-label="Close search"
                data-path="components/Header.js" 
                data-id="search-close"
              >
                <i className="fas fa-times"></i>
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}