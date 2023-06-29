import { useContext} from "react";

import Context from "../Context";

export default function Carrito(totalCar) {
  
    const { carrito, sumarProduct, restarProduct, eliminarProduct } = useContext(Context);
    console.log(carrito)
  
    const totalCarrito = carrito.reduce((previusValue, {count, price}) => previusValue + (price * count), 0);
    
    
    return (
      <div>
        <div className="container">
          
            <section className="carrito">
              <h2>Detalles de la Compra:</h2>
              {carrito.map((c, i) => (
                <div className="row" key={i}>
                  <div className="carrito-content">
                    <div className="col-md-9">
                      <div className="product-carrito"> 
                        <img src={c.img} alt={c.name} />
                        <h3>{c.name}</h3>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="botonera" key={i}>
                        <div>
                        <h5>${c.price}</h5>
                        </div>
                        <button type="button" className="btn btn-info" onClick={() => restarProduct(i)}> - </button>
                        
                        <button type="button" className="btn btn-primary" onClick={() => sumarProduct(i)}> + </button>
                        <h5>{c.count}</h5>
                        <button type="button" className="btn btn-danger"  onClick={() => eliminarProduct(i)}>Eliminar</button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
              <h2>Total ${totalCarrito}</h2>
              <button type="button" className="btn btn-success">Ir a pagar</button>
            </section>
          
        </div>
      </div>
    )
  }