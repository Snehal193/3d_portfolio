import { creditCard, visa, chip } from '../../assets'

const formatNumber = (num = '') => {
  const cleaned = num.replace(/\s+/g, '').padEnd(16, '*')
  return cleaned.replace(/(.{4})/g, '$1 ').trim()
}

const Card = ({
  cardNumber = '45355',
  cardHolder = 'SDFSF',
  cardMonth = 'MM',
  cardYear = 'YY'
}) => {
  const displayed = formatNumber(cardNumber)

  return (
    <div className="h-[250px] rounded-xl overflow-hidden relative transform-gpu">
      <img src={creditCard} alt="card-bg" className="absolute inset-0 w-full h-full object-cover" />

      <div className="relative z-10 p-5 h-full flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img src={chip} alt="chip" className="w-12 h-9 object-contain" />
            <div className="text-sm opacity-90">{(cardNumber || '').slice(0,6)}*</div>
          </div>

          <img src={visa} alt="visa" className="w-20 object-contain" />
        </div>

        <div className="flex-grow flex items-center">
          <div className="w-full text-2xl tracking-widest font-mono text-white">
            {displayed}
          </div>
        </div>

        <div className="flex items-end justify-between text-sm">
          <div>
            <div className="text-[10px] opacity-80">Card Holder</div>
            <div className="uppercase font-semibold">{cardHolder}</div>
          </div>

          <div className="text-right">
            <div className="text-[10px] opacity-80">Expires</div>
            <div className="font-semibold">{cardMonth}/{cardYear}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card