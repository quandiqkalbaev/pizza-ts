import "./style.scss";
import exampleImg from "../../images/desk.jpg";
function Main({ state, dispatch }: { state: any, dispatch: any }) {
  return (
    <div className="main">
      <h2 className="main__title">Your pizza</h2>

      <ul className="main__list">
        <li className="main__item">
          <img src={exampleImg} alt="pizza" />
        </li>
      </ul>
    </div>
  );
}

export default Main;
