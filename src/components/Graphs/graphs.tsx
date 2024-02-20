// import { useState } from "react";

export default function Graphs() {
  // interface Card {
  //   name: string;
  //   symbol: string;
  //   price: number;
  //   change: number;
  // }

  // interface Cards {
  //   [key: string]: Card;
  // }

  // const cards: Cards = {
  //   bitcoin: {
  //     name: "Bitcoin",
  //     symbol: "BTC",
  //     price: 52000,
  //     change: 2.35,
  //   },
  //   ethereum: {
  //     name: "Ethereum",
  //     symbol: "ETH",
  //     price: 52000,
  //     change: 2.35,
  //   },
  //   tether: {
  //     name: "Tether",
  //     symbol: "USDT",
  //     price: 52000,
  //     change: 2.35,
  //   },
  //   binance: {
  //     name: "Binance",
  //     symbol: "BIN",
  //     price: 52000,
  //     change: 2.35,
  //   },
  //   dogecoin: {
  //     name: "Dogecoin",
  //     symbol: "DGC",
  //     price: 52000,
  //     change: 2.35,
  //   },
  //   a1: {
  //     name: "test1",
  //     symbol: "ETH",
  //     price: 52000,
  //     change: 2.35,
  //   },
  //   a2: {
  //     name: "test2",
  //     symbol: "USDT",
  //     price: 52000,
  //     change: 2.35,
  //   },
  //   a3: {
  //     name: "test3",
  //     symbol: "BTC",
  //     price: 52000,
  //     change: 2.35,
  //   },
  //   a4: {
  //     name: "test4",
  //     symbol: "DGC",
  //     price: 52000,
  //     change: 2.35,
  //   },
  // };

  // const [cardArray, setCardArray] = useState([
  //   Object.values(cards)[0],
  //   Object.values(cards)[1],
  //   Object.values(cards)[2],
  //   Object.values(cards)[3],
  //   Object.values(cards)[4],
  // ]);

  const testArray = [0, 1, 2, 3, 4];

  // const getNextCard = (currentIndex: number) => {
  //   console.log("🚀 ~ getNextCard ~ currentIndex:", currentIndex);

  //   const keys = Object.keys(cards);
  //   // console.log("🚀 ~ getNextCard ~ keys:", keys);
  //   const nextIndex = (currentIndex + 5) % keys.length;
  //   // console.log("🚀 ~ getNextCard ~ nextIndex:", nextIndex);
  //   // console.log("nextCard to Show: ", cards[keys[nextIndex]]);
  //   return cards[keys[nextIndex]];
  // };

  // const showNextCard = () => {
  //   setCardArray((prevCardArray) => {
  //     console.log("🚀 ~ setCardArray ~ prevCardArray:", prevCardArray);
  //     console.log("object.values(cards):", Object.values(cards));

  //     const newCardArray = [...prevCardArray];
  //     const firstCard = newCardArray.shift();
  //     console.log("🚀 ~ setCardArray ~ firstCard:", firstCard);

  //     if (firstCard === undefined) {
  //       return null;
  //     } else {
  //       console.log("object.values: ", Object.values(cards));

  //       newCardArray.push(getNextCard(Object.values(cards).indexOf(firstCard)));
  //     }

  //     return newCardArray;
  //   });
  // };

  return (
    <div className="graph-container">
      <div className="graph-header">
        <div className="graph-title">
          <p className="graph-paragraph">
            Select the currency to view statistics
          </p>
        </div>
        <ul className="graph-card-wrapper">
          {testArray.map((i) => (
            <li
              key={i}
              className="graph-card"
              // style={{ display: index === cardArray ? "block" : "none" }}
            >
              {testArray[i]}
            </li>
          ))}
        </ul>
        <button className="graph-card-button">
          <img src="src/assets/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>
    </div>
  );
}
