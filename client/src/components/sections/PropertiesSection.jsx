import { properties } from "../../data";
import PropertyCard from "../PropertyCard";
import AnimateOnScroll from "../common/AnimateOnScroll";

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-20 px-6 lg:px-20 bg-secondary">
      <AnimateOnScroll direction="up">
        <div className="text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark xl:text-5xl">
            Explore Our Listings
          </h2>
          <p className="mt-4 text-textLight xl:text-lg max-w-xl mx-auto">
            Browse our curated selection of properties across top locations.
            Something for every lifestyle and budget.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, index) => (
          <AnimateOnScroll
            key={property.id}
            direction="up"
            delay={index * 0.15}
            className="h-full"
          >
            <PropertyCard
              name={property.name}
              description={property.description}
              image={property.image}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              location={property.location}
              size={property.size}
              price={property.price}
            />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default PropertiesSection;
