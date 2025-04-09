function Community() {
  const [activeTab, setActiveTab] = React.useState('discussions');
  
  // Mock data for discussions
  const discussions = [
    {
      id: 'disc1',
      title: 'Best rotation for level 90 Samurai?',
      author: 'SamuraiMain',
      replies: 24,
      views: 1352,
      lastActivity: '2 hours ago',
      tags: ['Combat', 'Samurai', 'Rotation']
    },
    {
      id: 'disc2',
      title: 'Housing ideas for small apartments',
      author: 'InteriorDesigner',
      replies: 47,
      views: 2103,
      lastActivity: '5 hours ago',
      tags: ['Housing', 'Decoration', 'Tips']
    },
    {
      id: 'disc3',
      title: 'Endwalker MSQ discussion (SPOILERS)',
      author: 'LoreEnthusiast',
      replies: 89,
      views: 4521,
      lastActivity: '1 day ago',
      tags: ['Story', 'Endwalker', 'Spoilers']
    },
    {
      id: 'disc4',
      title: 'Gathering collectables guide for beginners',
      author: 'MasterCrafter',
      replies: 12,
      views: 876,
      lastActivity: '2 days ago',
      tags: ['Gathering', 'Collectables', 'Guide']
    },
    {
      id: 'disc5',
      title: 'Looking for static on Primal DC',
      author: 'RaidLeader',
      replies: 8,
      views: 432,
      lastActivity: '3 days ago',
      tags: ['Recruitment', 'Raiding', 'Primal']
    }
  ];
  
  // Mock data for free companies
  const freeCompanies = [
    {
      id: 'fc1',
      name: 'Eorzean Adventurers',
      server: 'Cactuar',
      members: 156,
      focus: ['Casual', 'Social', 'PvE'],
      description: 'A friendly FC for players of all levels. We run regular events and help new players.',
      emblem: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'fc2',
      name: 'Savage Raiders',
      server: 'Gilgamesh',
      members: 87,
      focus: ['Raiding', 'Hardcore', 'Endgame'],
      description: 'Focused on high-end raiding content. We have multiple raid teams that clear Savage and Ultimate.',
      emblem: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'fc3',
      name: 'Crafters United',
      server: 'Leviathan',
      members: 112,
      focus: ['Crafting', 'Gathering', 'Market'],
      description: 'A community of crafters and gatherers. We help each other with materials, recipes, and market strategies.',
      emblem: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    }
  ];
  
  // Mock data for Discord servers
  const discordServers = [
    {
      id: 'discord1',
      name: 'The Balance',
      members: '50K+',
      focus: 'Job optimization and theorycrafting',
      link: '#',
      icon: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'discord2',
      name: 'FFXIV Recruiter',
      members: '25K+',
      focus: 'Static and FC recruitment',
      link: '#',
      icon: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'discord3',
      name: 'Eorzea Collection',
      members: '30K+',
      focus: 'Glamour and fashion',
      link: '#',
      icon: 'https://images.unsplash.com/photo-1576158113292-43f94ce05cb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <div 
      className="min-h-screen bg-gray-900 py-12"
      data-path="pages/Community.js"
      data-id="community-container"
    >
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div 
          className="text-center mb-12"
          data-path="pages/Community.js"
          data-id="community-header"
        >
          <h1 
            className="text-4xl font-bold text-white mb-4"
            data-path="pages/Community.js"
            data-id="community-title"
          >
            FFXIV Community
          </h1>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            data-path="pages/Community.js"
            data-id="community-description"
          >
            Connect with other players, join discussions, find a Free Company, and become part of our growing community.
          </p>
        </div>
        
        {/* Tabs */}
        <div 
          className="flex border-b border-gray-800 mb-8"
          data-path="pages/Community.js"
          data-id="community-tabs"
        >
          <button 
            className={`px-6 py-3 font-medium text-sm focus:outline-none ${
              activeTab === 'discussions' 
                ? 'text-purple-400 border-b-2 border-purple-400' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('discussions')}
            data-path="pages/Community.js"
            data-id="tab-discussions"
          >
            <i className="fas fa-comments mr-2"></i>
            Discussions
          </button>
          
          <button 
            className={`px-6 py-3 font-medium text-sm focus:outline-none ${
              activeTab === 'freecompanies' 
                ? 'text-purple-400 border-b-2 border-purple-400' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('freecompanies')}
            data-path="pages/Community.js"
            data-id="tab-freecompanies"
          >
            <i className="fas fa-users mr-2"></i>
            Free Companies
          </button>
          
          <button 
            className={`px-6 py-3 font-medium text-sm focus:outline-none ${
              activeTab === 'discord' 
                ? 'text-purple-400 border-b-2 border-purple-400' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('discord')}
            data-path="pages/Community.js"
            data-id="tab-discord"
          >
            <i className="fab fa-discord mr-2"></i>
            Discord Servers
          </button>
        </div>
        
        {/* Tab Content */}
        <div 
          className="mb-12"
          data-path="pages/Community.js"
          data-id="community-content"
        >
          {/* Discussions Tab */}
          {activeTab === 'discussions' && (
            <div 
              data-path="pages/Community.js"
              data-id="discussions-content"
            >
              <div 
                className="flex justify-between items-center mb-6"
                data-path="pages/Community.js"
                data-id="discussions-header"
              >
                <h2 
                  className="text-2xl font-bold text-white"
                  data-path="pages/Community.js"
                  data-id="discussions-title"
                >
                  Recent Discussions
                </h2>
                
                <button 
                  className="ff-btn px-4 py-2 rounded-md text-white font-medium flex items-center space-x-2"
                  data-path="pages/Community.js"
                  data-id="new-discussion-button"
                >
                  <i className="fas fa-plus-circle"></i>
                  <span>New Discussion</span>
                </button>
              </div>
              
              <div 
                className="bg-gray-800 rounded-lg overflow-hidden"
                data-path="pages/Community.js"
                data-id="discussions-table"
              >
                {/* Table Header */}
                <div 
                  className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-700 text-gray-300 text-sm font-medium"
                  data-path="pages/Community.js"
                  data-id="discussions-table-header"
                >
                  <div 
                    className="col-span-6"
                    data-path="pages/Community.js"
                    data-id="header-topic"
                  >
                    Topic
                  </div>
                  <div 
                    className="col-span-2 text-center"
                    data-path="pages/Community.js"
                    data-id="header-replies"
                  >
                    Replies
                  </div>
                  <div 
                    className="col-span-2 text-center"
                    data-path="pages/Community.js"
                    data-id="header-views"
                  >
                    Views
                  </div>
                  <div 
                    className="col-span-2 text-right"
                    data-path="pages/Community.js"
                    data-id="header-activity"
                  >
                    Last Activity
                  </div>
                </div>
                
                {/* Table Rows */}
                {discussions.map(discussion => (
                  <div 
                    key={discussion.id}
                    className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-700 hover:bg-gray-750 transition-colors"
                    data-path="pages/Community.js"
                    data-id={`discussion-${discussion.id}`}
                  >
                    <div 
                      className="col-span-6"
                      data-path="pages/Community.js"
                      data-id={`discussion-topic-${discussion.id}`}
                    >
                      <a 
                        href="#" 
                        className="text-white font-medium hover:text-purple-400 transition-colors"
                        data-path="pages/Community.js"
                        data-id={`discussion-title-${discussion.id}`}
                      >
                        {discussion.title}
                      </a>
                      <div 
                        className="flex items-center mt-1"
                        data-path="pages/Community.js"
                        data-id={`discussion-meta-${discussion.id}`}
                      >
                        <span 
                          className="text-sm text-gray-400"
                          data-path="pages/Community.js"
                          data-id={`discussion-author-${discussion.id}`}
                        >
                          By {discussion.author}
                        </span>
                        <div 
                          className="flex flex-wrap ml-3 gap-1"
                          data-path="pages/Community.js"
                          data-id={`discussion-tags-${discussion.id}`}
                        >
                          {discussion.tags.map(tag => (
                            <span 
                              key={tag}
                              className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded text-xs"
                              data-path="pages/Community.js"
                              data-id={`discussion-tag-${discussion.id}-${tag}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div 
                      className="col-span-2 flex items-center justify-center text-gray-300"
                      data-path="pages/Community.js"
                      data-id={`discussion-replies-${discussion.id}`}
                    >
                      <i className="fas fa-comment text-purple-400 mr-2"></i>
                      {discussion.replies}
                    </div>
                    <div 
                      className="col-span-2 flex items-center justify-center text-gray-300"
                      data-path="pages/Community.js"
                      data-id={`discussion-views-${discussion.id}`}
                    >
                      <i className="fas fa-eye text-gray-500 mr-2"></i>
                      {discussion.views}
                    </div>
                    <div 
                      className="col-span-2 flex items-center justify-end text-gray-400 text-sm"
                      data-path="pages/Community.js"
                      data-id={`discussion-activity-${discussion.id}`}
                    >
                      {discussion.lastActivity}
                    </div>
                  </div>
                ))}
              </div>
              
              <div 
                className="mt-6 text-center"
                data-path="pages/Community.js"
                data-id="discussions-more"
              >
                <button 
                  className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  data-path="pages/Community.js"
                  data-id="view-more-discussions"
                >
                  View More Discussions
                </button>
              </div>
            </div>
          )}
          
          {/* Free Companies Tab */}
          {activeTab === 'freecompanies' && (
            <div 
              data-path="pages/Community.js"
              data-id="freecompanies-content"
            >
              <div 
                className="flex justify-between items-center mb-6"
                data-path="pages/Community.js"
                data-id="freecompanies-header"
              >
                <h2 
                  className="text-2xl font-bold text-white"
                  data-path="pages/Community.js"
                  data-id="freecompanies-title"
                >
                  Featured Free Companies
                </h2>
                
                <button 
                  className="ff-btn px-4 py-2 rounded-md text-white font-medium flex items-center space-x-2"
                  data-path="pages/Community.js"
                  data-id="register-fc-button"
                >
                  <i className="fas fa-plus-circle"></i>
                  <span>Register Your FC</span>
                </button>
              </div>
              
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                data-path="pages/Community.js"
                data-id="freecompanies-grid"
              >
                {freeCompanies.map(fc => (
                  <div 
                    key={fc.id}
                    className="ff-card p-6"
                    data-path="pages/Community.js"
                    data-id={`fc-card-${fc.id}`}
                  >
                    <div 
                      className="flex items-start mb-4"
                      data-path="pages/Community.js"
                      data-id={`fc-header-${fc.id}`}
                    >
                      <img 
                        src={fc.emblem} 
                        alt={fc.name} 
                        className="w-12 h-12 rounded-md mr-4 object-cover"
                        data-path="pages/Community.js"
                        data-id={`fc-emblem-${fc.id}`}
                      />
                      <div>
                        <h3 
                          className="text-xl font-bold text-white"
                          data-path="pages/Community.js"
                          data-id={`fc-name-${fc.id}`}
                        >
                          {fc.name}
                        </h3>
                        <div 
                          className="flex items-center text-sm text-gray-400"
                          data-path="pages/Community.js"
                          data-id={`fc-meta-${fc.id}`}
                        >
                          <span>{fc.server}</span>
                          <span className="mx-2">•</span>
                          <span>{fc.members} members</span>
                        </div>
                      </div>
                    </div>
                    
                    <p 
                      className="text-gray-300 mb-4"
                      data-path="pages/Community.js"
                      data-id={`fc-description-${fc.id}`}
                    >
                      {fc.description}
                    </p>
                    
                    <div 
                      className="flex flex-wrap gap-2 mb-4"
                      data-path="pages/Community.js"
                      data-id={`fc-focus-${fc.id}`}
                    >
                      {fc.focus.map(tag => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                          data-path="pages/Community.js"
                          data-id={`fc-tag-${fc.id}-${tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button 
                      className="ff-btn w-full py-2 rounded-md text-white font-medium"
                      data-path="pages/Community.js"
                      data-id={`fc-view-button-${fc.id}`}
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
              
              <div 
                className="mt-8 text-center"
                data-path="pages/Community.js"
                data-id="freecompanies-more"
              >
                <button 
                  className="ff-btn px-6 py-2 rounded-md text-white font-medium"
                  data-path="pages/Community.js"
                  data-id="browse-more-fc"
                >
                  Browse More Free Companies
                </button>
              </div>
            </div>
          )}
          
          {/* Discord Servers Tab */}
          {activeTab === 'discord' && (
            <div 
              data-path="pages/Community.js"
              data-id="discord-content"
            >
              <div 
                className="flex justify-between items-center mb-6"
                data-path="pages/Community.js"
                data-id="discord-header"
              >
                <h2 
                  className="text-2xl font-bold text-white"
                  data-path="pages/Community.js"
                  data-id="discord-title"
                >
                  Popular FFXIV Discord Servers
                </h2>
                
                <button 
                  className="ff-btn px-4 py-2 rounded-md text-white font-medium flex items-center space-x-2"
                  data-path="pages/Community.js"
                  data-id="add-discord-button"
                >
                  <i className="fas fa-plus-circle"></i>
                  <span>Add Server</span>
                </button>
              </div>
              
              <div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                data-path="pages/Community.js"
                data-id="discord-grid"
              >
                {discordServers.map(server => (
                  <div 
                    key={server.id}
                    className="ff-card p-6"
                    data-path="pages/Community.js"
                    data-id={`discord-card-${server.id}`}
                  >
                    <div 
                      className="flex items-center mb-4"
                      data-path="pages/Community.js"
                      data-id={`discord-header-${server.id}`}
                    >
                      <img 
                        src={server.icon} 
                        alt={server.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                        data-path="pages/Community.js"
                        data-id={`discord-icon-${server.id}`}
                      />
                      <div>
                        <h3 
                          className="text-xl font-bold text-white"
                          data-path="pages/Community.js"
                          data-id={`discord-name-${server.id}`}
                        >
                          {server.name}
                        </h3>
                        <div 
                          className="text-sm text-gray-400"
                          data-path="pages/Community.js"
                          data-id={`discord-members-${server.id}`}
                        >
                          <i className="fas fa-users mr-1"></i> {server.members} members
                        </div>
                      </div>
                    </div>
                    
                    <p 
                      className="text-gray-300 mb-6"
                      data-path="pages/Community.js"
                      data-id={`discord-focus-${server.id}`}
                    >
                      <span className="text-gray-400">Focus:</span> {server.focus}
                    </p>
                    
                    <a 
                      href={server.link}
                      className="block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md text-center transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-path="pages/Community.js"
                      data-id={`discord-join-${server.id}`}
                    >
                      <i className="fab fa-discord mr-2"></i> Join Server
                    </a>
                  </div>
                ))}
              </div>
              
              <div 
                className="bg-gray-800 rounded-lg p-6 mt-8 text-center"
                data-path="pages/Community.js"
                data-id="our-discord"
              >
                <h3 
                  className="text-2xl font-bold text-white mb-2"
                  data-path="pages/Community.js"
                  data-id="our-discord-title"
                >
                  Join Our Official Discord Server
                </h3>
                <p 
                  className="text-gray-300 mb-6 max-w-2xl mx-auto"
                  data-path="pages/Community.js"
                  data-id="our-discord-description"
                >
                  Connect with our community, get help with the game, find groups for content, and stay updated on the latest news and events.
                </p>
                <a 
                  href="#"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md text-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-path="pages/Community.js"
                  data-id="join-our-discord"
                >
                  <i className="fab fa-discord mr-2"></i> Join FFXIV Hub Discord
                </a>
              </div>
            </div>
          )}
        </div>
        
        {/* Community Guidelines */}
        <div 
          className="bg-gray-800 rounded-lg p-6"
          data-path="pages/Community.js"
          data-id="community-guidelines"
        >
          <h3 
            className="text-xl font-bold text-white mb-4"
            data-path="pages/Community.js"
            data-id="guidelines-title"
          >
            Community Guidelines
          </h3>
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-path="pages/Community.js"
            data-id="guidelines-grid"
          >
            <div 
              className="flex items-start"
              data-path="pages/Community.js"
              data-id="guideline-1"
            >
              <div 
                className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-4 flex-shrink-0"
                data-path="pages/Community.js"
                data-id="guideline-icon-1"
              >
                <i className="fas fa-heart text-white"></i>
              </div>
              <div>
                <h4 
                  className="text-white font-medium mb-1"
                  data-path="pages/Community.js"
                  data-id="guideline-title-1"
                >
                  Be Respectful
                </h4>
                <p 
                  className="text-gray-400 text-sm"
                  data-path="pages/Community.js"
                  data-id="guideline-text-1"
                >
                  Treat others with respect. No harassment, hate speech, or personal attacks.
                </p>
              </div>
            </div>
            
            <div 
              className="flex items-start"
              data-path="pages/Community.js"
              data-id="guideline-2"
            >
              <div 
                className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-4 flex-shrink-0"
                data-path="pages/Community.js"
                data-id="guideline-icon-2"
              >
                <i className="fas fa-comments text-white"></i>
              </div>
              <div>
                <h4 
                  className="text-white font-medium mb-1"
                  data-path="pages/Community.js"
                  data-id="guideline-title-2"
                >
                  Stay On Topic
                </h4>
                <p 
                  className="text-gray-400 text-sm"
                  data-path="pages/Community.js"
                  data-id="guideline-text-2"
                >
                  Keep discussions relevant to FFXIV and the community. Use appropriate channels.
                </p>
              </div>
            </div>
            
            <div 
              className="flex items-start"
              data-path="pages/Community.js"
              data-id="guideline-3"
            >
              <div 
                className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-4 flex-shrink-0"
                data-path="pages/Community.js"
                data-id="guideline-icon-3"
              >
                <i className="fas fa-shield-alt text-white"></i>
              </div>
              <div>
                <h4 
                  className="text-white font-medium mb-1"
                  data-path="pages/Community.js"
                  data-id="guideline-title-3"
                >
                  Follow the Rules
                </h4>
                <p 
                  className="text-gray-400 text-sm"
                  data-path="pages/Community.js"
                  data-id="guideline-text-3"
                >
                  Adhere to our community rules and the FFXIV Terms of Service at all times.
                </p>
              </div>
            </div>
          </div>
          
          <div 
            className="mt-4 text-center"
            data-path="pages/Community.js"
            data-id="guidelines-more"
          >
            <a 
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
              data-path="pages/Community.js"
              data-id="view-full-guidelines"
            >
              View Full Community Guidelines
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}