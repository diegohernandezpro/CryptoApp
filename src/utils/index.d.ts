declare module "@/utils" {
  export { api } from "./DataRetriever";
  export { FetchingStates } from "./FetchingStates";
  export { formatNum, formatPercentage, formatPrice } from "./NumberFormatter";
  export { default } from "./LoadingCircle";
  "";
  export type {
    Coin,
    DataTable,
    DataInfographic,
    CoinsResponse,
    TableCoin,
  } from "./DataTypes";
}
