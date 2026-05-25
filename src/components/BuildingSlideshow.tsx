import { useEffect, useState } from "react";
import poster from "@/assets/building/poster.jpg";
import exterior from "@/assets/building/exterior.jpg";
import basement from "@/assets/building/basement.jpg";
import lighting from "@/assets/building/lighting.jpg";
import mep from "@/assets/building/mep.jpg";
import hvac from "@/assets/building/hvac.jpg";

const SLIDE_INTERVAL_MS = 3 * 60 * 1000; // 3 minutes per slide

const slides = [
  { src: poster, alt: "SERECFOA G+8 Mixed Use Building" },
  { src: exterior, alt: "Building exterior render" },
  { src: basement, alt: "Basement parking floor plan" },
  { src: lighting, alt: "Interior lighting layout" },
  { src: mep, alt: "MEP shaft coordination" },
  { src: hvac, alt: "HVAC ducting coordination" },
];

const BuildingSlideshow = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-lg bg-section-alt"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <img
          key={s.alt}
          src={s.src}
          alt={s.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-secondary" : "w-2 bg-background/70 hover:bg-background"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BuildingSlideshow;
