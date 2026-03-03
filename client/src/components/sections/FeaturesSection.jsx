import { featureCards } from "../../data";
import AnimateOnScroll from "../common/AnimateOnScroll";
import FeatureCard from "../FeatureCards";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 lg:px-30 bg-primary">
      <AnimateOnScroll direction="up">
        <div className="text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark xl:text-5xl">
            Why Choose us?
          </h2>
          <p className="mt-4 text-textLight xl:text-lg max-w-xl mx-auto">
            Finding your perfect home should be exciting, not stressful. We make
            sure it is.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featureCards.map((feature, index) => (
          <AnimateOnScroll key={feature.id} direction="up" delay={index * 0.15}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
