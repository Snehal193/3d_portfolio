import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

const CardForm = ({ card, onUpdateCard, onReset, children }) => {
  const [isCvvFocused, setIsCvvFocused] = useState(false);

  // Generic handler for text inputs (card holder name)
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    onUpdateCard(name, value);
  };

  // Formats card number in groups of 4 digits
  const handleNumberChange = (event) => {
    const { name, value } = event.target;
    const cleaned = value.replace(/[^0-9]/g, '').slice(0, 16);
    const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
    onUpdateCard(name, formatted);
  };

  // Validates month (01-12) and auto-formats single digits with leading zero
  const handleMonthChange = (event) => {
    const { name, value } = event.target;
    const cleaned = value.replace(/[^0-9]/g, '');
    
    if (cleaned === '') {
      onUpdateCard(name, '');
      return;
    }
    
    if (cleaned.length === 1) {
      const num = parseInt(cleaned);
      if (num >= 1 && num <= 9) {
        // Auto-format single digits with leading zero (1 -> 01, 2 -> 02, etc.)
        onUpdateCard(name, `0${num}`);
      } else if (num === 0) {
        onUpdateCard(name, '0');
      }
    } else if (cleaned.length === 2) {
      const num = parseInt(cleaned);
      if (num >= 1 && num <= 12) {
        onUpdateCard(name, cleaned);
      }
    }
  };

  const handleYearChange = (event) => {
    const { name, value } = event.target;
    const cleaned = value.replace(/[^0-9]/g, '').slice(0, 2);
    onUpdateCard(name, cleaned);
  };

  const handleCvvChange = (event) => {
    const { name, value } = event.target;
    const cleaned = value.replace(/[^0-9]/g, '').slice(0, 3);
    onUpdateCard(name, cleaned);
  };

  const handleReset = () => {
    setIsCvvFocused(false);
    if (onReset) {
      onReset();
    }
  };

  return (
    <div className="w-full flex flex-col mx-auto max-w-md">
      <div className="mb-6 sm:mb-8 w-full">
        {React.cloneElement(children, { isFlipped: isCvvFocused })}
      </div>
      <div className="bg-white rounded-xl p-6 w-full">
        <div className="mt-6">
          <label className="block text-xs font-semibold text-gray-500 mb-2">Card Number</label>
          <input
            name="cardNumber"
            value={card.cardNumber || ''}
            onChange={handleNumberChange}
            inputMode="numeric"
            pattern="[0-9 ]*"
            maxLength={19}
            className="mt-1 block w-full border border-gray-300 bg-gray-50 rounded-md p-3 tracking-widest text-black placeholder-gray-400 focus:border-gray-300 focus:ring-1 focus:outline-none"
            placeholder="1234 1234 1234 1234"
          />
        </div>

        <div className="mt-4">
          <label className="block text-xs font-semibold text-gray-500 mb-2">Card Holder Name</label>
          <input
            name="cardHolder"
            value={card.cardHolder || ''}
            onChange={handleFormChange}
            maxLength={25}
            className="mt-1 block w-full border border-gray-300 bg-gray-50 rounded-md p-3 text-black placeholder-gray-400 focus:border-gray-300 focus:ring-1 focus:outline-none"
            placeholder="Full name"
          />
        </div>

        <div className="flex items-end gap-6 mt-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">Expiry</label>
            <div className="flex items-center gap-2">
              <input
                name="cardMonth"
                value={card.cardMonth || ''}
                onChange={handleMonthChange}
                inputMode="numeric"
                placeholder="MM"
                maxLength={2}
                className="w-14 border border-gray-300 bg-gray-50 rounded-md p-2 text-center text-black placeholder-gray-400 focus:border-gray-300 focus:ring-1 focus:outline-none"
              />

              <span className="text-sm text-gray-500">/</span>

              <input
                name="cardYear"
                value={card.cardYear || ''}
                onChange={handleYearChange}
                inputMode="numeric"
                placeholder="YY"
                maxLength={2}
                className="w-14 border border-gray-300 bg-gray-50 rounded-md p-2 text-center text-black placeholder-gray-400 focus:border-gray-300 focus:ring-1 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 mb-2">Verification Code</label>
            <div className="flex items-center gap-3">
              <input
                name="cardCvv"
                value={card.cardCvv || ''}
                onChange={handleCvvChange}
                onFocus={() => setIsCvvFocused(true)}
                onBlur={() => setIsCvvFocused(false)}
                inputMode="numeric"
                placeholder="CVC"
                maxLength={3}
                className="w-20 mt-1 flex-1 border border-gray-300 bg-gray-50 rounded-md p-2 text-black placeholder-gray-400 focus:border-gray-300 focus:ring-0 focus:outline-none"
              />

              <button
                type="button"
                onClick={handleReset}
                aria-label="reset card form"
                className="mt-1 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-md hover:opacity-95"
              >
                <FontAwesomeIcon icon={faRotateRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForm;