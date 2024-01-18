import axios from "axios";

const mapsApi = axios.create({
  baseURL:
    "https://maps.googleapis.com/maps/api/geocode/json?address=misiones+134,+mar+del+plata,+BA&key=AIzaSyAf9qdKYg8ab1l1ufJaWJoE7SMC4gwuVtk",
});

export const obtenerMaps = () => mapsApi.get();
