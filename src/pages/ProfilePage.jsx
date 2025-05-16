import Header from '../components/Header.jsx';
import Navigation from '../components/Navigation.jsx';
import BookSection from '../components/BookSection.jsx';
import profileImage from '../assets/me.JPG';
import { getRecentBooks, userInteractions } from '../data/sampleData.jsx';
import '../styles/ProfilePage.css';

function ProfilePage() {
  // Kullanıcı istatistiklerini hesapla
  const stats = {
    books: userInteractions.readings.length,
    reviews: userInteractions.readings.filter(r => r.status === 'read').length,
    lists: 2 // Şimdilik sabit
  };

  return (
    <div className="profile-page">
      <Header />
      <Navigation />
      
      <main className="main-content">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="profile-info">
            <h1>yufisuke</h1>
            <p className="member-since">Member since 2024</p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-number">{stats.books}</span>
            <span className="stat-label">Books</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.reviews}</span>
            <span className="stat-label">Reviews</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.lists}</span>
            <span className="stat-label">Lists</span>
          </div>
        </div>

        <div className="profile-content">
          <h2>Recent Activity</h2>
          <div className="activity-feed">
            <BookSection 
              title="" 
              books={getRecentBooks()}
              showUserInfo={false}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage; 