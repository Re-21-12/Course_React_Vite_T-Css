import {useState, useContext} from 'react';
import {TaskContext} from '../context/TaskContext';
function TaskForm() {

const [title,setTitle]=useState("");
const [description,setDescription]=useState("");
const {createTask} = useContext(TaskContext)
const handleSubmit = (e) =>{
    e.preventDefault(); //Elimina el estado original
    createTask({
        title,//Usamos un objeto que debera recibir dos valores
        description
    });//este pasa el valor del new task a app para agregarlo a los valores de tasklist
setTitle('')//para limpiar luego de escribir 
setDescription('')//esto es por el handlesubmit
};

    return (
    <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
                <h1 className="text-2xl font-bold text-white mb-3 text-center">Registra una tarea:</h1>
            <input className="bg-slate-300 p-3 w-full mb-2 rounded-md"placeholder="Ingresa tu tarea..."
            onChange={(e)=>setTitle(e.target.value)}
            value={title}//para que el input quede vacio
            autoFocus//para que aparezca para rellenar
            />
            <textarea className="bg-slate-300 p-3 w-full mb-2 rounded-md" placeholder="Escribe una descripcion..."
            onChange={e =>setDescription(e.target.value)}
            value={description}//para que description quede vacio
            ></textarea>
            <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">
                Guardar
            </button>
        </form>
    </div>
  );
}

export default TaskForm;