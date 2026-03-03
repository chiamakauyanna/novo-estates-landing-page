import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-accent text-lg">
          <FaStar />
        </span>
      ))}
    </div>
  );
};

export default StarRating;
