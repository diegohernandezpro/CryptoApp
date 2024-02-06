import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "@/state/currency/currencySlice";
import { RootState, AppDispatch } from "@/state/store";


const CurrencySelector = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currency = useSelector((state: RootState) => state.currency);

  const handleSelectChange = (e) => dispatch(setCurrency(e.target.value));

  return (
    <div className="flex justify-around items-center w-[108px] bg-sec-blue-blacksih border border-theme-dark-border rounded-md overflow-auto gap-2 py-3 px-4 text-theme-dark cursor-pointer">
      <img src="src/assets/currency-selector.svg" alt="currency-selector-icon" className="w-5 h-5"/>
      <select className="bg-sec-blue-blacksih font-mono appearance-none cursor-pointer" value={currency.currency} onChange={handleSelectChange}>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
      </select>
      <img src="src/assets/down-selector-arrow.svg" alt="down-arrow-icon" />
    </div>
    // <Container>
    //   <Icon>{currency.symbol}</Icon>
    //   <StyledSelect value={currency.type} onChange={handleSelectChange}>
    //     <option value="USD">USD</option>
    //     <option value="GBP">GBP</option>
    //     <option value="EUR">EUR</option>
    //     <option value="BTC">BTC</option>
    //     <option value="ETH">ETH</option>
    //   </StyledSelect>
    // </Container>
  );
};

export default CurrencySelector;