import { useState, useRef, useEffect } from 'react'
import { SectionWrapper } from '../hoc';
import classNames from 'classnames';
import { carouselImages } from '../constants';
import BackButton from '../components/BackButton';

const KineticCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const wrapperRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const imagePromises = carouselImages.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages((prev) => new Set([...prev, image.id]));
          resolve();
        };
        img.onerror = reject;
        img.src = image.src;
      });
    });

    Promise.all(imagePromises).catch((error) => {
      console.error('Error preloading images:', error);
    });
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "300ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col pb-8 px-4">
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col">
        <BackButton to="/craft" />
        <div className="mb-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-2">Kinetic Carousel</h2>
          <p className="text-secondary text-sm sm:text-base">An interactive carousel that grows and opens in scale in response to mouse interactions.</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-[1200px]">
            <ul ref={wrapperRef} className="group flex h-[300px] sm:h-[390px] gap-[0.5%]">
          {carouselImages.map((image, index) => (
            <li
              aria-current={activeIndex === index}
              key={image.id}
              onMouseOver={() => setActiveIndex(index)}
              className={classNames(
                "relative w-[8%] first:w-[1%] last:w-[1%] [&[aria-current='true']]:w-[48%]",
                "before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[-6px] before:right-[-6px] before:z-0",
                "[transition:width_var(--transition,200ms_ease-in)]",
                "hover:w-[14%] [&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%]"
              )}
            >
              <div className="bg-gray-800 overflow-hidden h-full w-full relative">
                {!loadedImages.has(image.id) && (
                  <div className="absolute inset-0 z-20 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 animate-pulse">
                    <div className="absolute inset-0 bg-gray-700/50 blur-xl"></div>
                  </div>
                )}
                <img
                  src={image.src}
                  alt={image.alt}
                  width="590"
                  height="640"
                  loading="eager"
                  decoding="async"
                  onLoad={() => {
                    setLoadedImages((prev) => new Set([...prev, image.id]));
                  }}
                  className={classNames(
                    "absolute z-10 w-[640px] h-[590px] object-cover block max-w-none left-1/2 top-1/2 -translate-x-1/2",
                    "-translate-y-1/2 transform-gpu transition-all duration-300 ease-out",
                    loadedImages.has(image.id)
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  )}
                />
              </div>
            </li>
          ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(KineticCarousel, "kinetic-carousel");