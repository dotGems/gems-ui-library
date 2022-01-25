const localStorage = global.localStorage;

export const DOTGEMS_CART = "dotgems_cart";
export const DOTGEMS_LANGUAGE = "dotgems_language";
export const DOTGEMS_PFP = "dotgems_pfp";
export const DOTGEMS_WALLET = "dotgems_wallet";

export function set(key: string, value: any) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        localStorage.setItem(key, value);
    }
}

export function add(key: string, value: any) {
    try {
        set(key, Object.assign(get(key) || {}, value));
    } catch (err) {
        console.error("common/storage::add", {err, key, value});
    }
}

export function get(key: string) {
    const value = localStorage.getItem(key);
    if ( !value ) return value;
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
}

export function remove(key: string) {
    localStorage.removeItem(key);
}