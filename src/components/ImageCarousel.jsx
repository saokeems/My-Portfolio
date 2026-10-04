import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({ images, alt }) => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const count = images.length;

  if (count === 0) return null;

  const goTo = (target) => {
    const track = trackRef.current;
    if (!track) return;

    setIndex(target);
    track.scrollTo({ left: track.clientWidth * target, behavior: "smooth" });
  };

  if (count === 1) {
    return (
      <img
        src={images[0]}
        alt={alt}
        className="w-full rounded-md object-cover"
      />
    );
  }

  return (
    <div className="carousel">
      <div
        ref={trackRef}
        className="carousel-track"
        onScroll={(event) => {
          const track = event.currentTarget;
          setIndex(Math.round(track.scrollLeft / track.clientWidth));
        }}
      >
        {images.map((src, position) => (
          <img
            key={src}
            src={src}
            alt={`${alt} — ${position + 1} of ${count}`}
            className="carousel-slide"
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo((index - 1 + count) % count)}
        aria-label="Previous image"
        className="carousel-btn carousel-btn-left"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => goTo((index + 1) % count)}
        aria-label="Next image"
        className="carousel-btn carousel-btn-right"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-3 flex justify-center gap-2">
        {images.map((src, position) => (
          <button
            key={src}
            type="button"
            onClick={() => goTo(position)}
            aria-label={`Go to image ${position + 1}`}
            aria-current={position === index}
            className={`carousel-dot ${position === index ? "is-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;