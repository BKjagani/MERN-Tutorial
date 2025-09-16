import axios from "axios";

const PRODUCT_GET_API = "http://127.0.0.1:3000/api/getproduct";

const PRODUCT_DELETE_API = "http://127.0.0.1:3000/api/deleteproduct"

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