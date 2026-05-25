import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import SkillsList from './SkillsList';

function PortfolioCard({ user, theme }) {
  // State 1: Like Counter
  const [likes, setLikes] = useState(128);

  // State 2: Current Avatar Index
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Safe Navigation Handlers for photo cycling
  const handlePrevPhoto = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? user.avatars.length - 1 : prevIndex - 1
    );
  };

  const handleNextPhoto = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === user.avatars.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleContactAlert = () => {
    alert(`Connecting with ${user.name}...`);
  };

  // Theme-based styling configurations
  const isDark = theme === 'dark';
  const cardBg = isDark ? '#2d3748' : '#ffffff';
  const borderColor = isDark ? '#4a5568' : '#e2e8f0';

  const cardStyle = {
    backgroundColor: cardBg,
    borderRadius: '16px',
    boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.08)',
    width: '450px',
    padding: '2rem',
    transition: 'all 0.3s ease',
    fontFamily: 'system-ui, sans-serif'
  };

  const btnStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '0.2rem 0.5rem',
    color: isDark ? '#cbd5e0' : '#4a5568',
    transition: 'color 0.2s ease'
  };

  return (
    <div style={cardStyle}>
      {/* 1. Profile Info Layout */}
      <ProfileInfo
        name={user.name}
        title={user.title}
        bio={user.bio}
        avatarUrl={user.avatars[currentImgIndex]}
        theme={theme}
      />

      {/* 2. Skills Layout */}
      <SkillsList skills={user.skills} theme={theme} />

      {/* 3. Interactive Footer Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: `1px solid ${borderColor}`,
        paddingTop: '1rem',
        marginTop: '1rem'
      }}>

        {/* Photo Cycler Layout ( <  >  X / Y ) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.2rem',
          color: isDark ? '#a0aec0' : '#718096',
          fontSize: '0.9rem'
        }}>
          <button onClick={handlePrevPhoto} style={btnStyle}>&lt;</button>
          <button onClick={handleNextPhoto} style={btnStyle}>&gt;</button>
          <span style={{ marginLeft: '0.5rem' }}>
            {currentImgIndex + 1} / {user.avatars.length}
          </span>
        </div>

        {/* Like Button */}
        <button
          onClick={() => setLikes(likes + 1)}
          style={{ ...btnStyle, display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: '500' }}
        >
          ❤️ {likes}
        </button>

        {/* Contact Button */}
        <button
          onClick={handleContactAlert}
          style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
        >
          ✉️ Contact
        </button>
      </div>
    </div>
  );
}

export default PortfolioCard;