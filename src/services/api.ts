import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-burguer-kenzie.herokuapp.com",
});
