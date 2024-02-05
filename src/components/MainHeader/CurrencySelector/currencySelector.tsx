import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "@/state/currency/currencySlice";
import { RootState, AppDispatch } from "@/state/store";


const CurrencySelector = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currency = useSelector((state: RootState) => state.currency);

  const handleSelectChange = (e) => dispatch(setCurrency(e.target.value));

  return (
    <div>
       Hello
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