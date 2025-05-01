import "./style.scss";
import exampleImg from "../../images/desk.jpg";
import { useContext } from "react";
import IngridientsContext from "../utils/ingridientsContext";
function Main() {
  const { state, dispatch } = useContext(IngridientsContext);
  const ings = state.filter((el) => el.isAdded === true);
  return (
    <div className="main">
      <h2 className="main__title">Your pizza</h2>

      <ul className="main__list">
        {ings.map((el) => (
          <li className="main__item">
            <img src={el.img} alt={el.name} />
          </li>
        ))}
        {/* <li className="main__item">
          <img src={exampleImg} alt="pizza" />
        </li> */}
      </ul>
    </div>
  );
}

export default Main;
