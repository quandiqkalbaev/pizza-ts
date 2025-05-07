import { createContext } from "react";

type LoadPopupContextType = {
  isLoadOpen: boolean;
  setIsLoadOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoadPopupContext = createContext<LoadPopupContextType>({
  isLoadOpen: false,
  setIsLoadOpen: () => {},
});

export default LoadPopupContext;
