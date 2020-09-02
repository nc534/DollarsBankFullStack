import axios from "axios";

// ! URL endpoint for database server
export const API = "http://localhost:8080";

export async function register(user) {
  const res = await axios.post(API + "/signup", user);
  console.log(res);
}

export async function login(user) {
  // TODO logic for updating the global application state upon successful login.
  console.log(user);
  return user;
}

export function logout() {
  // TODO logout logic.
  return null;
}
