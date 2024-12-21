import React, { useState, useEffect } from 'react';

const HomeCarousel = ({ banners }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const swipeThreshold = 50;
  const autoplayIntervalTime = 6000;

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const previousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchEndX) {
      if (touchStartX - touchEndX > swipeThreshold) {
        nextSlide();
      } else if (touchStartX - touchEndX < -swipeThreshold) {
        previousSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, autoplayIntervalTime);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentSlideIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="relative min-h-[50svh] sm:min-h-[80svh] w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentSlideIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-end gap-2 px-16 py-12 text-center lg:px-32 lg:py-14 bg-gradient-to-t from-slate-900/85 to-transparent">
              <h3 className="w-full lg:w-[80%] text-2xl lg:text-3xl font-bold text-white">
                {banner.title}
              </h3>
              <p className="w-full lg:w-1/2 text-sm text-slate-300">
                {banner.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
<button
  type="button"
  onClick={previousSlide}
  className="absolute z-20 left-5 top-1/2 -translate-y-1/2 p-2 bg-white/40 rounded-full hover:bg-white/60"
  aria-label="previous slide"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-black"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>

      {/* Next Button */}
<button
  type="button"
  onClick={nextSlide}
  className="absolute z-20 right-5 top-1/2 -translate-y-1/2 p-2 bg-white/40 rounded-full hover:bg-white/60"
  aria-label="next slide"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-black"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlideIndex(index)}
            className={`w-2 h-2 rounded-full transition ${
              currentSlideIndex === index ? 'bg-slate-300' : 'bg-slate-300/50'
            }`}
            aria-label={`slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Pause/Play Button */}
      <button
        type="button"
        onClick={() => setIsPaused((prev) => !prev)}
        className="absolute bottom-5 right-5 p-2 bg-slate-300 rounded-full"
        aria-pressed={isPaused}
      >
        {/* Add SVG for pause/play */}
      </button>
    </div>
  );
};

export default HomeCarousel;