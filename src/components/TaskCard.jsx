import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext';

function TaskCard({task}) {
const {deleteTask} = useContext(TaskContext);
  return (
        <div className="bg-gray-800 text-white p-4 rounded-md capitalize">
            <h1 className="text-xl font-bold">{task.title}</h1>
            <p className="text-gray-500 text-sm">{task.description}</p>
            <button className="bg-red-500 px-2 py-1 rounded-m mt-4 rounded-md hover:bg-red-400" onClick={()=>deleteTask(task.id)}//Una funcion fantasma que invoca un parametro este se rellena con el evento y dentro de los parentesis ingresamos el dato que deseamos solicitar
            >
              Eliminar
            </button>
            </div>
  )
}

export default TaskCard;