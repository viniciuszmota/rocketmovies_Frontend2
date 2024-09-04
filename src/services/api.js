import axios from "axios"

export const api = axios.create({
  baseURL: "https://movie-api-stage08.onrender.com",
})
