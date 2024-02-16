export default function Graphs() {
  interface Card {
    name: string;
    symbol: string;
    price: number;
    change: number;
  }

  interface Cards {
    [key: string]: Card;
  }

  const cards: Cards = {
    bitcoin: {
      name: "Bitcoin",
      symbol: "BTC",
      price: 52000,
      change: 2.35,
    },
    ethereum: {
      name: "Ethereum",
      symbol: "ETH",
      price: 52000,
      change: 2.35,
    },
    tether: {
      name: "Tether",
      symbol: "USDT",
      price: 52000,
      change: 2.35,
    },
    binance: {
      name: "Binance",
      symbol: "BTC",
      price: 52000,
      change: 2.35,
    },
    dogecoin: {
      name: "Dogecoin",
      symbol: "DGC",
      price: 52000,
      change: 2.35,
    },
    a1: {
      name: "Ethereum",
      symbol: "ETH",
      price: 52000,
      change: 2.35,
    },
    a2: {
      name: "Tether",
      symbol: "USDT",
      price: 52000,
      change: 2.35,
    },
    a3: {
      name: "Binance",
      symbol: "BTC",
      price: 52000,
      change: 2.35,
    },
    a4: {
      name: "Dogecoin",
      symbol: "DGC",
      price: 52000,
      change: 2.35,
    },
  };

  return (
    <div className="graph-container">
      <div className="graph-header">
        <div className="graph-title">
          <p className="graph-paragraph">
            Select the currency to view statistics
          </p>
        </div>
        <ul className="graph-card-wrapper">
          {Object.keys(cards).map((card) => (
            <li className="graph-card">{card}</li>
          ))}
        </ul>
        <button className="graph-card-button">
          <img src="src/assets/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>
    </div>
  );
}
