import { useParams, Link } from 'react-router-dom';
import { books, users, reviews } from '../data/sampleData';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import StarRating from './StarRating';
import anonAvatar from '../assets/anon.jpg';
import '../styles/ReviewPage.css';

function ReviewPage() {
  const { bookId, userId } = useParams();
  
  // İlgili review'i bul
  const review = Object.values(reviews).find(
    r => r.bookId === bookId && r.userId === userId
  );
  
  // Kitap ve kullanıcı bilgilerini al
  const book = books[bookId];
  const user = users[userId];

  if (!book || !review || !user) {
    return (
      <div>
        <Header />
        <Navigation />
        <div className="review-not-found">Review not found.</div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Navigation />
      <div className="review-page-container">
        <div className="review-header">
          <div className="reviewer-info">
            <img 
              src={user.avatarUrl || anonAvatar} 
              alt={user.username} 
              className="reviewer-avatar"
            />
            <div className="reviewer-details">
              <h2>Review by <Link to={`/profile/${user.id}`} className="reviewer-link">{user.username}</Link></h2>
              <div className="review-metadata">
                <StarRating rating={review.rating} style={{ fontSize: '1.2rem' }} />
                <span className="review-date">
                  {new Date(review.dateAdded).toLocaleDateString('tr-TR')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="review-content">
          <div className="book-preview">
            <Link to={`/book/${book.id}`}>
              <img src={book.coverUrl} alt={book.title} className="book-cover" />
            </Link>
            <div className="book-info">
              <h1>{book.title}</h1>
              <h3>{book.author}</h3>
              <div className="book-metadata">
                <span>{book.publishYear}</span>
                <span>•</span>
                <span>{book.pageCount} pages</span>
              </div>
              <div className="book-genres">
                {book.genres.map(genre => (
                  <span key={genre} className="genre-tag">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="review-text">
            <p>{review.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage; 