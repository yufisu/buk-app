import { useParams } from 'react-router-dom';
import { books, userInteractions } from '../data/sampleData';
import Header from '../components/Header.jsx';
import Navigation from '../components/Navigation.jsx';
import '../styles/BookDetail.css';

const BookDetail = () => {
  const { bookId } = useParams();
  const book = books[bookId];

  // Kullanıcının bu kitapla ilgili okuma durumunu bul
  const userReading = userInteractions.readings.find(
    reading => reading.bookId === bookId
  );

  // Arkadaşların bu kitapla ilgili aktivitelerini bul
  const friendsActivity = userInteractions.friendsActivity.filter(
    activity => activity.bookId === bookId
  );

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
            <div className="book-actions">
              <select 
                value={userReading?.status || 'none'} 
                className="reading-status-select"
              >
                <option value="none">Okuma durumu seçin</option>
                <option value="want-to-read">Okumak İstiyorum</option>
                <option value="reading">Okuyorum</option>
                <option value="read">Okudum</option>
              </select>
              {userReading?.status === 'read' && (
                <div className="user-rating">
                  <span>Puanınız: {userReading.rating}/5</span>
                </div>
              )}
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
                  <div key={activity.userId} className="friend-review">
                    <div className="friend-info">
                      <img 
                        src={activity.avatarUrl} 
                        alt={activity.username} 
                        className="friend-avatar"
                      />
                      <span className="friend-name">{activity.username}</span>
                    </div>
                    <div className="friend-rating">
                      {activity.rating}/5
                    </div>
                    <div className="review-date">
                      {new Date(activity.date).toLocaleDateString('tr-TR')}
                    </div>
                  </div>
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