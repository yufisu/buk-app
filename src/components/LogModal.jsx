import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { books } from '../data/sampleData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SearchResults from './SearchResults';
import '../styles/LogModal.css';

function LogModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [isOpen]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Kitapları ara
    const results = Object.values(books).filter(book => {
      const searchLower = query.toLowerCase();
      return (
        book.title.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower)
      );
    });

    setSearchResults(results);
  };

  const handleResultClick = (bookId) => {
    onClose();
    navigate(`/book/${bookId}`);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="log-modal" onClick={e => e.stopPropagation()}>
        <button 
          className="close-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="modal-content-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for a book..."
              value={searchQuery}
              onChange={handleSearchChange}
              autoFocus
            />
            {searchResults.length > 0 && (
              <SearchResults 
                results={searchResults} 
                onResultClick={onClose}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogModal; 