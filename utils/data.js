// Mock data for the FFXIV community website

// News data
const newsData = [
  {
    id: "news1",
    title: "Patch 6.5 Details Revealed",
    summary: "Square Enix has revealed new details about the upcoming patch 6.5, including new raids, dungeons, and story content.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2023-10-15",
    author: "Moogle News Network"
  },
  {
    id: "news2",
    title: "Fan Festival 2023 Announced",
    summary: "The next Fan Festival has been announced for Las Vegas, Tokyo, and London with exciting reveals planned.",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2023-09-30",
    author: "FFXIV Community Team"
  },
  {
    id: "news3",
    title: "New Housing District Coming Soon",
    summary: "A new housing district has been announced for the next major patch, featuring Ishgardian architecture.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2023-09-22",
    author: "Eorzean Property News"
  }
];

// Guides data
const guidesData = [
  {
    id: "guide1",
    title: "Beginner's Guide to Tanking",
    summary: "Learn the basics of tanking in FFXIV, including enmity management, cooldown usage, and positioning.",
    image: "https://images.unsplash.com/photo-1590522265126-ae92e03a490c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "Warrior of Light",
    difficulty: "Beginner",
    jobIcon: "fa-shield-halved",
    jobColor: "#3b82f6"
  },
  {
    id: "guide2",
    title: "Advanced Healing Techniques",
    summary: "Take your healing to the next level with advanced tips on MP management, pre-healing, and DPS optimization.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "White Mage Main",
    difficulty: "Advanced",
    jobIcon: "fa-staff-snake",
    jobColor: "#22c55e"
  },
  {
    id: "guide3",
    title: "Savage Raid Guide: Pandaemonium",
    summary: "A comprehensive guide to clearing the latest Savage raid tier with mechanics explanations and positioning.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "Raid Leader",
    difficulty: "Extreme",
    jobIcon: "fa-sword",
    jobColor: "#ef4444"
  },
  {
    id: "guide4",
    title: "Gil Making Guide 2023",
    summary: "Learn how to efficiently make gil through crafting, gathering, and market board strategies.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: "Gillionaire",
    difficulty: "Intermediate",
    jobIcon: "fa-coins",
    jobColor: "#eab308"
  }
];

// Events data
const eventsData = [
  {
    id: "event1",
    title: "Community Raid Night",
    description: "Join us for a community raid night where we'll tackle the latest Alliance Raid content together.",
    date: "2023-11-05",
    time: "8:00 PM EST",
    location: "Aether - Midgardsormr",
    organizer: "Eorzean Raiders",
    image: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "event2",
    title: "Fashion Report Contest",
    description: "Show off your glamour skills in our monthly fashion report contest with gil prizes!",
    date: "2023-11-12",
    time: "7:00 PM GMT",
    location: "Light - Lich",
    organizer: "Eorzea Collection",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "event3",
    title: "Sprout Mentoring Session",
    description: "Experienced players will be available to help new players learn the game and answer questions.",
    date: "2023-11-18",
    time: "6:00 PM PST",
    location: "Primal - Leviathan",
    organizer: "Novice Network",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

// Character profiles data
const charactersData = [
  {
    id: "char1",
    name: "Lyra Stormborn",
    race: "Miqo'te",
    mainJob: "Dragoon",
    level: 90,
    server: "Gilgamesh",
    bio: "Veteran player since 1.0, specializing in melee DPS optimization and raid leading.",
    avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "char2",
    name: "Thancred Blackthorne",
    race: "Hyur",
    mainJob: "Gunbreaker",
    level: 90,
    server: "Tonberry",
    bio: "Tank main with a passion for glamour and housing design. Always looking to help new players.",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "char3",
    name: "Aerith Moonwhisper",
    race: "Viera",
    mainJob: "White Mage",
    level: 90,
    server: "Balmung",
    bio: "Roleplayer and healer extraordinaire. Organizes community events and writes FFXIV fan fiction.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "char4",
    name: "Zenos Blacksteel",
    race: "Au Ra",
    mainJob: "Samurai",
    level: 90,
    server: "Cactuar",
    bio: "Competitive player focused on parsing and speedrunning. Offers free DPS coaching.",
    avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

// Gallery data
const galleryData = [
  {
    id: "gallery1",
    title: "Limsa Lominsa Sunset",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    submitter: "ScreenshotMaster",
    likes: 245
  },
  {
    id: "gallery2",
    title: "Endwalker Final Battle",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    submitter: "LoreEnthusiast",
    likes: 189
  },
  {
    id: "gallery3",
    title: "My FC House Garden",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    submitter: "GardenerWoL",
    likes: 132
  },
  {
    id: "gallery4",
    title: "Chocobo Racing",
    image: "https://images.unsplash.com/photo-1469122312224-c5846569feb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    submitter: "GoldSaucer4Life",
    likes: 98
  },
  {
    id: "gallery5",
    title: "Raid Group Victory",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    submitter: "RaidLeader",
    likes: 204
  },
  {
    id: "gallery6",
    title: "Eorzean Sunset",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    submitter: "ArtisticWanderer",
    likes: 176
  }
];

// Navigation data
const navItems = [
  { id: "home", label: "Home", icon: "fa-home" },
  { id: "guides", label: "Guides", icon: "fa-book-open" },
  { id: "characters", label: "Characters", icon: "fa-user-group" },
  { id: "community", label: "Community", icon: "fa-comments" },
  { id: "events", label: "Events", icon: "fa-calendar" },
  { id: "gallery", label: "Gallery", icon: "fa-images" }
];

// Job categories
const jobCategories = [
  { id: "tank", name: "Tank", icon: "fa-shield-halved", color: "#3b82f6" },
  { id: "healer", name: "Healer", icon: "fa-staff-snake", color: "#22c55e" },
  { id: "dps", name: "DPS", icon: "fa-sword", color: "#ef4444" },
  { id: "crafter", name: "Crafter", icon: "fa-hammer", color: "#f59e0b" },
  { id: "gatherer", name: "Gatherer", icon: "fa-gem", color: "#8b5cf6" }
];

// Footer links
const footerLinks = [
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms of Service" },
  { id: "official", label: "Official FFXIV Site", external: true, url: "https://www.finalfantasyxiv.com/" }
];

// Social media links
const socialLinks = [
  { id: "discord", label: "Discord", icon: "fab fa-discord", url: "#" },
  { id: "twitter", label: "Twitter", icon: "fab fa-twitter", url: "#" },
  { id: "youtube", label: "YouTube", icon: "fab fa-youtube", url: "#" },
  { id: "twitch", label: "Twitch", icon: "fab fa-twitch", url: "#" }
];