import aboutImg1 from "../../assets/images/property1.jpg";
import aboutImg2 from "../../assets/images/property7.jpg";
import aboutImg3 from "../../assets/images/property6.jpg";
import AnimateOnScroll from "../common/AnimateOnScroll";
import { aboutPoints } from "../../data";
import { FaCheck } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-20 bg-primary">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Left Content */}
        <AnimateOnScroll direction="left" className="w-full lg:w-1/2">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm">
            About Us
          </p>
          <h2 className="font-heading mt-3 text-2xl md:text-3xl font-bold text-dark xl:text-5xl leading-tight">
            We Are Ready To Make Your{" "}
            <span className="text-accent">Dream Come True</span>
          </h2>
          <p className="mt-6 leading-relaxed xl:text-base font-medium text-sm">
            At Novo Estates we believe every person deserves a home that fits
            their life perfectly. We combine local expertise with a personal
            touch to make your property journey smooth and rewarding.
          </p>

          {/* Points */}
          <ul className="mt-6 flex flex-col gap-3">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white text-xs">
                  <FaCheck />
                </span>
                <p className="text-textLight text-sm xl:text-base">{point}</p>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>

        {/* Right Image Collage */}
        <AnimateOnScroll direction="right" className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={aboutImg1}
              alt="property"
              className="w-full h-48 object-cover rounded-xl"
              
            />
            <img
              src={aboutImg2}
              alt="property"
              className="w-full h-48 object-cover rounded-xl mt-8"
              
            />
            <img
              src={aboutImg3}
              alt="property"
              className="w-full h-48 object-cover rounded-xl col-span-2"
              
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;
