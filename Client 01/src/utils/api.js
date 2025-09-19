import axios from "axios";

const PRODUCT_GET_API = "http://127.0.0.1:3000/api/getproduct";

const PRODUCT_DELETE_API = "http://127.0.0.1:3000/api/deleteproduct"

const UPDATE_PRODUCT_API = "http://localhost:3000/api/updateproduct";

export async function fetchData() {
  try {
    const response = await axios.get(PRODUCT_GET_API);
    return response?.data?.products;
    
  } catch (error) {
    console.log(error)
  }
}


export async function deleteProduct(id) {
  try {
    const response = await axios.delete(`${PRODUCT_DELETE_API}/${id}`)
    return response.data
  } catch (error) {
      console.log(error)
      
    }
}

export async function updateProduct(id, obj) {
  try {
    const response = await axios.put(`${UPDATE_PRODUCT_API}/${id}`, obj, {
      headers : {
        "Content-Type" : "multipart/form-data"
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}