import { useState } from "react";

const StarSelector = ({ rating, onRate }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (
        <button
          key={star}
          className="btn"
          style={{ color: star <= rating ? "gold" : "gray", fontSize: "30px" }}
          onClick={() => onRate(star)}
        >
          {star <= rating ? "★" : "☆"}
        </button>
      ))}
    </div>
  );
};

const RatingSummary = ({ rating }) => {
  return (
    <p>
      {rating === 0
        ? "No rating yet"
        : `You rated this ${rating} out of 5 stars`}
    </p>
  );
};

const RatingApp = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="mx-auto col-7 my-3 p-4">
      <h2>Star Rating</h2>
      <StarSelector rating={rating} onRate={setRating} />
      <RatingSummary rating={rating} />
      <button className="btn btn-secondary" onClick={() => setRating(0)}>
        Reset
      </button>
    </div>
  );
};

export default RatingApp;
