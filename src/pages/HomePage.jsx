import { useState } from 'react';
import Header from '../components/Header.jsx';
import Navigation from '../components/Navigation.jsx';
import BookSection from '../components/BookSection.jsx';
import '../styles/HomePage.css';

// Örnek kitap verileri
import { getPopularBooks, getFriendsBooks, getPopularWithFriends } from '../data/sampleData';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Navigation />
      
      <main className="main-content">
        <BookSection title="Popular this week" books={getPopularBooks()} />
        <BookSection title="New from friends" books={getFriendsBooks()} showUserInfo={true} />
        <BookSection title="Popular with friends" books={getPopularWithFriends()} />
      </main>
      

    </div>
  );
}

export default HomePage;