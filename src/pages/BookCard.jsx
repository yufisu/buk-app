import '../styles/BookCard.css';
import UserInfo from './UserInfo.jsx';

function BookCard({ book, showUserInfo = false }) {
  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={book.coverUrl} alt={book.title} />
      </div>
      
      {showUserInfo && (
        <UserInfo user={book.user} rating={book.userRating} />
      )}
    </div>
  );
}

export default BookCard;