import AnimateOnScroll from "../common/AnimateOnScroll";
import Button from "../common/Button";
import InputField from "../common/InputField";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-20 bg-primary">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Left Content */}
        <AnimateOnScroll direction="left" className="w-full lg:w-1/2">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm">
            Contact Us
          </p>
          <h2 className="font-heading mt-3 text-2xl md:text-3xl font-bold text-dark xl:text-5xl leading-tight">
            Let Us Help You Find <span className="text-accent">Your Home</span>
          </h2>
          <p className="mt-6 text-textLight leading-relaxed xl:text-lg text-sm font-medium">
            Have a question or ready to start your property search? Reach out to
            us and one of our agents will get back to you shortly.
          </p>

          {/* Contact Details */}
          <div className="mt-10 flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <FaMapMarkerAlt />
              </div>
              <p className="text-textLight text-sm xl:text-base">
                14 Admiralty Way, Lekki Phase 1, Lagos
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <FaPhoneAlt />
              </div>
              <p className="text-textLight text-sm xl:text-base">
                +234 801 234 5678
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <FaEnvelope />
              </div>
              <p className="text-textLight text-sm xl:text-base">
                hello@novoestates.com
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Right Form */}
        <AnimateOnScroll direction="right" className="w-full lg:w-1/2">
          <div className="bg-secondary rounded p-8 shadow-2xl">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <InputField
                  label="First Name"
                  placeholder="Enter your first name"
                />
                <InputField
                  label="Last Name"
                  placeholder="Enter your last name"
                />
              </div>
              <InputField
                label="Email Address"
                type="email"
                placeholder="Enter your email"
              />
              <InputField
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
              />
              <InputField
                label="I am interested in"
                placeholder="e.g. Buying, Renting, Investment"
              />
              <InputField
                label="Message"
                type="textarea"
                placeholder="Tell us more about what you are looking for"
              />
              <Button text="Send Message" className="text-white w-fit mt-2" />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ContactSection;
