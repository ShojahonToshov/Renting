import axios from "axios";

const api = axios.create({
  URL: "http://localhost:3000/user",
});
export default api;
