import numeral from "numeral";

export const formatNum = (price: number | string, currencySymbol?: string) => {
  if (typeof price === "string" && price === "∞") {
    return "∞";
  } else if (currencySymbol) {
    return `${currencySymbol} ${numeral(price)
      .format("0[.]00 a")
      .toUpperCase()}`;
  }
  return `${numeral(price).format("0[.]00 a").toUpperCase()}`;
};