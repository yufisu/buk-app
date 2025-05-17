import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Navigation from '../components/Navigation.jsx';
import BookSection from '../components/BookSection.jsx';
import { books, users, getCurrentUser } from '../data/sampleData';
import anonAvatar from '../assets/anon.jpg';
import meAvatar from '../assets/me.JPG';
import '../styles/ProfilePage.css';

function ProfilePage() {
  const { userId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const activeSection = searchParams.get('section') || 'books';
  
  // Get the user data
  const user = userId 
    ? users[userId]
    : currentUser;

  if (userId && !user) {
    return (
      <div className="profile-page">
        <Header />
        <Navigation />
        <div className="profile-not-found">User not found.</div>
      </div>
    );
  }

  // Get books based on active section
  const getFilteredBooks = () => {
    return Object.entries(user.books)
      .filter(([_, data]) => {
        if (activeSection === 'books') return data.status === 'read' || data.status === 'both';
        if (activeSection === 'want-to-read') return data.status === 'want-to-read' || data.status === 'both';
        if (activeSection === 'reviews') return data.rating;
        return false;
      })
      .map(([bookId, data]) => ({
        ...books[bookId],
        ...data
      }))
      .sort((a, b) => new Date(b.dateRead || b.dateAdded) - new Date(a.dateRead || a.dateAdded));
  };

  const stats = {
    books: Object.values(user.books).filter(book => book.status === 'read' || book.status === 'both').length,
    reviews: Object.values(user.books).filter(book => book.rating).length,
    'want-to-read': Object.values(user.books).filter(book => book.status === 'want-to-read' || book.status === 'both').length
  };

  const handleSectionChange = (section) => {
    if (section === 'reviews') {
      navigate(`/profile/${userId || 'me'}/reviews`);
    } else {
      setSearchParams({ section });
    }
  };

  const getSectionTitle = () => {
    switch (activeSection) {
      case 'books':
        return 'Read Books';
      case 'want-to-read':
        return 'Want to Read';
      case 'reviews':
        return 'Reviews';
      default:
        return 'Books';
    }
  };

  const filteredBooks = getFilteredBooks();

  return (
    <div className="profile-page">
      <Header />
      <Navigation />
      
      <main className="main-content">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={user.avatarUrl || anonAvatar} alt={`${user.username}'s profile`} />
          </div>
          <div className="profile-info">
            <h1>{user.username}</h1>
            <p className="profile-bio">{user.bio || 'No bio available'}</p>
            <p className="member-since">Member since {user.memberSince || '2024'}</p>
          </div>
        </div>

        <div className="profile-stats">
          <button 
            className={`stat-item ${activeSection === 'books' ? 'active' : ''}`}
            onClick={() => handleSectionChange('books')}
          >
            <span className="stat-number">{stats.books}</span>
            <span className="stat-label">Books</span>
          </button>
          <button 
            className={`stat-item ${activeSection === 'reviews' ? 'active' : ''}`}
            onClick={() => handleSectionChange('reviews')}
          >
            <span className="stat-number">{stats.reviews}</span>
            <span className="stat-label">Reviews</span>
          </button>
          <button 
            className={`stat-item ${activeSection === 'want-to-read' ? 'active' : ''}`}
            onClick={() => handleSectionChange('want-to-read')}
          >
            <span className="stat-number">{stats['want-to-read']}</span>
            <span className="stat-label">Want to Read</span>
          </button>
        </div>

        <div className="profile-content">
          <h2>{getSectionTitle()}</h2>
          <div className="activity-feed">
            {filteredBooks.length > 0 ? (
              <BookSection 
                title="" 
                books={filteredBooks}
                showUserInfo={activeSection === 'reviews'}
              />
            ) : (
              <div className="no-content">
                No {getSectionTitle().toLowerCase()} yet
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage; 