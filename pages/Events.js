function Events() {
  const [viewMode, setViewMode] = React.useState('grid');
  const [filterType, setFilterType] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Additional mock events data
  const allEvents = [
    ...eventsData,
    {
      id: "event4",
      title: "Glamour Contest",
      description: "Show off your best glamours in our monthly contest with prizes for the most creative outfits.",
      date: "2023-11-25",
      time: "7:30 PM EST",
      location: "Crystal - Balmung",
      organizer: "Fashion Network",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: "social"
    },
    {
      id: "event5",
      title: "Savage Progression",
      description: "Join our weekly savage raid progression. Currently working on P8S. Voice chat required.",
      date: "2023-11-08",
      time: "9:00 PM GMT",
      location: "Chaos - Ragnarok",
      organizer: "Raid Legends",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: "raid"
    },
    {
      id: "event6",
      title: "Housing Design Workshop",
      description: "Learn advanced housing decoration techniques and glitches from expert decorators.",
      date: "2023-11-30",
      time: "6:00 PM PST",
      location: "Primal - Famfrit",
      organizer: "Interior Designers Guild",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: "workshop"
    },
    {
      id: "event7",
      title: "Triple Triad Tournament",
      description: "Compete in our monthly Triple Triad tournament with special rules and card prizes.",
      date: "2023-12-05",
      time: "8:00 PM EST",
      location: "Aether - Faerie",
      organizer: "Gold Saucer Enthusiasts",
      image: "https://images.unsplash.com/photo-1563941402257-87c15c8a4349?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      type: "social"
    }
  ];
  
  // Filter events based on selected filters
  const filteredEvents = allEvents.filter(event => {
    // Filter by search query
    if (searchQuery && !event.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !event.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by type
    if (filterType !== 'all' && event.type !== filterType) {
      return false;
    }
    
    return true;
  });
  
  // Sort events by date (closest first)
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  
  // Format date for calendar view
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }),
      year: date.getFullYear(),
      weekday: date.toLocaleString('default', { weekday: 'short' })
    };
  };

  return (
    <div 
      className="min-h-screen bg-gray-900 py-12"
      data-path="pages/Events.js"
      data-id="events-container"
    >
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div 
          className="text-center mb-12"
          data-path="pages/Events.js"
          data-id="events-header"
        >
          <h1 
            className="text-4xl font-bold text-white mb-4"
            data-path="pages/Events.js"
            data-id="events-title"
          >
            Community Events
          </h1>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            data-path="pages/Events.js"
            data-id="events-description"
          >
            Discover and join events organized by our community members, from raid nights to social gatherings and everything in between.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div 
          className="bg-gray-800 rounded-lg p-6 mb-8"
          data-path="pages/Events.js"
          data-id="events-filters"
        >
          <div 
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6"
            data-path="pages/Events.js"
            data-id="events-search-row"
          >
            {/* Search Input */}
            <div 
              className="flex-grow"
              data-path="pages/Events.js"
              data-id="events-search-container"
            >
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search events..." 
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-path="pages/Events.js"
                  data-id="events-search-input"
                />
                <div 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  data-path="pages/Events.js"
                  data-id="events-search-icon"
                >
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
            
            {/* Create Event Button */}
            <div 
              data-path="pages/Events.js"
              data-id="events-create-container"
            >
              <button 
                className="ff-btn px-4 py-2 rounded-md text-white font-medium w-full md:w-auto flex items-center justify-center space-x-2"
                data-path="pages/Events.js"
                data-id="events-create-button"
              >
                <i className="fas fa-plus-circle"></i>
                <span>Create Event</span>
              </button>
            </div>
          </div>
          
          <div 
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between"
            data-path="pages/Events.js"
            data-id="events-filter-options"
          >
            {/* Event Type Filter */}
            <div 
              className="flex flex-wrap gap-2"
              data-path="pages/Events.js"
              data-id="event-type-filter"
            >
              <button 
                onClick={() => setFilterType('all')}
                className={`px-3 py-1 rounded-md text-sm ${
                  filterType === 'all' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                data-path="pages/Events.js"
                data-id="filter-all"
              >
                All Events
              </button>
              
              <button 
                onClick={() => setFilterType('raid')}
                className={`px-3 py-1 rounded-md text-sm flex items-center space-x-1 ${
                  filterType === 'raid' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                data-path="pages/Events.js"
                data-id="filter-raid"
              >
                <i className="fas fa-sword text-xs mr-1"></i>
                <span>Raids</span>
              </button>
              
              <button 
                onClick={() => setFilterType('social')}
                className={`px-3 py-1 rounded-md text-sm flex items-center space-x-1 ${
                  filterType === 'social' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                data-path="pages/Events.js"
                data-id="filter-social"
              >
                <i className="fas fa-users text-xs mr-1"></i>
                <span>Social</span>
              </button>
              
              <button 
                onClick={() => setFilterType('workshop')}
                className={`px-3 py-1 rounded-md text-sm flex items-center space-x-1 ${
                  filterType === 'workshop' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                data-path="pages/Events.js"
                data-id="filter-workshop"
              >
                <i className="fas fa-chalkboard-teacher text-xs mr-1"></i>
                <span>Workshops</span>
              </button>
            </div>
            
            {/* View Mode Toggle */}
            <div 
              className="flex space-x-2"
              data-path="pages/Events.js"
              data-id="view-mode-toggle"
            >
              <button 
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded-md text-sm flex items-center ${
                  viewMode === 'grid' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                data-path="pages/Events.js"
                data-id="view-grid"
              >
                <i className="fas fa-th-large mr-1"></i>
                <span>Grid</span>
              </button>
              
              <button 
                onClick={() => setViewMode('calendar')}
                className={`px-3 py-1 rounded-md text-sm flex items-center ${
                  viewMode === 'calendar' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                data-path="pages/Events.js"
                data-id="view-calendar"
              >
                <i className="fas fa-calendar-alt mr-1"></i>
                <span>Calendar</span>
              </button>
              
              <button 
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded-md text-sm flex items-center ${
                  viewMode === 'list' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                data-path="pages/Events.js"
                data-id="view-list"
              >
                <i className="fas fa-list mr-1"></i>
                <span>List</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <div 
          className="mb-6 text-gray-400"
          data-path="pages/Events.js"
          data-id="events-results-count"
        >
          Showing {sortedEvents.length} {sortedEvents.length === 1 ? 'event' : 'events'}
        </div>
        
        {/* Events Display */}
        {sortedEvents.length > 0 ? (
          <div 
            data-path="pages/Events.js"
            data-id="events-display"
          >
            {/* Grid View */}
            {viewMode === 'grid' && (
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                data-path="pages/Events.js"
                data-id="events-grid"
              >
                {sortedEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
            
            {/* Calendar View */}
            {viewMode === 'calendar' && (
              <div 
                className="bg-gray-800 rounded-lg overflow-hidden"
                data-path="pages/Events.js"
                data-id="events-calendar"
              >
                {/* Calendar Header */}
                <div 
                  className="bg-gray-700 p-4 flex justify-between items-center"
                  data-path="pages/Events.js"
                  data-id="calendar-header"
                >
                  <button 
                    className="text-gray-300 hover:text-white"
                    data-path="pages/Events.js"
                    data-id="calendar-prev"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  
                  <h3 
                    className="text-xl font-bold text-white"
                    data-path="pages/Events.js"
                    data-id="calendar-month"
                  >
                    November 2023
                  </h3>
                  
                  <button 
                    className="text-gray-300 hover:text-white"
                    data-path="pages/Events.js"
                    data-id="calendar-next"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
                
                {/* Calendar Events */}
                <div 
                  className="p-4 space-y-4"
                  data-path="pages/Events.js"
                  data-id="calendar-events"
                >
                  {sortedEvents.map(event => {
                    const date = formatDate(event.date);
                    return (
                      <div 
                        key={event.id}
                        className="flex bg-gray-750 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
                        data-path="pages/Events.js"
                        data-id={`calendar-event-${event.id}`}
                      >
                        <div 
                          className="w-20 bg-gray-700 flex flex-col items-center justify-center p-2"
                          data-path="pages/Events.js"
                          data-id={`calendar-date-${event.id}`}
                        >
                          <span 
                            className="text-xs text-gray-400"
                            data-path="pages/Events.js"
                            data-id={`calendar-weekday-${event.id}`}
                          >
                            {date.weekday}
                          </span>
                          <span 
                            className="text-2xl font-bold text-white"
                            data-path="pages/Events.js"
                            data-id={`calendar-day-${event.id}`}
                          >
                            {date.day}
                          </span>
                          <span 
                            className="text-xs text-gray-400"
                            data-path="pages/Events.js"
                            data-id={`calendar-month-${event.id}`}
                          >
                            {date.month}
                          </span>
                        </div>
                        
                        <div 
                          className="flex-grow p-4"
                          data-path="pages/Events.js"
                          data-id={`calendar-content-${event.id}`}
                        >
                          <h4 
                            className="text-lg font-bold text-white mb-1"
                            data-path="pages/Events.js"
                            data-id={`calendar-title-${event.id}`}
                          >
                            {event.title}
                          </h4>
                          
                          <div 
                            className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-400 mb-2"
                            data-path="pages/Events.js"
                            data-id={`calendar-meta-${event.id}`}
                          >
                            <div 
                              className="flex items-center mr-4"
                              data-path="pages/Events.js"
                              data-id={`calendar-time-${event.id}`}
                            >
                              <i className="fas fa-clock mr-1"></i>
                              <span>{event.time}</span>
                            </div>
                            
                            <div 
                              className="flex items-center mr-4"
                              data-path="pages/Events.js"
                              data-id={`calendar-location-${event.id}`}
                            >
                              <i className="fas fa-map-marker-alt mr-1"></i>
                              <span>{event.location}</span>
                            </div>
                            
                            <div 
                              className="flex items-center"
                              data-path="pages/Events.js"
                              data-id={`calendar-organizer-${event.id}`}
                            >
                              <i className="fas fa-user mr-1"></i>
                              <span>{event.organizer}</span>
                            </div>
                          </div>
                          
                          <p 
                            className="text-gray-300 text-sm line-clamp-2"
                            data-path="pages/Events.js"
                            data-id={`calendar-description-${event.id}`}
                          >
                            {event.description}
                          </p>
                        </div>
                        
                        <div 
                          className="w-24 flex items-center justify-center p-4 border-l border-gray-700"
                          data-path="pages/Events.js"
                          data-id={`calendar-actions-${event.id}`}
                        >
                          <button 
                            className="ff-btn px-4 py-2 rounded-md text-sm font-medium"
                            data-path="pages/Events.js"
                            data-id={`calendar-join-${event.id}`}
                          >
                            Join
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* List View */}
            {viewMode === 'list' && (
              <div 
                className="bg-gray-800 rounded-lg overflow-hidden"
                data-path="pages/Events.js"
                data-id="events-list"
              >
                {/* List Header */}
                <div 
                  className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-700 text-gray-300 text-sm font-medium"
                  data-path="pages/Events.js"
                  data-id="list-header"
                >
                  <div 
                    className="col-span-3"
                    data-path="pages/Events.js"
                    data-id="header-date"
                  >
                    Date & Time
                  </div>
                  <div 
                    className="col-span-3"
                    data-path="pages/Events.js"
                    data-id="header-event"
                  >
                    Event
                  </div>
                  <div 
                    className="col-span-2"
                    data-path="pages/Events.js"
                    data-id="header-location"
                  >
                    Location
                  </div>
                  <div 
                    className="col-span-2"
                    data-path="pages/Events.js"
                    data-id="header-organizer"
                  >
                    Organizer
                  </div>
                  <div 
                    className="col-span-2 text-right"
                    data-path="pages/Events.js"
                    data-id="header-actions"
                  >
                    Actions
                  </div>
                </div>
                
                {/* List Items */}
                {sortedEvents.map(event => {
                  const date = formatDate(event.date);
                  return (
                    <div 
                      key={event.id}
                      className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-700 hover:bg-gray-750 transition-colors"
                      data-path="pages/Events.js"
                      data-id={`list-event-${event.id}`}
                    >
                      <div 
                        className="col-span-3 flex items-center"
                        data-path="pages/Events.js"
                        data-id={`list-date-${event.id}`}
                      >
                        <div 
                          className="w-10 h-10 rounded-full bg-gray-700 flex flex-col items-center justify-center mr-3"
                          data-path="pages/Events.js"
                          data-id={`list-date-icon-${event.id}`}
                        >
                          <span 
                            className="text-xs text-gray-400"
                            data-path="pages/Events.js"
                            data-id={`list-date-month-${event.id}`}
                          >
                            {date.month}
                          </span>
                          <span 
                            className="text-sm font-bold text-white leading-none"
                            data-path="pages/Events.js"
                            data-id={`list-date-day-${event.id}`}
                          >
                            {date.day}
                          </span>
                        </div>
                        <span 
                          className="text-white"
                          data-path="pages/Events.js"
                          data-id={`list-time-${event.id}`}
                        >
                          {event.time}
                        </span>
                      </div>
                      
                      <div 
                        className="col-span-3 flex items-center"
                        data-path="pages/Events.js"
                        data-id={`list-event-title-${event.id}`}
                      >
                        <span className="text-white font-medium">{event.title}</span>
                      </div>
                      
                      <div 
                        className="col-span-2 flex items-center text-gray-300"
                        data-path="pages/Events.js"
                        data-id={`list-location-${event.id}`}
                      >
                        <i className="fas fa-map-marker-alt text-purple-400 mr-2"></i>
                        <span>{event.location}</span>
                      </div>
                      
                      <div 
                        className="col-span-2 flex items-center text-gray-300"
                        data-path="pages/Events.js"
                        data-id={`list-organizer-${event.id}`}
                      >
                        <i className="fas fa-user text-purple-400 mr-2"></i>
                        <span>{event.organizer}</span>
                      </div>
                      
                      <div 
                        className="col-span-2 flex items-center justify-end space-x-2"
                        data-path="pages/Events.js"
                        data-id={`list-actions-${event.id}`}
                      >
                        <button 
                          className="ff-btn px-3 py-1 rounded-md text-xs font-medium"
                          data-path="pages/Events.js"
                          data-id={`list-join-${event.id}`}
                        >
                          Join
                        </button>
                        
                        <button 
                          className="px-3 py-1 rounded-md text-xs font-medium border border-gray-700 text-gray-300 hover:bg-gray-700 transition-colors"
                          data-path="pages/Events.js"
                          data-id={`list-details-${event.id}`}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div 
            className="text-center py-12"
            data-path="pages/Events.js"
            data-id="events-empty-state"
          >
            <div 
              className="text-gray-500 text-6xl mb-4"
              data-path="pages/Events.js"
              data-id="events-empty-icon"
            >
              <i className="fas fa-calendar-times"></i>
            </div>
            <h3 
              className="text-xl font-medium text-white mb-2"
              data-path="pages/Events.js"
              data-id="events-empty-title"
            >
              No events found
            </h3>
            <p 
              className="text-gray-400"
              data-path="pages/Events.js"
              data-id="events-empty-message"
            >
              Try adjusting your filters or search query
            </p>
          </div>
        )}
        
        {/* Create Event CTA */}
        <div 
          className="mt-12 bg-gray-800 rounded-lg p-8 text-center"
          data-path="pages/Events.js"
          data-id="create-event-cta"
        >
          <h3 
            className="text-2xl font-bold text-white mb-4"
            data-path="pages/Events.js"
            data-id="cta-title"
          >
            Don't see an event you're looking for?
          </h3>
          <p 
            className="text-gray-300 mb-6 max-w-2xl mx-auto"
            data-path="pages/Events.js"
            data-id="cta-description"
          >
            Create your own event and invite the community to join. It's a great way to meet new players and share your FFXIV experience.
          </p>
          <button 
            className="ff-btn px-6 py-3 rounded-md text-white font-medium"
            data-path="pages/Events.js"
            data-id="cta-button"
          >
            <i className="fas fa-calendar-plus mr-2"></i>
            Create Your Event
          </button>
        </div>
      </div>
    </div>
  );
}