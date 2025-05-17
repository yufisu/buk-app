import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { books, users, reviews, getCurrentUser } from '../data/sampleData';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import StarRating from './StarRating';
import anonAvatar from '../assets/anon.jpg';
import '../styles/UserReviewsPage.css';

function UserReviewsPage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  
  // Get the user data
  const user = userId === 'me' ? currentUser : users[userId];

  if (!user) {
    return (
      <div>
        <Header />
        <Navigation />
        <div className="reviews-not-found">User not found.</div>
      </div>
    );
  }

  // Get user's reviews
  const userReviews = Object.values(reviews)
    .filter(review => review.userId === (userId === 'me' ? currentUser.id : userId))
    .map(review => ({
      ...review,
      book: books[review.bookId],
      user: users[review.userId]
    }))
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  return (
    <div>
      <Header />
      <Navigation />
      <div className="reviews-page-container">
        <h1 className="reviews-page-title">
          {userId === 'me' ? 'My Reviews' : `${user.username}'s Reviews`}
        </h1>
        <div className="reviews-grid">
          {userReviews.map(review => (
            <Link 
              to={`/review/${review.bookId}/${review.userId}`}
              key={review.id} 
              className="review-card"
              style={{ textDecoration: 'none' }}
            >
              <div className="review-book-cover">
                <img src={review.book.coverUrl} alt={review.book.title} />
              </div>
              <div className="review-content">
                <h2 className="review-book-title">{review.book.title}</h2>
                <h3 className="review-book-author">{review.book.author}</h3>
                <div className="review-rating">
                  <StarRating rating={review.rating} style={{ fontSize: '1.2rem' }} />
                </div>
                <p className="review-text">
                  {review.text.length > 200 ? `${review.text.substring(0, 200)}...` : review.text}
                </p>
                <div className="review-date">
                  {new Date(review.dateAdded).toLocaleDateString('tr-TR')}
                </div>
              </div>
            </Link>
          ))}
          {userReviews.length === 0 && (
            <div className="no-reviews">
              {userId === 'me' ? "You haven't written any reviews yet." : "This user hasn't written any reviews yet."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserReviewsPage; 