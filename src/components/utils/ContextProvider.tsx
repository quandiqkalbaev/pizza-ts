import { useEffect, useReducer, useState } from "react";
import { data } from "./data";
import reducer from "./reducer";
import IngridientsContext from "./ingridientsContext";
import CheckoutPopupContext from "../CheckoutPopup/CheckoutPopupContext";
import LoadPopupContext from "../LoadPopup/LoadPopupContext";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialState = () => {
    const saved = localStorage.getItem("pizza");
    return saved ? JSON.parse(saved) : data;
  };

  const [state, dispatch] = useReducer(reducer, [], getInitialState);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLoadOpen, setIsLoadOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("pizza", JSON.stringify(state));
  }, [state]);

  return (
    <IngridientsContext.Provider value={{ state, dispatch }}>
      <CheckoutPopupContext.Provider value={{ isCheckoutOpen, setIsCheckoutOpen }}>
        <LoadPopupContext.Provider value={{ isLoadOpen, setIsLoadOpen }}>{children}</LoadPopupContext.Provider>
      </CheckoutPopupContext.Provider>
    </IngridientsContext.Provider>
  );
};

export default ContextProvider;
