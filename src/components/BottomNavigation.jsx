import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSearch, faPlus, faBolt, faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/BottomNavigation.css';

function BottomNavigation() {
  return (
    <nav className="bottom-navigation">
      <div className="nav-item active">
        <FontAwesomeIcon icon={faBook} />
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="nav-item add-button">
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faBolt} />
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
}

export default BottomNavigation;