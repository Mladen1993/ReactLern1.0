import "./style.css";

// import siteLogo from "./logo.svg"; // const siteLogo = "logo.svg"

import { useState } from "react";
import Products from "./Components/Products";

import { RenderTax } from "./Components/Products";

function App() {
  let [tax, setTax] = useState(20);
  return (
    <>
      <Products tax={tax} setTax={setTax} />

      <RenderTax tax={tax} setTax={setTax} />
    </>
  );
}

export default App;
