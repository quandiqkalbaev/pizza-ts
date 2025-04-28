import Main from "../Main/Main";
import Ingridients from "../Ingridients/Ingridients";
import "./style.scss";
import { useReducer } from "react";
import { data } from "../utils/data";
import reducer from "../utils/reducer";
function Intro() {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <section className="intro">
      <div className="intro__container">
        <Main state={state} dispatch={dispatch} />
        <Ingridients state={state} dispatch={dispatch} />
      </div>
    </section>
  );
}

export default Intro;
