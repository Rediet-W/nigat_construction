"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { TESTIMONIALS } from "@/constants/testimonials";
import { TestimonialCard } from "@/features/testimonials/components/TestimonialCard";

/** Autoplaying testimonial carousel: 1 slide below 1280px, 2 above. */
export function TestimonialSlider() {
  return (
    <div className="testimonial-slider">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        speed={1500}
        spaceBetween={20}
        loop
        autoplay={{ delay: 3000 }}
        breakpoints={{ 768: { slidesPerView: 1 }, 1280: { slidesPerView: 2 } }}
        data-cursor-text="Drag"
      >
        {TESTIMONIALS.slice(0, 4).map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} animated={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
