import React from 'react';

function ProfileInfo({ name, title, bio, avatarUrl, theme }) {
  const isDark = theme === 'dark';

  return (
    <div style={{ textAlign: 'center', marginBottom: '1.5rem', transition: 'color 0.3s ease' }}>
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: isDark ? '2px solid #4a5568' : 'none' }}
      />
      <h2 style={{ margin: '0.5rem 0 0.2rem 0', color: isDark ? '#ffffff' : '#1a202c' }}>{name}</h2>
      <h4 style={{ margin: 0, color: isDark ? '#cbd5e0' : '#718096', fontWeight: '500' }}>{title}</h4>
      <p style={{ color: isDark ? '#a0aec0' : '#4a5568', fontSize: '0.95rem', lineHeight: '1.5', marginTop: '1rem' }}>
        {bio}
      </p>
    </div>
  );
}

export default ProfileInfo;