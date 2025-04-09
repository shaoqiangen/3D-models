function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="bg-gray-900 border-t border-gray-800 pt-12 pb-8"
      data-path="components/Footer.js"
      data-id="footer-container"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div 
            className="col-span-1 md:col-span-2"
            data-path="components/Footer.js"
            data-id="footer-about"
          >
            <div 
              className="flex items-center space-x-2 mb-4"
              data-path="components/Footer.js"
              data-id="footer-logo"
            >
              <div className="w-8 h-8 rounded-full ff-gradient flex items-center justify-center">
                <i className="fas fa-meteor text-white text-sm"></i>
              </div>
              <div className="text-lg font-bold text-white">
                FFXIV <span className="text-purple-400">Hub</span>
              </div>
            </div>
            <p 
              className="text-gray-400 mb-4"
              data-path="components/Footer.js"
              data-id="footer-description"
            >
              A community-driven website for Final Fantasy XIV players to share guides, 
              connect with other players, and stay updated on the latest game news and events.
            </p>
            <div 
              className="flex space-x-4"
              data-path="components/Footer.js"
              data-id="footer-social"
            >
              {socialLinks.map(social => (
                <a 
                  key={social.id}
                  href={social.url}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-path="components/Footer.js"
                  data-id={`social-${social.id}`}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div 
            className="col-span-1"
            data-path="components/Footer.js"
            data-id="footer-links"
          >
            <h3 
              className="text-white font-semibold mb-4 text-lg"
              data-path="components/Footer.js"
              data-id="links-heading"
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center space-x-2"
                    data-path="components/Footer.js"
                    data-id={`footer-link-${item.id}`}
                  >
                    <i className={`fas ${item.icon} text-xs w-4`}></i>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div 
            className="col-span-1"
            data-path="components/Footer.js"
            data-id="footer-resources"
          >
            <h3 
              className="text-white font-semibold mb-4 text-lg"
              data-path="components/Footer.js"
              data-id="resources-heading"
            >
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.id}>
                  <a 
                    href={link.url || `#${link.id}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    data-path="components/Footer.js"
                    data-id={`resource-${link.id}`}
                  >
                    {link.label}
                    {link.external && <i className="fas fa-external-link-alt text-xs ml-1"></i>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div 
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          data-path="components/Footer.js"
          data-id="footer-bottom"
        >
          <p 
            className="text-gray-500 text-sm mb-4 md:mb-0"
            data-path="components/Footer.js"
            data-id="copyright"
          >
            © {currentYear} FFXIV Hub. This site is not affiliated with SQUARE ENIX CO., LTD.
          </p>
          <p 
            className="text-gray-500 text-sm"
            data-path="components/Footer.js"
            data-id="trademark"
          >
            FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}