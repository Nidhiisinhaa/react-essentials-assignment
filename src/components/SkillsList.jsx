import React from 'react';

function SkillsList({ skills, theme }) {
  const isDark = theme === 'dark';

  const badgeStyle = {
    backgroundColor: isDark ? '#4a5568' : '#edf2f7',
    color: isDark ? '#e2e8f0' : '#4a5568',
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '500',
    display: 'inline-block',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h5 style={{ margin: '0 0 0.5rem 0', color: isDark ? '#cbd5e0' : '#718096', fontSize: '0.85rem' }}>Skills</h5>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {skills.map((skill, index) => (
          <span key={index} style={badgeStyle}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsList;