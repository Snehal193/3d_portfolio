import { useCallback, useState } from "react";
import CardForm from "../components/PaycardManager/CardForm";
import { SectionWrapper } from "../hoc";
import Card from "../components/PaycardManager/Card";

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
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-8 px-4">
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
  )
}

export default SectionWrapper(Paycard, "paycard");