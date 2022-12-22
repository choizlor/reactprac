import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(1);
  const [need, setNeed] = useState(1);
  const onChange = (event) => {
    setCost(event.target.value);
  };
  const costInput = (event) => {
    setNeed(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          <option>Select Coin</option>
          {coins.map((coin, index) => (
            <option
              key={index}
              value={coin.quotes.USD.price}
              id={coin.symbol}
              symbol={coin.symbol}
            >
              {coin.name}({coin.symbol}): ${Math.round(coin.quotes.USD.price*100)/100} USD
            </option>
          ))}
        </select>
      )}
      <hr></hr>
      <h2>Input your cash.</h2>
      <div>
        <input
          type="number"
          value={need}
          onChange={costInput}
          placeholder="BTC"
        />
      </div>
      <h2>You can get {Math.round((need / cost)*100)/100}</h2>
    </div>
  );
}

export default App;
