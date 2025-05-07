import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import CheckoutPopup from "./components/CheckoutPopup/CheckoutPopup";
import LoadPopup from "./components/LoadPopup/LoadPopup";

function App() {

  return (
    <div className="App">
      <Header />
      <Intro />
      <CheckoutPopup />
      <LoadPopup />
    </div>
  );
}

export default App;
