import { testimonials } from "../../data";
import AnimateOnScroll from "../common/AnimateOnScroll";
import StarRating from "../common/StarRating";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 lg:px-20 bg-secondary">
      <AnimateOnScroll direction="up">
        <div className="text-center">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm">
            Testimonials
          </p>
          <h2 className="font-heading mt-3 text-2xl md:text-3xl font-bold text-dark xl:text-5xl">
            What Our Customers <span className="text-accent">Say</span>
          </h2>
          <p className="mt-4 text-textLight xl:text-lg max-w-xl mx-auto">
            Do not just take our word for it. Here is what our clients have to
            say about working with Novo Estates.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {testimonials.map((testimonial, index) => (
          <AnimateOnScroll
            key={testimonial.id}
            direction="up"
            delay={index * 0.15}
            className="h-full"
          >
            <div className="h-full bg-secondary shadow-xl rounded p-8 flex flex-col gap-4 border border-border hover:bg-primary hover:scale-105 hover:shadow-lg transition-all duration-300">
              <StarRating rating={testimonial.rating} />
              <p className="text-textLight font-medium leading-relaxed text-sm xl:text-base">
                {testimonial.review}
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-heading font-bold text-white text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-dark font-semibold">{testimonial.name}</p>
                  <p className="text-textLight text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
