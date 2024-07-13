import axios from "axios";
import { API_URL } from "./MovieApiKey";

export default axios.create({ baseURL: API_URL });
