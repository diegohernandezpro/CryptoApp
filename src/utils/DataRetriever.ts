import axios from "axios";

export async function api(url: string, search?: string) {
  // console.log("api() DataRetriever.ts mode: " + import.meta.env.MODE); // development
  const base = "https://api.coingecko.com/api/v3";
  const fullUrl = `${base}${url}${search || ""}`;
  console.log("DataRetriever fullUrl: " + fullUrl);

  const getfileName = () => {
    const fullUrlName = url.split("/").slice(1);
    const urlKey = fullUrlName[fullUrlName.length - 1];

    switch (urlKey) {
      case "market_chart":
        return "bitcoin.market_charts";
      case "history":
        return "bitcoin.history";
      default:
        return fullUrlName[fullUrlName.length - 1];
    }
  };

  if (import.meta.env.MODE === "development") {

    type Data = {
      active_cryptocurrencies: number,
      ended_icos: number,
      market_cap_change_percentage_24h_usd: number,
      market_cap_percentage: object,
      markets: number, 
      ongoing_icos: number, 
      total_market_cap: object,
      total_volume: object,
      upcoming_icos: number,
      updated_at: number
    }

    try {
      const file = await import(`./mocks/${getfileName()}.json`);
      const data: Data = file.default;
      return data;

    } catch (error) {
      console.error("Error loading mock data:", error);
      return { data: [] };
    }
  } else {
    const response = await axios(fullUrl);
    return response;
  }
}