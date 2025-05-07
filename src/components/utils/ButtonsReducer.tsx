export default function ButtonsReducer(state: any, action: any) {
  switch (action.type) {
    case "save":
      return;
    case "load":
      return;
    case "checkout":
      return;
    default:
      return state;
  }
}
