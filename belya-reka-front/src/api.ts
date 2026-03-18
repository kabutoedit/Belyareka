import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL || "https://belayareka.anti-flow.com/";
export const $api = axios.create({ baseURL: `${API_URL}/api` });
