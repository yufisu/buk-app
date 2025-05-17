import { useNavigate } from 'react-router-dom';
import '../styles/BookCard.css';
import UserInfo from './UserInfo.jsx';

function BookCard({ book, showUserInfo = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (showUserInfo && book.user) {
      // Review sayfasına yönlendir
      navigate(`/review/${book.bookId}/${book.userId}`);
    } else {
      // Kitap detay sayfasına yönlendir
      navigate(`/book/${book.bookId || book.id}`);
    }
  };

  return (
    <div className="book-card-container" onClick={handleClick}>
      <div className="book-card-cover">
        <div className="book-card-image-container">
          <img src={book.book ? book.book.coverUrl : book.coverUrl} alt={book.book ? book.book.title : book.title} />
        </div>
        {showUserInfo && (
          <>
            <UserInfo user={book.user} rating={book.rating} />
            {book.text && (
              <div className="book-card-review-preview">
                <p>{book.text.length > 60 ? `${book.text.substring(0, 60)}...` : book.text}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default BookCard;