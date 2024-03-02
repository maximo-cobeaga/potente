import axios from "axios";

const contactoAPI = axios.create({
  baseURL: "http://217.196.62.173/api/contacto/",
});
export const enviarContacto = (p) => contactoAPI.post("/", p);
