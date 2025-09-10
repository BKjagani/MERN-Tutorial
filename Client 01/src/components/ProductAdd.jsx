import React, { useState } from "react";
import axios from "axios";
  import { toast } from 'react-toastify';

function ProductAdd() {
  const POST_PRODUCT_API = "http://localhost:3000/api/postproduct";
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [image, setImage] = useState(null);

  function handleChange(e) {
    setFormData((preval) => {
      return { ...preval, [e.target.name]: e.target.value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        const response = await axios.post(
          POST_PRODUCT_API,
          { ...formData, image },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success(response.data.message)
        setFormData({ title: "", description: "", price: "" });
        setImage(null)
    } catch (error) {
        console.log(error)
        toast.error("Error In Post Product")
    }

  }

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-6 m-auto">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  aria-label="Title"
                  aria-describedby="basic-addon1"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <textarea
                  placeholder="Description"
                  className="form-control"
                  aria-label="With textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  aria-label="Price"
                  aria-describedby="basic-addon1"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAdd;
