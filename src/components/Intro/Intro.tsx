import Main from "../Main/Main";
import "./style.scss";
import Ingridients from "../Ingridients/Ingridients";
function Intro() {

  return (
      <section className="intro">
        <div className="intro__container">
          <Main />
          <Ingridients />
        </div>
      </section>
  );
}

export default Intro;
