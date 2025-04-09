function EventCard({ event }) {
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div 
      className="ff-card hover-scale overflow-hidden"
      data-path="components/EventCard.js"
      data-id={`event-card-${event.id}`}
    >
      <div 
        className="h-40 overflow-hidden relative"
        data-path="components/EventCard.js"
        data-id={`event-image-container-${event.id}`}
      >
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
          data-path="components/EventCard.js"
          data-id={`event-image-${event.id}`}
        />
        <div 
          className="absolute top-0 left-0 m-3 px-3 py-1 rounded-md text-xs font-medium bg-purple-600 text-white"
          data-path="components/EventCard.js"
          data-id={`event-badge-${event.id}`}
        >
          Event
        </div>
        <div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-24"
          data-path="components/EventCard.js"
          data-id={`event-image-gradient-${event.id}`}
        ></div>
      </div>
      
      <div 
        className="p-5"
        data-path="components/EventCard.js"
        data-id={`event-content-${event.id}`}
      >
        <h3 
          className="text-xl font-bold text-white mb-2"
          data-path="components/EventCard.js"
          data-id={`event-title-${event.id}`}
        >
          {event.title}
        </h3>
        
        <div 
          className="flex flex-col space-y-2 mb-4"
          data-path="components/EventCard.js"
          data-id={`event-details-${event.id}`}
        >
          <div 
            className="flex items-center space-x-2 text-sm"
            data-path="components/EventCard.js"
            data-id={`event-date-container-${event.id}`}
          >
            <i className="fas fa-calendar-alt text-purple-400 w-5 text-center"></i>
            <span className="text-gray-300">{formatDate(event.date)}</span>
          </div>
          
          <div 
            className="flex items-center space-x-2 text-sm"
            data-path="components/EventCard.js"
            data-id={`event-time-container-${event.id}`}
          >
            <i className="fas fa-clock text-purple-400 w-5 text-center"></i>
            <span className="text-gray-300">{event.time}</span>
          </div>
          
          <div 
            className="flex items-center space-x-2 text-sm"
            data-path="components/EventCard.js"
            data-id={`event-location-container-${event.id}`}
          >
            <i className="fas fa-map-marker-alt text-purple-400 w-5 text-center"></i>
            <span className="text-gray-300">{event.location}</span>
          </div>
          
          <div 
            className="flex items-center space-x-2 text-sm"
            data-path="components/EventCard.js"
            data-id={`event-organizer-container-${event.id}`}
          >
            <i className="fas fa-user-friends text-purple-400 w-5 text-center"></i>
            <span className="text-gray-300">Organized by {event.organizer}</span>
          </div>
        </div>
        
        <p 
          className="text-gray-300 mb-4 line-clamp-2"
          data-path="components/EventCard.js"
          data-id={`event-description-${event.id}`}
        >
          {event.description}
        </p>
        
        <div 
          className="flex space-x-2"
          data-path="components/EventCard.js"
          data-id={`event-actions-${event.id}`}
        >
          <button 
            className="ff-btn px-4 py-2 rounded-md text-sm font-medium flex-1 flex items-center justify-center space-x-1"
            data-path="components/EventCard.js"
            data-id={`event-join-button-${event.id}`}
          >
            <i className="fas fa-calendar-plus"></i>
            <span>Join Event</span>
          </button>
          
          <button 
            className="px-4 py-2 rounded-md text-sm font-medium border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors flex items-center justify-center"
            data-path="components/EventCard.js"
            data-id={`event-share-button-${event.id}`}
          >
            <i className="fas fa-share-alt"></i>
          </button>
          
          <button 
            className="px-4 py-2 rounded-md text-sm font-medium border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors flex items-center justify-center"
            data-path="components/EventCard.js"
            data-id={`event-save-button-${event.id}`}
          >
            <i className="fas fa-bookmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}