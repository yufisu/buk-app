import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import BookDetail from './pages/BookDetail.jsx';
import ReviewPage from './pages/ReviewPage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import UserReviewsPage from './pages/UserReviewsPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/profile/:userId/reviews" element={<UserReviewsPage />} />
        <Route path="/book/:bookId" element={<BookDetail />} />
        <Route path="/review/:bookId/:userId" element={<ReviewPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;