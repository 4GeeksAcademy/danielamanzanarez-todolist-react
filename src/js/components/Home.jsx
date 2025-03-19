
import ListaTareas from "./ListaTareas.jsx";
import { useState } from "react";
import "../../styles/index.css"; 
import React from "react";

function Home() {
  const [tareasItems, setTareasItems] = useState([]);
  const [newTarea, setNewTarea] = useState("");

  const crearTarea = (e) => {
    //alert(tarea);
	if (e.key === "Enter"){
	setTareasItems([...tareasItems, { name: newTarea, done: false }]);	
	}
  };
  const botonCrearTarea = () => {
    setTareasItems([...tareasItems, { name: newTarea, done: false }]);
  };
  const botonEliminarTarea = () => setTareasItems(tareasItems.slice(0, -1));

  const styleBoton = {
    backgroundColor: "black",
    border: "solid 2px purple",
    color: "violet",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "13px",
    width: "130px",
    padding: "5px",
    marginTop: "5px",
    marginLeft: "15px",
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <button style={styleBoton} onClick={botonCrearTarea}>
        Agregar Tarea
      </button>
      <button style={styleBoton} onClick={botonEliminarTarea}>Eliminar Tarea</button>
      <h2>Formulario de tarea:</h2>

	  <li>
	  <input
            type="text"
            placeholder="agrega una tarea"
			onKeyDown={crearTarea}
            onChange={(e) => setNewTarea(e.target.value)} //console.log(e.target.value)}
          />
		</li>

		<div className="numTareas">{tareasItems.length} tareas ingresadas</div>
      <ListaTareas tareasAgregadas={tareasItems} />

    </div>
  );
}

export default Home;
