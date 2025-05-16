import { useState } from 'react';
import BookCard from '../pages/BookCard.jsx';
import '../styles/BookSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function BookSection({ title, books, showUserInfo = false }) {
  return (
    <section className="book-section">
      <div className="section-header">
        <h2>{title}</h2>
        <span className="see-more">
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </div>
      
      <div className="books-container">
        {books.map((book) => (
          <BookCard 
            key={book.id}
            book={book}
            showUserInfo={showUserInfo}
          />
        ))}
      </div>
    </section>
  );
}

export default BookSection;