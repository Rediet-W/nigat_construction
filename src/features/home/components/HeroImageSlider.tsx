"use client";

import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export interface HeroSlide {
  src: string;
  width: number;
  height: number;
  alt: string;
}

/** Full-bleed fading background slider of the "Home - Slider" variant (slides: CMS home page). */
export function HeroImageSlider({ slides }: { slides: readonly HeroSlide[] }) {
  return (
    <div className="hero-image-slider">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        slidesPerView={1}
        speed={1000}
        spaceBetween={0}
        loop
        autoplay={{ delay: 4000 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.src}>
            <div className="hero-slider-image">
              <figure>
                <Image src={slide.src} alt={slide.alt} width={slide.width} height={slide.height} preload={index === 0} sizes="100vw" />
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
