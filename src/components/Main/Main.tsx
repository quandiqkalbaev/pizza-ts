import "./style.scss";
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
          <li className="main__item" key={el.id}>
            <img src={el.img} alt={el.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
