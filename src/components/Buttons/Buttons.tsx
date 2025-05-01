import "./style.scss";

function Buttons() {
  return (
    <div className="ings__btns">
      <div className="ings__btns-wrapper">
        <button className="ings__btns-btn ings__btns-save">Save Pizza</button>
        <button className="ings__btns-btn ings__btns-checkout">Checkout</button>
      </div>
      <div className="ings__btns-wrapper">
        <button className="ings__btns-btn ings__btns-load">Load Pizza</button>
      </div>
    </div>
  );
}

export default Buttons;
