import { useState, useEffect } from "react";
import { AppDispatch, RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "@/state/cards/cardsSlice";

export default function Graphs() {
  const dispatch = useDispatch<AppDispatch>();
  const currency = useSelector((state: RootState) => state.currency);

  const { coinsData } = useSelector((state: RootState) => state.cards);

  const testArray = [0, 1, 2, 3, 4];

  useEffect(() => {
    dispatch(getData());
  }, [dispatch, currency]);

  if (!coinsData) return null;

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
