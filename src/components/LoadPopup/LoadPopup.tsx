import React, { useContext, useState } from "react";
import LoadPopupContext from "./LoadPopupContext";
import IngridientsContext from "../utils/ingridientsContext";

function LoadPopup() {
  const { isLoadOpen, setIsLoadOpen } = useContext(LoadPopupContext);
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(IngridientsContext);
  if (!isLoadOpen) return null;

  const handleSubmit = () => {
    const data = localStorage.getItem(inputValue);
    if (data) {
      dispatch({ type: "load", payload: JSON.parse(data) });
      setIsLoadOpen(false);
    } else {
      alert("Invalid configuration number");
    }
  };
  return (
    isLoadOpen && (
      <div className="popup">
        <div className="popup__wrapper">
          <div className="popup__title">Load a pizza configuration number:</div>
          <div className="popup__block">
            <input type="text" className="popup__input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Configutraion Number" />
            <button className="popup__btns-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div className="popup__close" onClick={() => setIsLoadOpen(false)}>
            <img src="https://img.icons8.com/ios7/600/delete-sign.png" alt="" />
          </div>
        </div>
      </div>
    )
  );
}

export default LoadPopup;
