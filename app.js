function App() {
  const [activePage, setActivePage] = React.useState('home');
  
  // Function to render the active page
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'guides':
        return <Guides />;
      case 'characters':
        return <Characters />;
      case 'community':
        return <Community />;
      case 'events':
        return <Events />;
      case 'gallery':
        return <Gallery />;
      default:
        return <Home />;
    }
  };
  
  // Scroll to top when changing pages
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div 
      className="min-h-screen flex flex-col"
      data-path="app.js"
      data-id="app-container"
    >
      <Header activePage={activePage} setActivePage={setActivePage} />
      
      <main 
        className="flex-grow"
        data-path="app.js"
        data-id="main-content"
      >
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

// Render the App component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);