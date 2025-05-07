import React from "react";
import Header from "../Header/Header";

import Ingridients from "./components/Ingridients";
import CheckoutInfo from "./components/CheckoutInfo";
function Checkout() {
  return (
    <>
      <Header />
      <div className="checkout">
        <h2 className="main__title checkout__title">Ingridients info</h2>
        <Ingridients />
        <h2 className="main__title checkout__title">Checkout info</h2>
        <CheckoutInfo />
      </div>
    </>
  );
}

export default Checkout;
