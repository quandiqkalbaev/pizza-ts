import { createContext } from "react";

type CheckoutPopupContextType = {
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckoutPopupContext = createContext<CheckoutPopupContextType>({
  isCheckoutOpen: false,
  setIsCheckoutOpen: () => {},
});

export default CheckoutPopupContext;
