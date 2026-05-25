import React, { useState } from 'react';
import PortfolioCard from './components/PortfolioCard';
import MovieExplorer from './components/MovieExplorer'; // Import here

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const containerStyle = {
    backgroundColor: theme === 'light' ? '#f7fafc' : '#1a202c',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    transition: 'background-color 0.3s ease',
    fontFamily: 'system-ui, sans-serif'
  };

  // ... (Keep the previous userData object exactly as it was)
  const userData = {
    name: 'TuteDude',
    title: 'Product Designer & Frontend Engineer',
    bio: 'I design and build calm, focused product experiences for fast-moving teams. Currently exploring AI-assisted interfaces, design systems, and high-performance UI engineering.',
    // Highly reliable, fast loading images
    avatars: [
      'https://robohash.org/user1.png?set=set4',
      'https://robohash.org/user2.png?set=set4',
      'https://robohash.org/user3.png?set=set4',
      'https://robohash.org/user4.png?set=set4'
    ],
    skills: ['Design Systems', 'React', 'TypeScript', 'Figma', 'Prototyping', 'Accessibility']
  };

  return (
    <div style={containerStyle}>
      <div style={{ width: '100%', maxWidth: '700px', display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: theme === 'light' ? '#e2e8f0' : '#4a5568',
            color: theme === 'light' ? '#4a5568' : '#ffffff',
            border: 'none', padding: '0.5rem 1rem', borderRadius: '20px', cursor: 'pointer'
          }}
        >
          {theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Part A Layout */}
      <PortfolioCard user={userData} theme={theme} />

      {/* Part B Layout */}
      <MovieExplorer theme={theme} />
    </div>
  );
}

export default App;