import "../../styles/index.css"; 
import { FaXmark } from "react-icons/fa6";

export const ListaTareas = ({ tareasAgregadas }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>
            <h2>Lista de tareas agregadas:</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        {tareasAgregadas.map((tareas) => (
          <tr key={tareas.name}>
            <td>
              {tareas.name} 
              <FaXmark className="icon" type="button" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaTareas;
