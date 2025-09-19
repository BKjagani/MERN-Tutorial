import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { updateProduct } from "../utils/api"; 

function EditProductModal({editObj, isEdit, setIsEdit, setRefresh}) {
  
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
    await updateProduct(editObj._id, {...formData, image})
    setRefresh((true))
    try {
    } catch (error) {}
  }

  useEffect(() => {
     if (isEdit && editObj) {
    setFormData({
      title: editObj.title ?? "",
      description: editObj.description ?? "",
      price: editObj.price ?? ""
    });
    setIsEdit(false);
  }
  }, [isEdit])

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-3"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </form>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProductModal;
