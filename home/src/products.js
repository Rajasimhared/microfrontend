const API_SERVER = "http://localhost:9000";

export const getProducts = () => fetch(`${API_SERVER}/products`).then(response => response.json());

export const getProductById = (id) => fetch(`${API_SERVER}/products/${id}`).then(response => response.json());

export const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
})