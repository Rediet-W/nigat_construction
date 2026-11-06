import { TestimonialCard } from "@/features/testimonials/components/TestimonialCard";
import { TESTIMONIALS } from "@/constants/testimonials";
import { wowDelay } from "@/lib/animation";

export function TestimonialsGrid() {
  return (
    <div className="page-testimonial">
      <div className="container">
        <div className="row">
          {TESTIMONIALS.slice(0, 6).map((testimonial, index) => (
            <div className="col-xl-4 col-md-6" key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} delay={wowDelay(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
