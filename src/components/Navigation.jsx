import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import LogModal from './LogModal';
import '../styles/Navigation.css';

function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleSearch = () => {
    if (isSearchOpen) {
      setSearchQuery(''); // Clear search query when closing
    }
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <nav className="main-navigation">
        <ul>
          <li>
            <Link to="/" className="logo-text">BUK</Link>
          </li>
          <div className="menu-items">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/" className="nav-link">
                <span>Home</span>
              </Link>
            </li>
            <li className={location.pathname === '/reviews' ? 'active' : ''}>
              <Link to="/reviews" className="nav-link">
                <span>Reviews</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link">
                <span>Lists</span>
              </Link>
            </li>
            <li className={location.pathname === '/profile' ? 'active' : ''}>
              <Link to="/profile" className="nav-link">
                <span className="profile-name">yufisuke</span>
              </Link>
            </li>
          </div>
          <div className="right-items">
            <li>
              <form onSubmit={handleSearchSubmit} className={`search-form ${isSearchOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className={`search-button ${isSearchOpen ? 'is-open' : ''}`}
                  onClick={toggleSearch}
                >
                  <FontAwesomeIcon icon={isSearchOpen ? faTimes : faSearch} />
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
              <button onClick={() => setIsLogModalOpen(true)}>LOG</button>
            </li>
          </div>
        </ul>
      </nav>
      <LogModal 
        isOpen={isLogModalOpen}
        onClose={() => setIsLogModalOpen(false)}
      />
    </>
  );
}

export default Navigation;