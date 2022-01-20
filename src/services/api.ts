import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenzie-burguer-api-marta.herokuapp.com",
});
