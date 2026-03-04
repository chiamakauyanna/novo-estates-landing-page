import { useState } from "react";
import { FaMapMarkerAlt, FaHome } from "react-icons/fa";
import heroImg from "../../assets/images/property2.jpg";
import Button from "../common/Button";
import { stats } from "../../data";
import AnimateOnScroll from "../common/AnimateOnScroll";

const tabs = ["Buy", "Sell", "Rent"];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Buy");

  return (
    <section
      id="home"
      className="px-6 md:px-15 lg:px-20 pt-40 xl:pt-20 bg-secondary"
    >
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Left Content */}
        <AnimateOnScroll direction="left" className="w-full lg:w-1/2">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark xl:text-6xl leading-tight max-w-lg lg:max-w-none">
            Find A Home That <span className="text-accent">Feels Like You</span>
          </h1>
          <p className="mt-2 text-textLight xl:text-lg leading-relaxed  max-w-lg lg:max-w-none">
            We make finding your perfect property simple, stress-free and
            tailored to you. Let us find your match.
          </p>
          <p className="mt-2 font-semibold text-dark text-sm">
            Let us discuss soon.
          </p>

          {/* Search Card */}
          <div className="mt-8 bg-gray-100 rounded-md border border-border shadow-xl">
            {/* Tabs */}
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-6 text-sm font-semibold transition-all duration-300 uppercase ${
                    activeTab === tab
                      ? "bg-accent/10 text-accent"
                      : "text-textLight hover:text-dark"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Inputs row */}
            <div className="flex flex-col md:flex-row items-center bg-primary p-3 gap-2">
              <div className="flex items-center gap-2 bg-primary pl-2 py-2 border border-border w-full min-w-0">
                <FaMapMarkerAlt size={20} className="text-textLight shrink-0" />
                <div className="flex flex-col min-w-0 w-full">
                  <span className="text-textLight text-sm">Location</span>
                  <input
                    type="text"
                    placeholder="e.g. Lagos, Abuja"
                    className="bg-transparent outline-none text-dark text-xs placeholder:text-textLight w-full truncate"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 bg-primary pl-2 py-2 border border-border w-full min-w-0">
                <FaHome size={20} className="text-textLight shrink-0" />
                <div className="flex flex-col min-w-0 w-full">
                  <span className="text-textLight text-sm">Style</span>
                  <input
                    type="text"
                    placeholder="e.g. Modern, Minimalist"
                    className="outline-none text-dark text-xs font-semibold w-full truncate"
                  />
                </div>
              </div>

              <Button
                text="Search"
                className="text-white py-3.5 w-full md:w-auto md:shrink-0"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 flex lg:-mx-20 bg-gray-100 -mx-6 md:-mx-15 items-center">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`flex-1 py-6 px-4 rounded text-center ${
                  index === 1 ? "bg-accent/10" : ""
                }`}
              >
                <h3 className="font-heading text-2xl font-bold text-accent">
                  {stat.value}
                </h3>
                <p className="font-semibold text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Right Image — arch shape */}
        <AnimateOnScroll direction="right" className="w-full lg:w-1/2">
          <div className="relative w-full bg-primary p-2 md:p-4 rounded-t-full h-full">
            <img
              src={heroImg}
              alt="hero property"
              className="w-full h-full object-cover rounded-t-full overflow-hidden"
              loading="lazy"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HeroSection;
