import { useState } from 'react';
import Header from '../components/Header.jsx';
import Navigation from '../components/Navigation.jsx';
import BookSection from '../components/BookSection.jsx';
import BottomNavigation from '../components/BottomNavigation.jsx';
import '../styles/HomePage.css';

// Örnek kitap verileri
import { popularBooks, friendsBooks, popularWithFriends } from '../data/sampleData';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Navigation />
      
      <main className="main-content">
        <BookSection title="Popular this week" books={popularBooks} />
        <BookSection title="New from friends" books={friendsBooks} showUserInfo={true} />
        <BookSection title="Popular with friends" books={popularWithFriends} />
      </main>
      
      <BottomNavigation />
    </div>
  );
}

export default HomePage;