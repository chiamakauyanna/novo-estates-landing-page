import { FaBed, FaBath, FaMapMarkerAlt } from "react-icons/fa";
import Button from "./common/Button";
import { FaRulerCombined } from "react-icons/fa";

const PropertyCard = ({
  name,
  description,
  image,
  bedrooms,
  bathrooms,
  location,
  price,
  size,
}) => {
  return (
    <div className="bg-primary rounded overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group p-4 h-full">
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 rounded"
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="py-6">
        <h3 className="font-heading font-bold text-dark text-lg">{name}</h3>
        <p className="text-textLight text-sm mt-2 leading-relaxed font-medium">
          {description}
        </p>

        {/* Icons row */}
        <div className="mt-4 grid grid-cols-2 items-center gap-4 text-textLight text-sm">
          <div className="flex items-center gap-4">
            <FaBed className="text-textLight size-4" />
            <span>{bedrooms} Rooms</span>
          </div>
          <div className="flex items-center gap-4">
            <FaBath className="text-textLight size-4" />
            <span>{bathrooms} Bathrooms</span>
          </div>
          <div className="flex items-center gap-4">
            <FaRulerCombined className="text-textLight size-4" />
            <span>{size} Size</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-textLight size-4" />
            <span>{location}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="mt-6 flex items-center justify-between">
          <h4 className="font-heading font-bold text-dark text-xl">₦{price}</h4>
          <Button text="See More" className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
