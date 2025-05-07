export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return state.map((elem: any) => (elem.id === action.id ? { ...elem, count: elem.count + 1, isAdded: true } : elem));
    case "decrement":
      return state.map((elem: any) =>
        elem.id == action.id && elem.count > 0
          ? elem.count === 1
            ? {
                ...elem,
                count: elem.count - 1,
                isAdded: false,
              }
            : { ...elem, count: elem.count - 1, isAdded: true }
          : elem
      );
    case "reset":
      return state.map((elem: any) => (elem.id < state.length - 1 ? { ...elem, count: 0, isAdded: false } : elem));
    case "load":
      return action.payload;
    default:
      return state;
  }
}
