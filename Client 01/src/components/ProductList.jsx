import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const PRODUCT_GET_API = "http://127.0.0.1:3000/api/getproduct";
  const IMAGE_URL = "http://127.0.0.1:3000/uploads"
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(PRODUCT_GET_API);
      setProductList(response.data.products);
    }
    fetchData()
  }, []);

  return (
    <div>
      <div className="container-fluid my-4">
        <div className="row d-flex justify-content-center">
          {productList.length > 0 &&
            productList.map((product) => (
              <div className="col-3 my-2" key={product._id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={`${IMAGE_URL}/${product.image}`} className="card-img-top" alt="..."  style={{height : "200px"}} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                     {product.description}
                    </p>
                    <h5>Price : {product.price}</h5>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
