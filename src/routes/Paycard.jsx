import { useCallback, useState } from "react";
import CardForm from "../components/PaycardManager/CardForm";
import { SectionWrapper } from "../hoc";

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
    setState({ ...state, [key]: value || '' });
  }, [state]);

  return (
    <CardForm card={state} onUpdateCard={updateStateValues}>
    </CardForm>
  )
}

export default SectionWrapper(Paycard, "paycard");