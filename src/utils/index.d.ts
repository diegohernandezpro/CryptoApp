declare module "@/utils" {
  export { api } from "./DataRetriever";
  export { FetchingStates } from "./FetchingStates";
  export {
    formatNum,
    formatPercentage,
    formatPrice,
    formatVolume,
    formatSliderPrice,
    formatSparklineData,
  } from "./NumberFormatter";
  export { default } from "./LoadingCircle";
  "";
  export type {
    Coin,
    DataTable,
    DataInfographic,
    CoinsResponse,
    TableCoin,
    TimeFrame,
    TimeOptions,
    SearchType,
  } from "./DataTypes";
}
