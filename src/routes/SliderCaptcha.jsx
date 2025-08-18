import React, { useState } from 'react';
import { cat } from '../assets';
import { SectionWrapper } from '../hoc';

const SliderCaptcha = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [rotation, setRotation] = useState({ inner: 90, outer: -90 }); // Start at 90 degrees
  const [isSolved, setIsSolved] = useState(false);
  const targetRotation = 0;
  const tolerance = 1;

  const resetCaptcha = () => {
    setSliderValue(0);
    setRotation({ inner: 90, outer: -90 });
    setIsSolved(false);
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);
    
    // Convert slider value (0-100) to rotation degrees with 90-degree range
    const innerRotation = 90 - (value / 100) * 180; // Start at 90°, end at -90°
    const outerRotation = -90 + (value / 100) * 180; // Start at -90°, end at 90°
    
    setRotation({
      inner: innerRotation,
      outer: outerRotation
    });

    // Stricter alignment check
    const isInnerAligned = Math.abs(innerRotation % 360) <= tolerance;
    const isOuterAligned = Math.abs(outerRotation % 360) <= tolerance;
    
    if (isInnerAligned && isOuterAligned && value >= 49 && value <= 51) {
      setIsSolved(true);
    } else {
      setIsSolved(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-5">
      <h2 className="text-2xl font-semibold text-white">Good CAPTCHA</h2>
      <p className="text-gray-400 text-center mb-4">Surprisingly good CAPTCHA experiments that are fun to solve.</p>

      <div className="relative w-[300px] h-[300px]">
        {/* Outer circle (background) */}
        <div 
          className="absolute w-full h-full rounded-full bg-cover bg-center transition-transform duration-300 ease-in-out shadow-lg"
          style={{ 
            transform: `rotate(${rotation.outer}deg)`,
            backgroundImage: `url(${cat})`,
            clipPath: 'circle(50% at center)'
          }}
        />
        {/* Inner circle (foreground) */}
        <div 
          className="absolute w-full h-full rounded-full bg-cover bg-center transition-transform duration-300 ease-in-out"
          style={{ 
            transform: `rotate(${rotation.inner}deg)`,
            backgroundImage: `url(${cat})`,
            clipPath: 'circle(35% at center)'
          }}
        />
      </div>

      <div className="w-full max-w-[400px] text-center">
        <p className="text-gray-300 mb-3">Drag the slider to fit the puzzle</p>
        <div className="relative flex items-center">
          <div className="absolute w-full h-3 bg-gray-600/50 rounded-full">
            <div 
              className="h-full bg-green-400 rounded-l-full transition-all duration-300"
              style={{ width: `calc(${sliderValue}% - 16px)` }}
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
            className="relative z-10 w-full h-3 appearance-none bg-transparent cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 
            [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg 
            [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-green-400
            [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-20
            disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSolved}
          />
        </div>
        <div className="flex justify-center items-center gap-4 mt-6">
          {isSolved ? (
            <div className="flex items-center gap-2">
              <span className="text-green-400 font-medium">Verified!</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          ) : (
            <span className="text-gray-400">Slide to verify</span>
          )}
          <button
            onClick={resetCaptcha}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-gray-600 rounded-lg
            hover:border-gray-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(SliderCaptcha,'captcha')