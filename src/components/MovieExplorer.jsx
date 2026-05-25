import React, { useState } from 'react';

const LOCAL_MOVIE_DATA = [
  {
    id: 1,
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.6,
    tags: ['Adventure', 'Space', 'Time', 'Survival']
  },
  {
    id: 2,
    title: 'Star Wars: A New Hope',
    year: 1977,
    genre: 'Sci-Fi',
    rating: 8.6,
    tags: ['Space Opera', 'Rebels', 'Force', 'Galaxy']
  },
  {
    id: 3,
    title: 'The Star',
    year: 2017,
    genre: 'Animation',
    rating: 6.1,
    tags: ['Family', 'Journey', 'Friends']
  }
];

function MovieExplorer({ theme }) {
  const [searchQuery, setSearchQuery] = useState('');

  // State 2: Array of favorited movie IDs
  const [favorites, setFavorites] = useState([]);

  const handleReset = () => {
    setSearchQuery('');
  };

  // --- FAVORITES TOGGLE LOGIC ---
  const handleToggleFavorite = (movieId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movieId)) {
        // If already favorited, remove it
        return prevFavorites.filter((id) => id !== movieId);
      } else {
        // Otherwise, append it to the tracking collection
        return [...prevFavorites, movieId];
      }
    });
  };

  // Live filter computation
  const filteredMovies = LOCAL_MOVIE_DATA.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  // Derive the actual movie objects that have been favorited
  const favoriteMoviesList = LOCAL_MOVIE_DATA.filter((movie) =>
    favorites.includes(movie.id)
  );

  const isDark = theme === 'dark';
  const cardBg = isDark ? '#2d3748' : '#ffffff';
  const inputBg = isDark ? '#4a5568' : '#f7fafc';
  const inputColor = isDark ? '#ffffff' : '#1a202c';
  const borderColor = isDark ? '#4a5568' : '#e2e8f0';
  const itemBg = isDark ? '#1a202c' : '#f8fafc';

  const explorerStyle = {
    backgroundColor: cardBg,
    color: isDark ? '#ffffff' : '#1a202c',
    borderRadius: '16px',
    boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.08)',
    width: '750px',
    padding: '2rem',
    marginTop: '2rem',
    fontFamily: 'system-ui, sans-serif',
    transition: 'all 0.3s ease',
    marginBottom: '4rem'
  };

  const movieCardStyle = {
    backgroundColor: itemBg,
    border: `1px solid ${borderColor}`,
    borderRadius: '12px',
    padding: '1rem',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const tagStyle = {
    fontSize: '0.75rem',
    backgroundColor: isDark ? '#4a5568' : '#e2e8f0',
    color: isDark ? '#cbd5e0' : '#4a5568',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    marginRight: '0.4rem'
  };

  return (
    <div style={explorerStyle}>
      {/* Header Info */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ margin: 0 }}>Movie Explorer</h2>
        <p style={{ margin: '0.2rem 0 0', color: isDark ? '#a0aec0' : '#718096', fontSize: '0.9rem' }}>
          Search, filter, and favorite movies. Designed for a single-page React component structure.
        </p>
      </div>

      {/* Input row box */}
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder='Search movies (e.g. "Interstellar", "Star")'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            flex: 1, padding: '0.6rem 1rem', borderRadius: '8px',
            border: `1px solid ${borderColor}`, backgroundColor: inputBg, color: inputColor, fontSize: '0.95rem', outline: 'none'
          }}
        />
        <button onClick={handleReset} style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '0.6rem 1.2rem', fontWeight: '600', cursor: 'pointer' }}>
          🔄 Reset
        </button>
      </div>

      {/* Helper State Labels */}
      <div style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: isDark ? '#cbd5e0' : '#4a5568' }}>
        {searchQuery ? `Results for "${searchQuery}"` : '✨ Hint: Type "Star" or "Interstellar" to filter live data.'}
      </div>

      {/* Main App Workspace Layout Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', borderTop: `1px solid ${borderColor}`, paddingTop: '1.5rem' }}>

        {/* LEFT COLUMN: Matching Movies Result List */}
        <div>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem' }}>Matching Movies</h3>

          {searchQuery.trim() === '' ? (
            <p style={{ color: '#718096', fontStyle: 'italic', fontSize: '0.95rem' }}>
              Please type a query keyword in the search box above to display live filtered list matches.
            </p>
          ) : filteredMovies.length === 0 ? (
            <div style={{ padding: '2rem 1rem', textAlign: 'center', border: `2px dashed ${borderColor}`, borderRadius: '8px', color: '#a0aec0' }}>
              🔍 No matching movies found for "{searchQuery}".
            </div>
          ) : (
            filteredMovies.map((movie) => {
              const isFavorited = favorites.includes(movie.id);
              return (
                <div key={movie.id} style={movieCardStyle}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <strong style={{ fontSize: '1rem' }}>{movie.title}</strong>
                      <span style={{ fontSize: '0.8rem', color: '#718096' }}>{movie.year}</span>
                    </div>

                    <div style={{ margin: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.8rem', color: '#eab308', fontWeight: 'bold' }}>⭐ {movie.rating}</span>
                      <span style={{ fontSize: '0.8rem', color: '#718096' }}>· {movie.genre}</span>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '0.3rem' }}>
                      {movie.tags.map((tag, idx) => (
                        <span key={idx} style={tagStyle}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Toggle Favorite Action Button */}
                  <button
                    onClick={() => handleToggleFavorite(movie.id)}
                    style={{
                      backgroundColor: isFavorited ? '#ef4444' : 'transparent',
                      color: isFavorited ? '#ffffff' : '#ef4444',
                      border: '1px solid #ef4444',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {isFavorited ? '❤️ Favorited' : '🤍 Favorite'}
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* RIGHT COLUMN: Live Sync Favorites List Panel */}
        <div style={{ borderLeft: `1px solid ${borderColor}`, paddingLeft: '1.5rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem' }}>Favorite Movies</h3>

          {favoriteMoviesList.length === 0 ? (
            <p style={{ color: '#718096', fontStyle: 'italic', fontSize: '0.9rem', lineHeight: '1.4' }}>
              If no movies are favorited, show: "You haven't added any favorites yet."
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {favoriteMoviesList.map((favMovie) => (
                <div
                  key={favMovie.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: itemBg,
                    padding: '0.6rem 0.8rem',
                    borderRadius: '8px',
                    border: `1px solid ${borderColor}`
                  }}
                >
                  <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                    {favMovie.title} <span style={{ fontSize: '0.75rem', color: '#718096' }}>({favMovie.year})</span>
                  </span>

                  {/* Quick Remove cross icon inline button */}
                  <button
                    onClick={() => handleToggleFavorite(favMovie.id)}
                    style={{ background: 'none', border: 'none', color: '#a0aec0', cursor: 'pointer', fontSize: '0.9rem' }}
                    title="Remove from favorites"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default MovieExplorer;