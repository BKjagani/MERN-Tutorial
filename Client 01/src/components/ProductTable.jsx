import React, { useEffect, useState } from "react";
import { fetchData, deleteProduct } from "../utils/api";
import EditProductModal from "./EditProductModal";

function ProductTable() {
  const IMAGE_URL = "http://127.0.0.1:3000/uploads";
  const [productList, setProductList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [editObj, setEditObj] = useState({})

  useEffect(() => {
    const main = async () => {
      const response = await fetchData();
      setProductList(response);
    };
    main();
    setRefresh(false);
  }, [refresh]);

  async function handleDelete(id) {
    const response = await deleteProduct(id);
    setRefresh(true);
  }

  function handleUpdate(id){
   const obj = productList.find((ele) => ele._id === id)
   setEditObj(obj)
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Sr no.</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productList.length > 0 &&
                  productList.map((product, index) => {
                    return (
                      <tr key={product._id}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={`${IMAGE_URL}/${product.image}`}
                            alt=""
                            style={{ height: "70px" }}
                          />
                        </td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>
                          <button
                            className="btn text-danger fs-3"
                            onClick={() => {
                              handleDelete(product._id);
                            }}
                          >
                            <i className="bi bi-trash3-fill"></i>
                          </button>
                          <button
                            onClick={() => {handleUpdate(product._id)}}
                            className="btn text-primary fs-3"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i className="bi bi-pencil-square"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <EditProductModal  editObj={editObj}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
