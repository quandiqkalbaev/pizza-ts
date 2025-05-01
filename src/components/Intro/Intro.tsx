import Main from "../Main/Main";
import "./style.scss";
import { useReducer } from "react";
import { data } from "../utils/data";
import reducer from "../utils/reducer";
import IngridientsContext from "../utils/ingridientsContext";
import Ingridients from "../Ingridients/Ingridients";
function Intro() {
  const [state, dispatch] = useReducer(reducer, data);
  let value = { state, dispatch };
  return (
    <IngridientsContext.Provider value={value}>
      <section className="intro">
        <div className="intro__container">
          <Main />
          <Ingridients />
        </div>
      </section>
    </IngridientsContext.Provider>
  );
}

export default Intro;
