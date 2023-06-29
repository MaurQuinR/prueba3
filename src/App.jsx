import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Context from "./Context";
import Products from "./components/Products.jsx";
import Carro from "./views/Carro";
import MisCompras from "./views/Post";
import Navbar from "./components/Navbar";
import Registro from "./views/Registro";
import Login from "./views/Login";
import Perfil from "./views/Perfil";
import NoEncontrada from "./views/NoEncontrada";
import { Footer } from "./components/Footer";
import Home from "./components/Home";

function App() {
  const [usuario, setUsuario] = useState(null);
  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [filter, setFilter] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    const endPoint = "../public/products.json";
    const response = await fetch(endPoint);
    const data = await response.json();

    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const agregarAlCarro = ({ id, img, name, price, category, desc }) => {
    const findProduct = carrito.findIndex((p) => p.id === id);
    const product = { id, img, name, price, category, desc, count: 1 };

    if (findProduct >= 0) {
      carrito[findProduct].count++;
      setCarrito([...carrito]);
      console.log(carrito);
    } else {
      setCarrito([...carrito, product]);
    }
  };

  const sumarProduct = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const restarProduct = (i) => {
    carrito[i].count--;
    setCarrito([...carrito]);
  };

  const eliminarProduct = (i) => {
    const updatedCarrito = [...carrito];
    updatedCarrito.splice(i, 1);
    setCarrito(updatedCarrito);
  };
  

  return (
    <div className="App">
      <Context.Provider
        value={{
          products,
          setProducts,
          carrito,
          setCarrito,
          agregarAlCarro,
          sumarProduct,
          restarProduct,
          eliminarProduct,
          usuario,
          setUsuario,
          filter,
          setFilter,
          categories,
          setCategories,
        }}
      >
        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/carro" element={<Carro />} />
            <Route path="/registrarse" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
            {usuario && (
              <Route path="/posts" element={<MisCompras />} />
            )}
            <Route path="*" element={<NoEncontrada />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
      <Footer />
    </div>
  );
}

export default App;

