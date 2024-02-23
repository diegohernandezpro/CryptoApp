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

export const formatPercentage = (
  percentage: number,
  noDecimalPlaces: boolean
) => {
  if (noDecimalPlaces) {
    return numeral(Math.abs(percentage)).format("0,0") + "%";
  }
  return numeral(Math.abs(percentage)).format("0.00") + "%";
};

export const formatPrice = (price: number): string => {
  let priceString: string = "";

  if (price !== null && price.toString().length < 3) {
    priceString = `${price}.00`;
  } else {
    priceString = `${numeral(price).format("0,0.00")}`;
  }

  return priceString;
};
