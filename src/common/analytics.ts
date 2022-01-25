// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics, logEvent } from "firebase/analytics";
// import * as constants from "./constants";
// import { Wallet } from "./wallet"

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: constants.FIREBASE_ANALYTICS_API_KEY,
//   authDomain: constants.FIREBASE_ANALYTICS_AUTH_DOMAIN,
//   projectId: constants.FIREBASE_ANALYTICS_PROJECT_ID,
//   storageBucket: constants.FIREBASE_ANALYTICS_STORAGE_BUCKET,
//   messagingSenderId: constants.FIREBASE_ANALYTICS_MESSAGING_SENDER_ID,
//   appId: constants.FIREBASE_ANALYTICS_APP_ID,
//   measurementId: constants.FIREBASE_ANALYTICS_MEASUREMENT_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export function log(event: string, payload: any) {
//   console.log("common/analytics", { event, payload });
//   logEvent(analytics, event, payload);
// }

// // Authentication
// export function login(payload: {user: string}) {
//   log("login", payload);
// }

// export function login_silent(payload: {}) {
//   log("login_silent", payload);
// }

// export function login_redirect(payload: {user: string}) {
//   log("login_redirect", payload);
// }

// export function logout(payload: {}) {
//   log("logout", payload);
// }

// export function auth0_error(payload: {error: string}) {
//   log("auth0_error", payload);
// }

// // Wallet
// export function wallet_save(payload: Wallet) {
//   log("wallet_save", payload);
// }

// // Cart / Payment
// export function cart_add(payload: { name: string }) {
//   log("cart_add", payload);
// }

// export function cart_remove(payload: { name: string }) {
//   log("cart_remove", payload);
// }

// export function cart_view(payload: { eosn_id: string }) {
//   log("cart_view", payload);
// }

// export function cart_checkout(payload: { eosn_id: string }) {
//   log("cart_checkout", payload);
// }

// export function cart_payment_success(payload: { eosn_id: string, account: string, txid: string }) {
//   log("cart_payment_success", payload);
// }

// export function cart_payment_error(payload: { eosn_id: string, account: string, error: string }) {
//   log("cart_payment_fail", payload);
// }