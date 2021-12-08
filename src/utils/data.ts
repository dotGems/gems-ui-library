export const feeRateToPercentage = (rate: string) => {
    return (parseFloat(rate)*100).toFixed(2)+"%";
}

export const splitPriceAndCurrency = (listingPrice: string) : Array<string> => {
    return listingPrice.split(" ");
}