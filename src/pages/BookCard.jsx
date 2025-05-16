import { useNavigate } from 'react-router-dom';
import '../styles/BookCard.css';
import UserInfo from './UserInfo.jsx';

function BookCard({ book, showUserInfo = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <div className="book-card" onClick={handleClick}>
      <div className="book-cover">
        <div className="book-image-container">
          <img src={book.coverUrl} alt={book.title} />
        </div>
      </div>
      
      {showUserInfo && (
        <UserInfo user={book.user} rating={book.userRating} />
      )}
    </div>
  );
}

export default BookCard;