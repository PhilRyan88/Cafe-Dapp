import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./contracts/Cafe.json";
import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xCf9B90AbeCF7C31Bf2dd32f1A4B390654a970319";
      const contractAbi = abi.abi;
      try{
        const {ethereum}= window;
      }

    };
  });

  return <div className="App"></div>;
}

export default App;
