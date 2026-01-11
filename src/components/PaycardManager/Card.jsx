import { creditCard, visa, chip } from '../../assets'

const formatNumber = (num = '') => {
  const cleaned = num.replace(/\s+/g, '').padEnd(16, '*')
  return cleaned.replace(/(.{4})/g, '$1 ').trim()
}

const Card = ({
  cardNumber = '45355',
  cardHolder = 'SDFSF',
  cardMonth = 'MM',
  cardYear = 'YY',
  cardCvv = '',
  isFlipped = false
}) => {
  const displayed = formatNumber(cardNumber)

  return (
    <div className="h-[200px] sm:h-[250px] perspective-1000">
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
          <img src={creditCard} alt="card-bg" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-10 p-4 sm:p-5 h-full flex flex-col justify-between text-white">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <img src={chip} alt="chip" className="w-10 h-8 sm:w-12 sm:h-9 object-contain" />
                <div className="text-xs sm:text-sm opacity-90">{(cardNumber || '').slice(0,6)}*</div>
              </div>
              <img src={visa} alt="visa" className="w-16 sm:w-20 object-contain" />
            </div>
            <div className="flex-grow flex flex-col justify-center">
              <div className="text-[9px] sm:text-[10px] opacity-80 mb-1">Card Number</div>
              <div className="w-full text-xl sm:text-2xl tracking-widest font-mono text-white">
                {cardNumber ? displayed : '**** **** **** ****'}
              </div>
            </div>
            <div className="flex items-end justify-between text-xs sm:text-sm">
              <div>
                <div className="text-[9px] sm:text-[10px] opacity-80">Card Holder</div>
                <div className="uppercase font-semibold text-xs sm:text-base truncate max-w-[120px] sm:max-w-[150px]">
                  {cardHolder || 'FULL NAME'}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[9px] sm:text-[10px] opacity-80">Expires</div>
                <div className="font-semibold flex items-center text-xs sm:text-sm">
                  <span className="min-w-[20px] text-right">{cardMonth || 'MM'}</span>
                  <span className="mx-1">/</span>
                  <span className="min-w-[20px] text-left">{cardYear || 'YY'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden">
          <img src={creditCard} alt="card-bg" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-10 h-full flex flex-col">
            <div className="h-10 sm:h-12 bg-black mt-4"></div>
            <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
              <div className="flex items-center justify-end gap-2 mt-4">
                <span className="text-white text-xs font-semibold">CVV</span>
                <div className="bg-white rounded px-3 py-1 min-w-[50px] text-right">
                  <span className="text-black font-mono text-xs sm:text-sm tracking-wider">
                    {cardCvv || '***'}
                  </span>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={visa} alt="visa" className="w-16 sm:w-20 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card