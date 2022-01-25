/**
 * Formats the fee rate percentage from 0.XXDDDDDDDDDDDDDDD
 * to XX.DD%.
 *  
 * @param rate long string fee rate
 * 
 * @returns Formatted percentage string
 */
export const feeRateToPercentage = (rate: string) => {
    return (parseFloat(rate)*100).toFixed(2)+"%";
}

/**
 * Takes in a string containing an amount and a currency and returns
 * those in separate strings (array[0] for the amount and array[1]
 * for currency).
 * 
 * @param listingPrice
 * 
 * @returns An array with the amount and currency as strings 
 */
export const splitPriceAndCurrency = (listingPrice: string) : Array<string> => {
    return listingPrice.split(" ");
}

/**
 * Utility function to copy some data to the user's clipboard.
 * A callback function can be provided to chain logic.
 * 
 * @param data Data to be copied to clipboard
 * @param callback Function called on completion (or failure)
 */
export const copyToClipboard = (data: any, callback: Function = () => {}) => {
    if(window.isSecureContext) {       
        console.log("Data has been copied to clipboard");
        navigator.clipboard.writeText(JSON.stringify(data));
        callback();
    } else {
        const err = new Error("Couldn't copy data to clipboard, context is not secure.")
        console.error(err.message);
        callback(err);
    }
}
