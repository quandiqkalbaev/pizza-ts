import { useContext } from "react";
import IngridientsList from "./IngridientsList";
import "./style.scss";
import IngridientsContext from "../utils/ingridientsContext";
import Buttons from "../Buttons/Buttons";

function Ingridients() {
  const { state, dispatch } = useContext(IngridientsContext);
  const total: number = state.reduce((a: number, b: any) => a + b.price * b.count, 0);
  return (
    <div className="ings">
      <div className="ings__top">
        <p className="ings__title">Your pizza</p>
        <p className="ings__total">{total}$</p>
        <button className="ings__btn reset__btn" onClick={() => dispatch({ type: "reset" })}>
          Reset Pizza
        </button>
      </div>
      <IngridientsList />
      <Buttons />
 
    </div>
  );
}

export default Ingridients;
