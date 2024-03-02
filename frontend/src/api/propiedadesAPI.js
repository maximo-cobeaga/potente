import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const propiedadesApi = axios.create({
  baseURL: `${import.meta.env.VITE_URL_API}/propiedad/`,
});
export const obtenerPropiedades = () => propiedadesApi.get("/", headers);

const amenitiesAPI = axios.create({
  baseURL: `${import.meta.env.VITE_URL_API}/amenities/`,
});
export const obtenerAmenities = () => amenitiesAPI.get("/", headers);

const tiposAPI = axios.create({
  baseURL: `${import.meta.env.VITE_URL_API}/tipos/`,
});

export const obtenerTipos = () => tiposAPI.get("/", headers);
