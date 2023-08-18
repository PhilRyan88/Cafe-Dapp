import { useState, useffect } from "react";

import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  useffect(() => {
    const template = async () => {
      const contractAddress = "";
      const contractABI = "";
      //gotta use metamask here
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(account);

        const provider = new ethers.providers.Web3Provider(ethereum); //reading the blockchain
        const signer = provider.getSigner(); //writting to the blockchain
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setState({ provider, signer, contract });
      } catch (error) {
        alert(error);
      }
    };
    template();
  }, []);

  return <div className="App"></div>;
}

export default App;
