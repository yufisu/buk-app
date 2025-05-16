import '../styles/StarRating.css';

function StarRating({ rating }) {
  // Yıldız ikonları için basit bir gösterim
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={
          index < fullStars 
            ? "star full" 
            : (index === fullStars && halfStar) 
              ? "star half" 
              : "star empty"
        }>★</span>
      ))}
    </div>
  );
}

export default StarRating;