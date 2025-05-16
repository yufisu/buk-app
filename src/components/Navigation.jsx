import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navigation.css';

function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Arama işlemleri burada yapılacak
    console.log('Search query:', searchQuery);
  };

  return (
    <nav className="main-navigation">
      <Link to="/" className="logo-text">BUK</Link>
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>Reviews</li>
        <li>Lists</li>
        <li>Journal</li>
        <li className={location.pathname === '/profile' ? 'active' : ''}>
          <Link to="/profile" className="profile-link">
            yufisuke
          </Link>
        </li>
        <li className="search-container">
          <form onSubmit={handleSearchSubmit} className={`search-form ${isSearchOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="search-button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </li>
        <li>
          <button>LOG</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;