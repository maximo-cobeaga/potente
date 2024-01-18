import axios from "axios";
const propiedadesApi = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});
export const obtenerPropiedades = () => propiedadesApi.get("/");
