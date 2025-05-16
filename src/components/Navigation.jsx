import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="main-navigation">
      <ul>
        <li className="active">Books</li>
        <li>Reviews</li>
        <li>Lists</li>
        <li>Journal</li>
      </ul>
    </nav>
  );
}

export default Navigation;