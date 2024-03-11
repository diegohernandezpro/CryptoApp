export { useCurrency } from "./currency/currencySlice.tsx";
export { useIsDark } from "./theme/themeSlice.tsx";
export { getData as getTableData, useTable } from "./table/tableSlice";
export {
  getData as getCardsData,
  useCards,
  setConverterFrom,
  setConverterTo,
  setAmount,
  setConvertedAmount,
} from "./cards/cardsSlice";
export type { AppDispatch, RootState } from "./store";
