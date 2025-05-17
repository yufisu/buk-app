import { useNavigate } from 'react-router-dom';
import '../styles/SearchResults.css';

function SearchResults({ results, onResultClick }) {
  const navigate = useNavigate();

  if (!results || results.length === 0) {
    return null;
  }

  const handleResultClick = (result) => {
    onResultClick(); // Close search bar
    navigate(`/book/${result.id}`);
  };

  return (
    <div className="search-results">
      {results.map(result => (
        <div 
          key={result.id} 
          className="search-result-item"
          onClick={() => handleResultClick(result)}
        >
          <div className="result-cover">
            <img src={result.coverUrl} alt={result.title} />
          </div>
          <div className="result-info">
            <h4>{result.title}</h4>
            <p>{result.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults; 