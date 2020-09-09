import axios from "axios";

// ! URL endpoint for database server
const API = "http://localhost:8080";
export const endpoints = {
  register: "/signup",
  login: "/login",
  account_create: "/addacct",
  getAccounts: "/showAllAcct",
  main: "/main",
};

export async function register(user) {
  const res = await axios.post(API + endpoints.register, user);
  // If the user could not be created, return false.
  if (res.data.id === 0) return false;
  return res.data;
}

export async function login(user) {
  const res = await axios.post(API + endpoints.login, user);
  // If the login credentials are invalid, return false.
  if (res.data === "") return false;
  return res.data;
}

export function logout() {
  // TODO logout logic.
  return null;
}

/**
 * POSTs an Account object to the server.
 * @param {*} account The account to be sent.
 * @returns The created account. If already exists, returns false.
 */
export async function createAccount(account) {
  const res = await axios.post(API + endpoints.account_create, account);
  // TODO verification logic.
  // If the account could not be created, return false.
  if (res.data.id === 0) return false;
  return res.data;
}

/**
 * Retrieves all accounts the provided customer owns.
 * @param {*} customer The Customer object to retrieve accounts for. Requires only "id" field.
 * @returns An array of accounts.
 */
export async function getAccounts(customer) {
  const res = await axios.post(API + endpoints.getAccounts, customer);
  // TODO conditional failure.
  return res.data;
}
