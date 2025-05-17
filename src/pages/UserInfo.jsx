import '../styles/UserInfo.css';
import StarRating from './StarRating.jsx';
import anonAvatar from '../assets/anon.jpg';

function UserInfo({ user, rating }) {
  return (
    <div className="user-info">
      <div className="user-top">
        <div className="user-avatar">
          <img 
            src={user.avatarUrl || anonAvatar} 
            alt={user.username}
          />
        </div>
        <span className="username">{user.username}</span>
      </div>
      <StarRating rating={rating} style={{ fontSize: '1rem' }} />
    </div>
  );
}

export default UserInfo;