import "./style.scss";

type Ingridient = {
  id: number;
  name: string;
  img: string;
  isAdded: boolean;
  count: number;
  price: number;
};

function Ingridients() {
  const _lsPizzaRaw = localStorage.getItem("pizza");
  const _lsPizza: Ingridient[] = _lsPizzaRaw ? JSON.parse(_lsPizzaRaw) : [];

  return (
    <ul className="checkout__list">
      {_lsPizza.map((elem, index) =>
        elem.id < _lsPizza.length - 1 && elem.count > 0 ? (
          <li key={index} className="checkout__item">
            <div className="checkout__img">
              <img src={elem.img} alt={elem.name} />
            </div>
            <div className="checkout__name">{elem.name}</div>
            <div className="checkout__count">x{elem.count}</div>
          </li>
        ) : null
      )}
    </ul>
  );
}

export default Ingridients;
