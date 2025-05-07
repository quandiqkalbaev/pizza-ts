import { useContext, useState } from "react";
import "./style.scss";
import CheckoutPopupContext from "../CheckoutPopup/CheckoutPopupContext";
import LoadPopupContext from "../LoadPopup/LoadPopupContext";
import GeneratePassword from "../utils/generate";
import IngridientsContext from "../utils/ingridientsContext";

function Buttons() {
  const { isCheckoutOpen, setIsCheckoutOpen } = useContext(CheckoutPopupContext);
  const { isLoadOpen, setIsLoadOpen } = useContext(LoadPopupContext);
  const { state } = useContext(IngridientsContext);
  const [configId, setConfigId] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const handleSave = () => {
    const id = GeneratePassword(22);
    const data = JSON.stringify(state);
    localStorage.setItem(id, data);
    setConfigId(id);
    setIsGenerated(true);
  };
  return (
    <>
      <div className="ings__btns">
        <div className="ings__btns-wrapper">
          <button className="ings__btns-btn ings__btns-save" onClick={handleSave}>
            Save Pizza
          </button>
          <button className="ings__btns-btn ings__btns-checkout" onClick={() => setIsCheckoutOpen(true)}>
            Checkout
          </button>
        </div>
        <div className="ings__btns-wrapper">
          <button className="ings__btns-btn ings__btns-load" onClick={() => setIsLoadOpen(true)}>
            Load Pizza
          </button>
        </div>
      </div>
      {isGenerated && (
        <div className="ings__code">
          Your pizza configuration has been saved. Your number is : <span>{configId}</span>
        </div>
      )}
    </>
  );
}

export default Buttons;
