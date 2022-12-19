import axios from "axios"

const baseUrl = "https://restcountries.com/v3.1"


export const API = {
  getAll: async () => axios.get(`${baseUrl}/all`),
  getItem: async (title) => axios.get(`${baseUrl}/name/${title}`),
};