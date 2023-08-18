import { useState, useffect } from "react";

import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  useffect(() => {
    const template = () => {
      const contractAddress = "";
      const contractABI = "";
    };
  });

  return <div className="App"></div>;
}

export default App;
