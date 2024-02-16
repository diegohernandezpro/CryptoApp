import { AppDispatch, RootState } from "@/state/store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "@/state/infographic/infographicSlice";
import { Slider } from "./Slider";

export default function Infographic() {
  const { coinsData } = useSelector((state: RootState) => state.infographic);
  const currency = useSelector((state: RootState) => state.currency);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch, currency]);

  if (!coinsData) return null;

  return (
    <header className="header-info">
      <ul className="flex justify-center gap-8 w-screen">
        <li className="info-item">
          <img src={"/src/assets/flash-cricle.svg"} alt="flash-circle" />
          <span className="text-info-muted">Coins</span>
          <span>{coinsData?.numCoins}</span>
        </li>

        <li className="info-item">
          <img src={"/src/assets/exchange-icon.svg"} alt="exchange-icon" />
          <span className="text-info-muted">Exchanges</span>
          <span>{coinsData?.numExchange}</span>
        </li>

        <li className="info-item">
          <img src={"/src/assets/up-arrow.svg"} alt="bitcoin-icon" />
          <span>{coinsData?.formattedMarketCap}</span>
        </li>

        <li className="info-item">
          <span>{coinsData?.formattedCoinVolume}</span>

          <Slider
            percentage={coinsData?.volumeVsMarketCap || 0}
            name="currency"
          />
        </li>

        <li className="info-item">
          <img src={"/src/assets/bitcoin.svg"} alt="bitcoin-icon" />
          <span>{`${coinsData?.formattedBitCap} %`}</span>{" "}
          <Slider percentage={coinsData?.formattedBitCap || 0} name="bitcoin" />
        </li>

        <li className="info-item">
          <img src={"/src/assets/etherum.svg"} alt="etherum-icon" />
          <span>{`${coinsData?.formattedEthCap} %`}</span>{" "}
          <Slider
            percentage={coinsData?.formattedEthCap || 0}
            name="ethereum"
          />
        </li>
      </ul>
    </header>
  );
}
