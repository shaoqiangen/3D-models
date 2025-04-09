function CharacterCard({ character }) {
  return (
    <div 
      className="ff-card hover-scale overflow-hidden"
      data-path="components/CharacterCard.js"
      data-id={`character-card-${character.id}`}
    >
      <div 
        className="flex flex-col md:flex-row"
        data-path="components/CharacterCard.js"
        data-id={`character-container-${character.id}`}
      >
        <div 
          className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden"
          data-path="components/CharacterCard.js"
          data-id={`character-image-container-${character.id}`}
        >
          <img 
            src={character.avatar} 
            alt={character.name} 
            className="w-full h-full object-cover"
            data-path="components/CharacterCard.js"
            data-id={`character-image-${character.id}`}
          />
        </div>
        
        <div 
          className="p-5 w-full md:w-2/3"
          data-path="components/CharacterCard.js"
          data-id={`character-content-${character.id}`}
        >
          <div 
            className="flex justify-between items-start mb-3"
            data-path="components/CharacterCard.js"
            data-id={`character-header-${character.id}`}
          >
            <div>
              <h3 
                className="text-xl font-bold text-white"
                data-path="components/CharacterCard.js"
                data-id={`character-name-${character.id}`}
              >
                {character.name}
              </h3>
              <div 
                className="flex items-center space-x-2 text-sm text-gray-400"
                data-path="components/CharacterCard.js"
                data-id={`character-meta-${character.id}`}
              >
                <span>{character.race}</span>
                <span>•</span>
                <span>{character.server}</span>
              </div>
            </div>
            
            <div 
              className="flex flex-col items-center"
              data-path="components/CharacterCard.js"
              data-id={`character-level-container-${character.id}`}
            >
              <div 
                className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center"
                data-path="components/CharacterCard.js"
                data-id={`character-level-badge-${character.id}`}
              >
                <span 
                  className="text-white font-bold text-sm"
                  data-path="components/CharacterCard.js"
                  data-id={`character-level-${character.id}`}
                >
                  {character.level}
                </span>
              </div>
              <span 
                className="text-xs text-gray-400 mt-1"
                data-path="components/CharacterCard.js"
                data-id={`character-level-label-${character.id}`}
              >
                Level
              </span>
            </div>
          </div>
          
          <div 
            className="mb-4"
            data-path="components/CharacterCard.js"
            data-id={`character-job-container-${character.id}`}
          >
            <div 
              className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800"
              data-path="components/CharacterCard.js"
              data-id={`character-job-badge-${character.id}`}
            >
              <span 
                className="text-sm font-medium text-purple-400"
                data-path="components/CharacterCard.js"
                data-id={`character-job-${character.id}`}
              >
                {character.mainJob}
              </span>
            </div>
          </div>
          
          <p 
            className="text-gray-300 mb-4 line-clamp-3"
            data-path="components/CharacterCard.js"
            data-id={`character-bio-${character.id}`}
          >
            {character.bio}
          </p>
          
          <div 
            className="flex space-x-2"
            data-path="components/CharacterCard.js"
            data-id={`character-actions-${character.id}`}
          >
            <button 
              className="ff-btn px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-1"
              data-path="components/CharacterCard.js"
              data-id={`character-profile-button-${character.id}`}
            >
              <i className="fas fa-user"></i>
              <span>View Profile</span>
            </button>
            
            <button 
              className="px-4 py-2 rounded-md text-sm font-medium border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors flex items-center space-x-1"
              data-path="components/CharacterCard.js"
              data-id={`character-friend-button-${character.id}`}
            >
              <i className="fas fa-user-plus"></i>
              <span>Add Friend</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}