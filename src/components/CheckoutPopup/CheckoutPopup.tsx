import React, { useContext } from "react";
import IngridientsContext from "../utils/ingridientsContext";
import "./style.scss";
import CheckoutPopupContext from "./CheckoutPopupContext";
import { Link } from "react-router-dom";
function CheckoutPopup() {
  const { state, dispatch } = useContext(IngridientsContext);
  const { isCheckoutOpen, setIsCheckoutOpen } = useContext(CheckoutPopupContext);
  const total: number = state.reduce((a: number, b: any) => a + b.price * b.count, 0);
  const ings = state.filter((el) => el.isAdded === true);
  ings.pop();
  if (!isCheckoutOpen) return null;
  return (
    isCheckoutOpen && (
      <div className="popup">
        <div className="popup__wrapper">
          <p className="popup__title">Your Order</p>
          <p className="popup__ings">The pizza has follwing Ingridients:</p>
          <ul>
            {ings.map((el, i) => (
              <li key={i}>
                <p>
                  {el.name}: {el.count}
                </p>
              </li>
            ))}
          </ul>
          <p className="popup__total">Total price:{total}$</p>
          <p className="popup__text">Continue to checkout?</p>
          <div className="popup__btns">
            <div className="popup__btns-btn" onClick={() => setIsCheckoutOpen(false)}>
              Cancel
            </div>
            <Link to={"/checkout"} className="popup__btns-btn">
              Continue
            </Link>
          </div>
        </div>
      </div>
    )
  );
}

export default CheckoutPopup;
