export const feeRateToPercentage = (rate: string) => {
    return (parseFloat(rate)*100).toFixed(2)+"%";
}