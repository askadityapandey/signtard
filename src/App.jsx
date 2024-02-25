// App.jsx
import React, { useState } from 'react';
import Introduction from './components/Introduction';
import Button from './components/Button';
import Canvas from './components/Canvas';
import './App.css'; // Import your CSS file for styling

function App() {
  const [showCanvas, setShowCanvas] = useState(false);

  const handleGetStarted = () => {
    setShowCanvas(true);
  };

  return (
    <div className="app">
      <header className="header">
        {/* You can add a header component here if needed */}
      </header>
      <main className="main">
        {showCanvas ? (
          <Canvas />
        ) : (
          <div className="intro">
            <Introduction />
            <Button text="Get Started" onClick={handleGetStarted} />
          </div>
        )}
      </main>
      <footer className="footer">
        {/* You can add a footer component here if needed */}
      </footer>
    </div>
  );
}

export default App;
