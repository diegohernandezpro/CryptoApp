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
    try {
      console.log("in dev mode, fullURL is: " + fullUrl);
      console.log(
        "going to grab the following file: ./mocks/" + getfileName() + ".json"
      );
      const file = await import(`./mocks/${getfileName()}.json`);
      let data = file.default;
      console.log("🚀 ~ api ~ data:", data)
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
