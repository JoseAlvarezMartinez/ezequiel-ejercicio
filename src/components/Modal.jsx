import { useState } from "react";

const Modal = ({ setClientes, setError }) => {
  const [cliente, setCliente] = useState({ nombre: "", apellido: "" });

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.values(cliente).includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setClientes((clientes) => [...clientes, cliente]);
    setCliente({ nombre: "", apellido: "" });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          value={cliente.nombre}
          onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
          type="text"
          id="nombre"
        />
      </div>
      <div>
        <label htmlFor="apellido">apellido</label>
        <input
          value={cliente.apellido}
          onChange={(e) => setCliente({ ...cliente, apellido: e.target.value })}
          type="text"
          id="apellido"
        />
      </div>

      <button>Agregar cliente</button>
    </form>
  );
};

export default Modal;
