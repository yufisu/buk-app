import { useSearchParams } from 'react-router-dom';
import { books, users } from '../data/sampleData';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import anonAvatar from '../assets/anon.jpg';
import '../styles/SearchPage.css';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  // Search in books
  const bookResults = Object.values(books)
    .filter(book => 
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genres.some(genre => genre.toLowerCase().includes(query))
    )
    .sort((a, b) => {
      // Exact matches first
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      if (aTitle === query) return -1;
      if (bTitle === query) return 1;
      // Then starts with
      if (aTitle.startsWith(query)) return -1;
      if (bTitle.startsWith(query)) return 1;
      // Then contains
      return 0;
    });

  // Search in users
  const userResults = Object.values(users)
    .filter(user => 
      user.username.toLowerCase().includes(query)
    )
    .sort((a, b) => {
      const aUsername = a.username.toLowerCase();
      const bUsername = b.username.toLowerCase();
      if (aUsername === query) return -1;
      if (bUsername === query) return 1;
      if (aUsername.startsWith(query)) return -1;
      if (bUsername.startsWith(query)) return 1;
      return 0;
    });

  return (
    <div className="search-page">
      <Header />
      <Navigation />
      <div className="search-results-container">
        <h1>Search Results for "{query}"</h1>
        
        {/* User Results */}
        {userResults.length > 0 && (
          <section className="search-section">
            <h2>Users</h2>
            <div className="user-results">
              {userResults.map(user => (
                <Link to={`/profile/${user.id}`} key={user.id} className="user-result-card">
                  <img 
                    src={user.avatarUrl || anonAvatar} 
                    alt={user.username} 
                    className="user-avatar"
                  />
                  <span className="username">{user.username}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Book Results */}
        {bookResults.length > 0 && (
          <section className="search-section">
            <h2>Books</h2>
            <div className="book-results">
              {bookResults.map(book => (
                <Link to={`/book/${book.id}`} key={book.id} className="book-result-card">
                  <img 
                    src={book.coverUrl} 
                    alt={book.title} 
                    className="book-cover"
                  />
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <p className="author">{book.author}</p>
                    <div className="book-metadata">
                      <span>{book.publishYear}</span>
                      <span>•</span>
                      <span>{book.pageCount} pages</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {userResults.length === 0 && bookResults.length === 0 && (
          <div className="no-results">
            No results found for "{query}"
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage; 