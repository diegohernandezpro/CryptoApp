type DataInfographic = {
  active_cryptocurrencies: number;
  ended_icos: number;
  market_cap_change_percentage_24h_usd: number;
  market_cap_percentage: object;
  markets: number;
  ongoing_icos: number;
  total_market_cap: object;
  total_volume: object;
  upcoming_icos: number;
  updated_at: number;
};

type DataTable = {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number | null;
  name: string;
  price_change_24h: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_24h: number;
  price_change_percentage_24h_in_currency: number;
  roi: null;
  sparkline_in_7d: { price: number[] };
  symbol: string;
  total_supply: number;
  total_volume: number;
};

type Coin = {
  image: string;
  name: string;
  symbol: string;
  price: string;
  percentChange: number;
  formattedPercentChange: string;
  clicked?: boolean;
};

type TimeFrame = {
  displayString: string;
  timeFrame: string;
  days: string;
  interval: string;
};

type TimeOptionValue = [string, string | "max", "daily" | "hourly"];

type TimeOptions = {
  [key: string]: TimeOptionValue;
};

type CoinsResponse = {
  coins: Coin[];
};

type DataGraph = {
  prices: number[];
  pricesLabels: number[];
  volumes: number[];
  volumeLabels: number[];
  avgPrice: string;
  avgVolume: string;
};

type ApiType = DataInfographic | CoinsResponse | DataTable | DataGraph;

export type {
  Coin,
  DataTable,
  DataInfographic,
  CoinsResponse,
  DataGraph,
  TimeFrame,
  TimeOptions,
};
export default ApiType;
