import { createContext } from "react";

type Ingridients = {
  id: number;
  name: string;
  img: string;
  isAdded: boolean;
  count: number;
  price: number;
};
type IngridientsContextType = {
  state: Ingridients[];
  dispatch: React.Dispatch<any>;
};

const IngridientsContext = createContext<IngridientsContextType>({
  state: [],
  dispatch: () => {},
});

export default IngridientsContext;
