function Home() {
  return (
    <div 
      className="min-h-screen"
      data-path="pages/Home.js"
      data-id="home-container"
    >
      {/* Hero Section */}
      <section 
        className="hero-bg relative py-20"
        data-path="pages/Home.js"
        data-id="hero-section"
      >
        <div 
          className="container mx-auto px-4 relative z-10"
          data-path="pages/Home.js"
          data-id="hero-content"
        >
          <div className="max-w-3xl">
            <h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-path="pages/Home.js"
              data-id="hero-title"
            >
              Welcome to the <span className="text-purple-400">FFXIV</span> Community Hub
            </h1>
            <p 
              className="text-xl text-gray-300 mb-8"
              data-path="pages/Home.js"
              data-id="hero-subtitle"
            >
              Connect with fellow Warriors of Light, share guides, join events, and stay updated on the latest from Eorzea.
            </p>
            <div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              data-path="pages/Home.js"
              data-id="hero-buttons"
            >
              <button 
                className="ff-btn px-6 py-3 rounded-md text-white font-medium text-lg"
                data-path="pages/Home.js"
                data-id="hero-join-button"
              >
                Join Our Community
              </button>
              <button 
                className="px-6 py-3 rounded-md text-white font-medium text-lg border border-purple-500 hover:bg-purple-500 hover:bg-opacity-20 transition-colors"
                data-path="pages/Home.js"
                data-id="hero-learn-button"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section 
        className="py-16 bg-gray-900"
        data-path="pages/Home.js"
        data-id="news-section"
      >
        <div 
          className="container mx-auto px-4"
          data-path="pages/Home.js"
          data-id="news-container"
        >
          <div 
            className="flex justify-between items-center mb-8"
            data-path="pages/Home.js"
            data-id="news-header"
          >
            <h2 
              className="text-3xl font-bold text-white"
              data-path="pages/Home.js"
              data-id="news-title"
            >
              Latest News
            </h2>
            <a 
              href="#" 
              className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-1"
              data-path="pages/Home.js"
              data-id="news-view-all"
            >
              <span>View All</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </a>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-path="pages/Home.js"
            data-id="news-grid"
          >
            {newsData.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section 
        className="py-16 bg-gray-800"
        data-path="pages/Home.js"
        data-id="guides-section"
      >
        <div 
          className="container mx-auto px-4"
          data-path="pages/Home.js"
          data-id="guides-container"
        >
          <div 
            className="flex justify-between items-center mb-8"
            data-path="pages/Home.js"
            data-id="guides-header"
          >
            <h2 
              className="text-3xl font-bold text-white"
              data-path="pages/Home.js"
              data-id="guides-title"
            >
              Featured Guides
            </h2>
            <a 
              href="#" 
              className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-1"
              data-path="pages/Home.js"
              data-id="guides-view-all"
            >
              <span>View All</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </a>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-path="pages/Home.js"
            data-id="guides-grid"
          >
            {guidesData.map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section 
        className="py-16 bg-gray-900"
        data-path="pages/Home.js"
        data-id="events-section"
      >
        <div 
          className="container mx-auto px-4"
          data-path="pages/Home.js"
          data-id="events-container"
        >
          <div 
            className="flex justify-between items-center mb-8"
            data-path="pages/Home.js"
            data-id="events-header"
          >
            <h2 
              className="text-3xl font-bold text-white"
              data-path="pages/Home.js"
              data-id="events-title"
            >
              Upcoming Events
            </h2>
            <a 
              href="#" 
              className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-1"
              data-path="pages/Home.js"
              data-id="events-view-all"
            >
              <span>View All</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </a>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-path="pages/Home.js"
            data-id="events-grid"
          >
            {eventsData.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Spotlight Section */}
      <section 
        className="py-16 bg-gray-800"
        data-path="pages/Home.js"
        data-id="spotlight-section"
      >
        <div 
          className="container mx-auto px-4"
          data-path="pages/Home.js"
          data-id="spotlight-container"
        >
          <div 
            className="text-center mb-12"
            data-path="pages/Home.js"
            data-id="spotlight-header"
          >
            <h2 
              className="text-3xl font-bold text-white mb-4"
              data-path="pages/Home.js"
              data-id="spotlight-title"
            >
              Community Spotlight
            </h2>
            <p 
              className="text-gray-400 max-w-2xl mx-auto"
              data-path="pages/Home.js"
              data-id="spotlight-description"
            >
              Meet some of our active community members and their characters from across Eorzea.
            </p>
          </div>
          
          <div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            data-path="pages/Home.js"
            data-id="spotlight-grid"
          >
            {charactersData.slice(0, 2).map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          
          <div 
            className="text-center mt-10"
            data-path="pages/Home.js"
            data-id="spotlight-action"
          >
            <button 
              className="ff-btn px-6 py-3 rounded-md text-white font-medium"
              data-path="pages/Home.js"
              data-id="spotlight-button"
            >
              View More Characters
            </button>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery Preview */}
      <section 
        className="py-16 bg-gray-900"
        data-path="pages/Home.js"
        data-id="gallery-section"
      >
        <div 
          className="container mx-auto px-4"
          data-path="pages/Home.js"
          data-id="gallery-container"
        >
          <div 
            className="flex justify-between items-center mb-8"
            data-path="pages/Home.js"
            data-id="gallery-header"
          >
            <h2 
              className="text-3xl font-bold text-white"
              data-path="pages/Home.js"
              data-id="gallery-title"
            >
              Screenshot Gallery
            </h2>
            <a 
              href="#" 
              className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-1"
              data-path="pages/Home.js"
              data-id="gallery-view-all"
            >
              <span>View Full Gallery</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </a>
          </div>
          
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            data-path="pages/Home.js"
            data-id="gallery-grid"
          >
            {galleryData.slice(0, 6).map(item => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900"
        data-path="pages/Home.js"
        data-id="cta-section"
      >
        <div 
          className="container mx-auto px-4 text-center"
          data-path="pages/Home.js"
          data-id="cta-container"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            data-path="pages/Home.js"
            data-id="cta-title"
          >
            Join Our FFXIV Community Today
          </h2>
          <p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            data-path="pages/Home.js"
            data-id="cta-description"
          >
            Connect with thousands of players, share your experiences, find groups for raids, and become part of our growing community.
          </p>
          <div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            data-path="pages/Home.js"
            data-id="cta-buttons"
          >
            <button 
              className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-3 rounded-md font-bold text-lg transition-colors"
              data-path="pages/Home.js"
              data-id="cta-register-button"
            >
              Register Now
            </button>
            <button 
              className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-md font-bold text-lg transition-colors"
              data-path="pages/Home.js"
              data-id="cta-discord-button"
            >
              <i className="fab fa-discord mr-2"></i> Join Discord
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}