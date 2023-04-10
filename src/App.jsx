import { useState } from "react";
import Modal from "./components/Modal";
function App() {
  const [clientes, setClientes] = useState([]);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  return (
    <>
      {/* Texto condicional en caso que no haya clientes, si hay clientes deberias de mostrar un componente con la info del cliente */}
      {clientes.length ? <h2>Hay clientes</h2> : <h2>No hay clientes</h2>}

      {/* Esto abre el modal */}
      {modal && <Modal setClientes={setClientes} setError={setError} />}
      <p onClick={() => setModal(true)}>Abrir modal</p>

      {/* Aca deberias poner un componente de error que suplante el h2 */}
      {error && <h2>Todos los campos son obligatorios</h2>}

      {clientes.map((cliente) => (
        <>
          {/* Aca deberias generar otro componente que renderice la data */}
          <h2>{cliente.nombre}</h2>
          <h2>{cliente.apellido}</h2>
        </>
      ))}
    </>
  );
}

export default App;
