import React, { useContext } from "react";
import IngridientsContext from "../utils/ingridientsContext";

function Popup() {
  const { state, dispatch } = useContext(IngridientsContext);
  const ings = state.filter((el) => el.isAdded === true);
  return (
    <div className="popup">
      <div className="popup__wrapper">
        <p className="popup__title">Your Order</p>
        <p className="popup__ings">The pizza has follwing Ingridients:</p>
        <ul>
          {state.map((el, i) => (
            <li key={i}>
              <p>{el.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Popup;
