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

export const formatPrice = (price: number, tablePrice?: boolean): string => {
  let priceString: string = "";

  if (tablePrice) {
    if (price !== null && price.toString().length < 3) {
      priceString = `${price}.00`;
    } else if (price !== null && price < 1) {
      priceString = `${numeral(price).format("0.00000")}`;
    } else {
      priceString = `${numeral(price).format("0,0.00")}`;
    }
  } else {
    if (price !== null && price < 1) {
      priceString = `${numeral(price).format("0.0000")}`;
    } else if (price !== null && price === 1) {
      priceString = `${numeral(price).format("0.00")}`;
    } else {
      priceString = `${numeral(price).format("0,0")}`;
    }
  }

  return `${priceString}`;
};

export const formatSliderPrice = (price: number | string): string => {
  if (typeof price === "string" && price === "∞") {
    return "∞";
  }
  return `${numeral(price).format("0[.]0 a").toUpperCase()}`;
};

export const formatSparklineData = (data: number[]): number[] => {
  return data.filter((_, index) => index % 8 === 0);
};

export const formatAmount = (amount: string): string => {
  return `${numeral(amount).format("0,0")}`;
};

export const formattedStringToNumber = (amount: string): number => {
  return Number(amount.split(",").join(""));
};
