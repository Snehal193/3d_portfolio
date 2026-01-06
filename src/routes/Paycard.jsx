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
    setState(prev => ({ ...prev, [key]: value || '' }));
  }, []);

  return (
    <CardForm card={state} onUpdateCard={updateStateValues}>
      <Card
        cardNumber={state.cardNumber}
        cardHolder={state.cardHolder}
        cardMonth={state.cardMonth}
        cardYear={state.cardYear}
        cardCvv={state.cardCvv}
      ></Card>
    </CardForm>
  )
}

export default SectionWrapper(Paycard, "paycard");