import "./style.css";

// import siteLogo from "./logo.svg"; // const siteLogo = "logo.svg"
import Products from "./Components/Products";
import { InputRefresh } from "./Components/Products";

function App() {
  return (
    <>
      <Products tax={20} />
      <InputRefresh />
    </>
  );
}

export default App;
