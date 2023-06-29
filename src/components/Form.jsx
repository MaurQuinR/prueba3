

function Form({ setTitulo, setImgSRC, setDescripcion, agregarPost }) {
  return (
    <div className="form">
      <div className="mb-2">
        <h6>Llena los campos con tus comentarios</h6>
        <label>Título</label>
        <input
          onChange={(event) => setTitulo(event.target.value)}
          className="form-control"
        />
      </div>
    <div className="mb-2">
        <label htmlFor="">URL de la imagen de la comrpra</label>
        <input
          onChange={(event) => {
            console.log(event.target.value);
            setImgSRC(event.target.value);
          }}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Descripción</label> <br />
        <textarea
          onChange={(event) => setDescripcion(event.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <div className="d-flex">
        <button onClick={agregarPost} className="btn btn-light m-auto">
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Form;
