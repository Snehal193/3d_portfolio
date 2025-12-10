import React, { useState } from 'react'
import { SectionWrapper } from '../hoc';
import classNames from 'classnames';
import { carouselImages } from '../constants';
import { styles } from '../styles';

const KineticCarousel = () => {
 const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-20">
      <div className="w-[1200px] max-w-full relative z-0">
        <ul className="flex h-[390px] gap-2">
          {carouselImages.map((image, index) => (
            <li aria-current={activeIndex === index} key={image.id}
             className={className("w-[8%] hover:w-[12%] first:w-[1%] last:w-[1%] [&[aria-current='true']]:w-[48%]",
             "bg-gray rounded-2xl overflow-hidden relative z-0",
             )}
             >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default SectionWrapper(KineticCarousel, "kinetic-carousel");