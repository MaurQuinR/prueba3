import React, { useContext, useState, useEffect } from "react";
import Context from "../Context";
import axios from "axios";

import "../assets/css/Perfil.css";

export default function Perfil() {
  const { setUsuario: setUsuarioGlobal, carrito, agregarAlCarro } = useContext(Context);
  const [usuario, setUsuarioLocal] = useState({});
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [productos, setProductos] = useState([]);

  const getUsuarioData = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/usuarios";
    const token = localStorage.getItem("token");

    try {
      const { data } = await axios.get(urlServer + endpoint, {
        headers: { Authorization: "Bearer " + token },
      });
      setUsuarioGlobal(data);
      setUsuarioLocal(data);
    } catch (error) {
      const message = error.response?.data || "Error al obtener los datos del usuario";
      alert(message + " 🙁");
      console.log(message);
    }
  };

  useEffect(() => {
    getUsuarioData();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const producto = {
      id: Math.random().toString(36).substr(2, 9),
      name: name,
      desc: desc,
      price: price,
      category: category.split(","),
      img: img,
    };

    try {
      agregarAlCarro(producto);
      alert("Producto agregado exitosamente");
      setProductos([...productos, producto]);
      setName("");
      setDesc("");
      setPrice(0);
      setCategory("");
      setImg("");
      
      
    } catch (error) {
      console.error(error);
      alert("Error al agregar el producto");
    }
  };

  return (
  
    <div className="publicacion">
       <div className="py-3">
        <h1>
          Bienvenido <span className="fw-bold">{usuario.email}</span>
        </h1>
       
      </div>
      <p>Sube y visualiza tu nuevo producto en el carro de compras</p>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="desc">Descripción:</label>
          <textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Categoría:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="fotocarro">
          <label htmlFor="img">Imagen:</label>
          <input
            type="text"
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
}
