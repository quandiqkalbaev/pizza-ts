import { useContext } from "react";
import IngridientsContext from "../utils/ingridientsContext";

function IngridientsList() {
  const { state, dispatch } = useContext(IngridientsContext);

  return (
    <ul className="ings__list">
      {state.slice(0, state.length - 1).map((el: any) => (
        <li className="ings__item" key={el.id}>
          <div className="ings__info">
            <p className="ings__name">{el.name}</p>
            <p className="ings__price">{el.price}$</p>
          </div>
          <div className="ings__amount">
            <button className="ings__plus ings__amount-btn" onClick={() => dispatch({ type: "decrement", id: el.id })}>
              -
            </button>
            <p className="ings__count">{el.count}</p>
            <button className="ings__minus ings__amount-btn" onClick={() => dispatch({ type: "increment", id: el.id })}>
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default IngridientsList;
