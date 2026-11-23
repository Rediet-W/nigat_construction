import { TestimonialCard } from "@/features/testimonials/components/TestimonialCard";
import { getTestimonials } from "@/lib/cms/content";
import { wowDelay } from "@/lib/animation";

export async function TestimonialsGrid() {
  const testimonials = await getTestimonials();
  return (
    <div className="page-testimonial">
      <div className="container">
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-xl-4 col-md-6" key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} delay={wowDelay(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
