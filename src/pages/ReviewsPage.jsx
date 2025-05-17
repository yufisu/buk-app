import { useNavigate, Link } from 'react-router-dom';
import { books, users, reviews } from '../data/sampleData';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import StarRating from './StarRating';
import anonAvatar from '../assets/anon.jpg';
import '../styles/ReviewsPage.css';

function ReviewCard({ review, book, user }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/review/${book.id}/${user.id}`);
  };

  const handleUserClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="review-card" onClick={handleClick}>
      <div className="review-card-cover">
        <img src={book.coverUrl} alt={book.title} />
      </div>
      <div className="review-card-content">
        <div className="review-card-header">
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
        </div>
        <p className="review-text-preview">
          {review.text}
        </p>
        <div className="review-card-footer">
          <div className="reviewer-info">
            <img 
              src={user.avatarUrl || anonAvatar} 
              alt={user.username} 
              className="reviewer-avatar"
            />
            <Link 
              to={`/profile/${user.id}`} 
              className="reviewer-name"
              onClick={handleUserClick}
            >
              {user.username}
            </Link>
          </div>
          <div className="review-rating">
            <StarRating rating={review.rating} style={{ fontSize: '1.2rem' }} />
            <span className="review-date">
              {new Date(review.dateAdded).toLocaleDateString('tr-TR')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewsPage() {
  // reviews objesinden text'i olan review'leri al ve kullanıcı/kitap bilgileriyle birleştir
  const reviewsList = Object.values(reviews)
    .filter(review => review.text) // Sadece text'i olan review'leri al
    .map(review => ({
      ...review,
      user: users[review.userId],
      book: books[review.bookId]
    }))
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  return (
    <div className="reviews-page">
      <Header />
      <Navigation />
      <main className="reviews-content">
        <h1>Recent Reviews</h1>
        <div className="reviews-grid">
          {reviewsList.map(review => (
            <ReviewCard 
              key={review.id}
              review={review}
              book={review.book}
              user={review.user}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ReviewsPage; 