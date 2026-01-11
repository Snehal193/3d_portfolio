import React, { useState } from 'react';
import { cat } from '../assets';
import { SectionWrapper } from '../hoc';
import BackButton from '../components/BackButton';

const SliderCaptcha = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [rotation, setRotation] = useState({ inner: 60, outer: -60 }); // Start at 90 degrees
  const [isSolved, setIsSolved] = useState(false);
  const tolerance = 1;

  const resetCaptcha = () => {
    setSliderValue(0);
    setRotation({ inner: 60, outer: -60 });
    setIsSolved(false);
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);

    // Convert slider value (0-100) to rotation degrees with 90-degree range
    const innerRotation = 60 - (value / 100) * 90; // Start at 90°, end at -90°
    const outerRotation = -60 + (value / 100) * 90; // Start at -90°, end at 90°

    setRotation({
      inner: innerRotation,
      outer: outerRotation
    });

    // Stricter alignment check
    const isInnerAligned = Math.abs(innerRotation % 180) <= tolerance;
    const isOuterAligned = Math.abs(outerRotation % 180) <= tolerance;

    if (isInnerAligned && isOuterAligned && value >= 61 && value <= 70) {
      setIsSolved(true);
    } else {
      setIsSolved(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col pb-8 px-4">
      <BackButton to="/craft" />
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col items-center">
        <div className="w-full max-w-7xl">
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-2">Good CAPTCHA</h2>
            <p className="text-secondary text-sm sm:text-base">Surprisingly good CAPTCHA experiments that are fun to solve.</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 w-full">
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-tertiary rounded-full p-2 shadow-card">
        <div 
          className="absolute w-full h-full rounded-full bg-cover bg-center transition-transform duration-300 ease-in-out"
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

          <div className="w-full max-w-[400px] text-center px-4">
            <p className="text-secondary mb-3 text-sm sm:text-base">Drag the slider to fit the puzzle</p>
            <div className="relative flex items-center">
              <div className="absolute w-full h-2 bg-tertiary rounded-full">
                <div 
                  className={`h-full rounded-l-full transition-all duration-300 ${
                    isSolved 
                      ? 'green-pink-gradient' 
                      : 'bg-gradient-to-r from-[#915EFF] to-[#804dee]'
                  }`}
                  style={{ width: `${sliderValue}%` }}
                />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={handleSliderChange}
                className={`relative z-10 w-full h-2 appearance-none bg-transparent cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg 
                [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2
                [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-20
                [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSolved
                    ? '[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[#00cea8] [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[#00cea8]'
                    : '[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[#915EFF] [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[#915EFF]'
                }`}
                disabled={isSolved}
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
              {isSolved ? (
                <div className="flex items-center gap-2">
                  <span className="green-text-gradient font-medium text-base sm:text-lg">Verified!</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#00cea8]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              ) : (
                <span className="text-secondary text-sm sm:text-base">Slide to verify</span>
              )}
              <button
                onClick={resetCaptcha}
                className="px-4 py-2 text-sm text-secondary hover:text-white border border-secondary/30 rounded-lg
                hover:border-[#915EFF]/50 hover:bg-tertiary transition-all duration-200 focus:outline-none 
                focus:ring-2 focus:ring-[#915EFF]/50 focus:ring-offset-2 focus:ring-offset-primary"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(SliderCaptcha,'captcha')