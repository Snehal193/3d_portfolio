import { useCallback, useState } from "react";
import CardForm from "../components/PaycardManager/CardForm";
import { SectionWrapper } from "../hoc";
import Card from "../components/PaycardManager/Card";
import BackButton from "../components/BackButton";

const initialState = {
  id: '',
  cardNumber: '',
  cardHolder: '',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
};
const Paycard = () => {
  const [state, setState] = useState(initialState);

  const updateStateValues = useCallback((key, value) => {
    setState((prev) => ({ ...prev, [key]: value || '' }));
  }, []);

  const handleReset = useCallback(() => {
    setState(initialState);
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col pb-8 px-4 sm:px-6">
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col">
        <BackButton to="/craft" />
        <div className="mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2">PayCard UI</h2>
          <p className="text-secondary text-xs sm:text-sm md:text-base">A responsive credit-card payment UI with live preview, input formatting and validation.</p>
        </div>
        <div className="flex-1 flex items-center justify-center py-4 sm:py-8">
          <CardForm card={state} onUpdateCard={updateStateValues} onReset={handleReset}>
            <Card
              cardNumber={state.cardNumber}
              cardHolder={state.cardHolder}
              cardMonth={state.cardMonth}
              cardYear={state.cardYear}
              cardCvv={state.cardCvv}
            ></Card>
          </CardForm>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Paycard, "paycard");