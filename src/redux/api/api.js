import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, DELETE_PRODUCT_CART, GET_CART, GET_PRODUCT, POST_PRODUCT_CART, UPDATE_PRODUCT_CART} from "../constant";
import axios from "axios";

export const getproduct = createAsyncThunk('getproduct', async () => {
    return axios.get(BASE_URL + GET_PRODUCT).then((res) => {
        const data = res.data
        return {
            data
        }
    })
})

export const postproduct = createAsyncThunk('postproduct', async (data1) => {
    return axios.post(BASE_URL + POST_PRODUCT_CART, data1).then((res) => {
        const data = res.data
        return data
    })
})

export const getcart = createAsyncThunk('getcart', () => {
    return axios.get(BASE_URL + GET_CART).then((res) => {
        const data = res.data
        return {
            data
        }
    })
})

export const updatecart = createAsyncThunk('updatecart', (data) => {
    console.log(data);
    return axios.put(BASE_URL + UPDATE_PRODUCT_CART + data.id, data).then((res) => {
        const data = res.data
        return data

    })
})

export const deletecart = createAsyncThunk('deletecart', (id) => {
    return axios.delete(BASE_URL + DELETE_PRODUCT_CART + id).then((res) => {
        return id
    })
})

