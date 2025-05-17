import { useParams, Link } from 'react-router-dom';
import { 
  books, 
  getCurrentUser, 
  updateBookStatus, 
  updateBookRating,
  toggleBookLike, 
  getFriendsRecentActivity 
} from '../data/sampleData';
import Header from '../components/Header.jsx';
import Navigation from '../components/Navigation.jsx';
import StarRating from './StarRating.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBook, 
  faHeart, 
  faBookmark, 
  faShare,
  faList,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import '../styles/BookDetail.css';

const BookDetail = () => {
  const { bookId } = useParams();
  const book = books[bookId];
  const currentUser = getCurrentUser();
  const userBook = currentUser.books[bookId] || {};
  
  // Local state for user interactions
  const [status, setStatus] = useState(userBook.status || null);
  const [liked, setLiked] = useState(userBook.liked || false);
  const [rating, setRating] = useState(userBook.rating || 0);

  // Get friends' activity for this book
  const friendsActivity = getFriendsRecentActivity()
    .filter(activity => activity.book.id === bookId);

  // Handle status changes
  const handleStatusChange = (newStatus) => {
    // Special handling for 'want-to-read' status
    if (newStatus === 'want-to-read') {
      if (status === 'both') {
        // If both statuses are active, remove only want-to-read (keep read)
        updateBookStatus(currentUser.id, bookId, 'read');
        setStatus('read');
      } else if (status === 'want-to-read') {
        // If only want-to-read, remove it
        updateBookStatus(currentUser.id, bookId, null);
        setStatus(null);
      } else if (status === 'read') {
        // If book is read, add want-to-read status (becomes 'both')
        updateBookStatus(currentUser.id, bookId, 'both');
        setStatus('both');
      } else {
        // Add want-to-read status
        updateBookStatus(currentUser.id, bookId, 'want-to-read');
        setStatus('want-to-read');
      }
      return;
    }

    // For 'read' status
    if (newStatus === 'read') {
      if (status === 'read') {
        // If removing read status
        updateBookStatus(currentUser.id, bookId, status === 'want-to-read' ? 'want-to-read' : null);
        setStatus(status === 'want-to-read' ? 'want-to-read' : null);
        // Also clear rating
        updateBookRating(currentUser.id, bookId, 0);
        setRating(0);
      } else {
        // Adding read status - remove want-to-read if it exists
        updateBookStatus(currentUser.id, bookId, 'read');
        setStatus('read');
      }
    }
  };

  // Handle like toggle
  const handleLikeToggle = () => {
    toggleBookLike(currentUser.id, bookId);
    setLiked(!liked);
  };

  // Handle rating change
  const handleRatingChange = (newRating) => {
    updateBookRating(currentUser.id, bookId, newRating);
    setRating(newRating);
    // Eğer yeni bir puan veriliyorsa (0'dan farklı), status'ü de güncelle
    if (newRating > 0) {
      setStatus('read');
    }
  };

  if (!book) {
    return (
      <div>
        <Header />
        <Navigation />
        <div className="book-not-found">Kitap bulunamadı.</div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Navigation />
      <div className="book-detail-container">
        <div className="book-detail-header">
          <div className="book-cover">
            <img src={book.coverUrl} alt={book.title} />
          </div>
          <div className="book-info">
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <div className="book-metadata">
              <span>{book.publishYear}</span>
              <span>•</span>
              <span>{book.pageCount} sayfa</span>
              <span>•</span>
              <span>ISBN: {book.isbn}</span>
            </div>
            <div className="book-genres">
              {book.genres.map(genre => (
                <span key={genre} className="genre-tag">
                  {genre}
                </span>
              ))}
            </div>
          </div>
          <div className="book-actions-card">
            <div className="actions-top">
              <div className="rating-section">
                <StarRating 
                  rating={rating} 
                  isInteractive={true} 
                  onChange={handleRatingChange}
                  style={{ fontSize: '2rem' }}
                />
              </div>
              <div className="primary-actions">
                <button 
                  className={`action-button ${status === 'read' || status === 'both' ? 'active' : ''}`}
                  onClick={() => handleStatusChange('read')}
                >
                  <FontAwesomeIcon icon={faBook} />
                  <span>Read</span>
                </button>
                <button 
                  className={`action-button ${liked ? 'active' : ''}`}
                  onClick={handleLikeToggle}
                >
                  <FontAwesomeIcon icon={faHeart} />
                  <span>Like</span>
                </button>
                <button 
                  className={`action-button ${status === 'want-to-read' || status === 'both' ? 'active' : ''}`}
                  onClick={() => handleStatusChange('want-to-read')}
                >
                  <FontAwesomeIcon icon={faBookmark} />
                  <span>Want to Read</span>
                </button>
              </div>
            </div>
            <div className="actions-bottom">
              <button className="secondary-action">
                <FontAwesomeIcon icon={faShare} />
                <span>Share</span>
              </button>
              <button className="secondary-action">
                <FontAwesomeIcon icon={faList} />
                <span>Add to list</span>
              </button>
              <button className="secondary-action">
                <FontAwesomeIcon icon={faComment} />
                <span>Review</span>
              </button>
            </div>
          </div>
        </div>

        <div className="book-detail-content">
          <section className="book-description">
            <h3>Kitap Hakkında</h3>
            <p>{book.description}</p>
          </section>

          {friendsActivity.length > 0 && (
            <section className="friends-activity">
              <h3>Arkadaşlarının Yorumları</h3>
              <div className="friends-reviews">
                {friendsActivity.map(activity => (
                  <Link 
                    to={`/review/${activity.book.id}/${activity.user.id}`}
                    key={activity.user.id} 
                    className="friend-review"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="friend-info">
                      <img 
                        src={activity.user.avatarUrl} 
                        alt={activity.user.username} 
                        className="friend-avatar"
                      />
                      <span className="friend-name">{activity.user.username}</span>
                    </div>
                    <div className="friend-rating">
                      <StarRating 
                        rating={activity.rating} 
                        style={{ fontSize: '1.25rem' }}
                      />
                    </div>
                    <div className="review-date">
                      {new Date(activity.dateRead || activity.dateAdded).toLocaleDateString('tr-TR')}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail; 