import axios from "axios";

const API =axios.create({baseURL:"http://localhost:3001"})
export const fetchProducts=()=> API.get("/product");
export const createProduct=(newProduct)=> API.post("/product",newProduct);
export const fetchProduct=(id)=> API.get(`/product/${id}`);
export const upvote=(id)=> API.patch(`/product/${id}/upvote`);
export const comment=(value,id)=> API.post(`/product/${id}/comment`,{value});