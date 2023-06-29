import React, { useContext } from 'react';
import { Filters } from "../components/Filters";
import '../assets/css/Products.css';
import Context from '../Context';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { products, agregarAlCarro } = useContext(Context);
  const { id } = useParams();
  console.log(id + 'id seleccionado');
  const productDetail = products.find((product) => product.id === id);
  console.log(id + 'id pasado por url');

  return (
    <div className='contenedor'>
      <Filters />
      
        <div className="card mb-1">
          <div className="row g-0">
            <div className="col align-self-start">
              <img src={productDetail.img} className="img-fluid rounded-start" alt={productDetail.name} />
            </div>
            <div className="col align-self-start">
              <div className="card-body">
                <h3 className="card-title">{productDetail.name}</h3>
                <hr />
                <p className="row">{productDetail.desc}</p>
                <ul>
                  {productDetail.category.map((categorys, i) => (
                    <li key={i}>{categorys}</li>
                  ))}
                </ul>
                <div className="buttons">
                  <h2>${productDetail.price}</h2>
                  <button type="button" className="btn btn-danger" onClick={() => agregarAlCarro(productDetail)}>Añadir 🛒</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}
