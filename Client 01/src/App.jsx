import React from "react";
import ProductAdd from "./components/ProductAdd";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import ProductTable from "./components/ProductTable";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<ProductAdd />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/producttable" element={<ProductTable />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
