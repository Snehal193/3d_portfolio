import { useState, useRef, useEffect } from 'react'
import { SectionWrapper } from '../hoc';
import classNames from 'classnames';
import { carouselImages } from '../constants';

const KineticCarousel = () => {
 const [activeIndex, setActiveIndex] = useState(2);
  const wrapperRef = useRef(null);
  const timeoutRef = useRef(null);

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
    <div className="w-full flex flex-col items-center justify-center px-4 py-20">
      <div className="w-[1200px] max-w-full">
        <ul ref={wrapperRef} className="group flex h-[390px] gap-[0.5%]">
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
            <div className="bg-gray overflow-hidden h-full w-full relative">
              <img
                src={image.src}
                alt={image.alt}
                width="590"
                height="640"
                loading="eager"
                decoding="async"
                className="absolute z-10 w-[640px] h-[590px] object-cover block max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu transition-transform duration-200 ease-out"
              />
            </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionWrapper(KineticCarousel, "kinetic-carousel");