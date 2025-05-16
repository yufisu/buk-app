import '../styles/UserInfo.css';
import StarRating from './StarRating.jsx';

function UserInfo({ user, rating }) {
  return (
    <div className="user-info">
      <div className="user-avatar">
        <img src={user.avatarUrl} alt={user.username} />
      </div>
      <div className="user-details">
        <span className="username">{user.username}</span>
        <StarRating rating={rating} />
      </div>
    </div>
  );
}

export default UserInfo;