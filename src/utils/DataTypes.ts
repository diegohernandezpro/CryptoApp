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

type Coin = {
  id: string;
  name: string;
  api_symbol: string;
  large: string;
  thumb: string;
  symbol: string;
  market_cap_rank: number | null; // Assuming market_cap_rank can be null
  // Add other properties if present in your data
};

type CoinsResponse = {
  coins: Coin[];
};

type ApiType = DataInfographic | CoinsResponse;

export type { Coin };
export default ApiType;
