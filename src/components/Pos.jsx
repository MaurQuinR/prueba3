

import React from 'react';
import '../assets/css/Form.css'
import '../assets/css/Pos.css';

function Pos({ post, like, eliminarPost }) {
  const { id, titulo, url:img, descripcion, likes } = post;

  const handleLike = () => {
    like(id);
  };

  const handleEliminarPost = () => {
    eliminarPost(id);
  };

  return (
    
    <section className="card">
   
    
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{descripcion}</p>
      <img className="card-img-top p-4" src={img}/>
      <div className="d-flex justify-content-between">
        <div>
          <i
            onClick={handleLike}
            className={`fa-heart fa-xl ${likes ? 'fa-solid' : 'fa-regular'}`}
          ></i>
        </div>
        <div>
          <button className="btn btn-primary btn-sm" onClick={handleEliminarPost}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Pos;
