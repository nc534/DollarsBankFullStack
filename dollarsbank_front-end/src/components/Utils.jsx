import axios from "axios";

// ! URL endpoint for database server
const API = "http://localhost:8080";

export async function register(user) {
  const res = await axios.post(API + "/signup", user);
  console.log(res);
}

export async function login(user) {
  // TODO logic for updating the global application state upon successful login.
  const res = await axios.post(API + "/login", user);
  return res.data;
}

export function logout() {
  // TODO logout logic.
  return null;
}
