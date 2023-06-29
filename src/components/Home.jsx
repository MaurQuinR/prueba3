import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/Home.css";

import Context from '../Context';
import { Filters } from "./Filters";

export default function Home() {
  const { products, agregarAlCarro } = useContext(Context);
  const navigate = useNavigate();
  

  return (
    <div>
      <div>
        <Filters />
      </div>
      <div className="container">
        <div className="row">
          {products.map(product =>
            <div className="col-md-4" key={product.id}>
              <div className="card">
                <img src={product.img} className="card-img-top" alt={product.name}></img>
                <div className="card-body">
                  <div className="card-title">
                    <h2>{product.name}</h2>
                  </div>
                  <hr />
                  <h5>Categoria:</h5>
                  <ul>
                    {product.category.map((categorys, i) => (
                      <li key={i}>{categorys}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer bg-transparent">
                  <h2>${product.price}</h2>
                  <div className="buttons-card">
                    <button type="button" className="btn btn-success" onClick={() => navigate(`/products/${product.id}`)}>Ver Más</button>
                    <button type="button" className="btn btn-warning" onClick={() => agregarAlCarro(product)}>Añadir</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
