import axios from "axios";

const apiProduct = axios.create({
    baseURL: "http://127.0.0.1:3000/api/products/",
    withCredentials: true
})

export default apiProduct;