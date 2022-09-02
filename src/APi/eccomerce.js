import axios from "axios";

const BaseURL = "https://ecomerce-master.herokuapp.com/api/v1";

const token = window.sessionStorage.getItem("token") || "";
const config = {
  headers: { Authorization: `JWT ${token}` },
};

const ecomerceApi = axios.create({ baseURL: BaseURL });
const LoginUser = (data) => axios.post(`${BaseURL}/login`, data);
const RegisterUser = (data) => axios.post(`${BaseURL}/signup`, data);
const getSingleUser = (id) => axios.get(`${BaseURL}/user/${id}`, config);

const Createproduct = (data) =>
  axios.post(`${BaseURL}/item`, {
    headers: { Authorization: `JWT ${token}` },
    body: data,
  });

export { ecomerceApi, LoginUser, RegisterUser, getSingleUser, Createproduct };
