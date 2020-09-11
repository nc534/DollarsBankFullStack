import axios from "axios";

// ! URL endpoint for database server
const API = "http://localhost:8080";
export const endpoints = {
  register: "/signup",
  login: "/login",
  account_create: "/addacct",
  getAccounts: "/showAllAcct",
  main: "/main",
  makeDeposit: "/makeDeposit",
  makeWithdrawal: "/makeWithdrawal",
  makeTransfer: "/makeTransfer",
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
 * Retrieves all accounts for a specified customer.
 * @param {String} id The customer ID to retrieve accounts for.
 * @returns An array of accounts.
 */
export async function getAccounts(id) {
  const res = await axios.get(`${API}${endpoints.getAccounts}/${id}`);
  // TODO conditional failure.
  const accounts = res.data;
  // Converts the provided value in cents to a display value of dollars.
  for (const account of accounts) {
    account.balance /= 100.0;
  }
  return res.data;
}

/**
 * Makes a deposit to the specified account.
 * @param {String} id ID of account to deposit into.
 * @param {Number} amount Amount of money (cents) to deposit.
 * @param {String} memo Note regarding the deposit's association.
 */
export async function makeDeposit(id, amount, memo) {
  const res = await axios.post(`${API}${endpoints.makeDeposit}`, {
    targetAccId: id,
    amount,
    memo,
  });
  if (res.data !== "Deposit done") {
    // TODO conditional failure.
  }
  return res.data;
}

/**
 * Makes a withdrawal from the specified account.
 * @param {String} id ID of account to withdraw from.
 * @param {Number} amount Amount of money (cents) to withdraw.
 * @param {String} memo Note regarding the withdrawal's association.
 */
export async function makeWithdrawal(id, amount, memo) {
  const res = await axios.post(`${API}${endpoints.makeWithdrawal}`, {
    sourceAccId: id,
    amount,
    memo,
  });
  if (res.data !== "success") {
    // TODO conditional failure.
  }
  return res.data;
}

/**
 * Makes a transfer between the specified accounts.
 * @param {Number} idSrc ID of account to withdraw from.
 * @param {Number} idDest ID of account to deposit to.
 * @param {Number} amount Amount of money (cents) to transfer.
 * @param {String} memo Note regarding the transfer's association.
 * @param {String} name Name of the account to transfer to.
 * @returns {Promise<Boolean>} A Promise resolving to a Boolean.
 */
export async function makeTransfer(idSrc, idDest, amount, memo, name) {
  const res = await axios.post(`${API}${endpoints.makeTransfer}`, {
    sourceAccId: idSrc,
    targetAccId: idDest,
    amount,
    memo,
    nameVerify: name,
  });
  if (res.data !== "Transaction made") {
    // TODO conditional failure.
    return false;
  }
  return true;
}
