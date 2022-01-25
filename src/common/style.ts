export const combineStyles = (styles: Array<any>) => {
    let combined = {};
    styles.forEach(style => {
        if(typeof style === 'function') {
            combined = {...combined, ...style()};
        } else {
            combined = {...combined, ...style};
        }
    });
    return combined;
}