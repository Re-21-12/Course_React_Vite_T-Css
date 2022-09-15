import {createContext, useState, useEffect} from 'react';
import {tasks as data} from "../data/tasks";

export const TaskContext = createContext()
export function TaskContextProvider(props) {

    const[tasks, setTasks] = useState([]);

    function createTask(task){
        setTasks([...tasks,{
          title: task.title,
          id:tasks.length,//si el tamanio de la matriz aumenta el id tambien 
          description: task.description
        }])//[...Valor]copiar todos los valores de x arreglo y segundo parametro el valor a agregar
      }

      function deleteTask(taskId){
        setTasks(tasks.filter(task => task.id !== taskId))//Revisa el arreglo como unu for y si el parametro que se le paso se encuentra con el que el distinto lo deja si no lo elimina
          }

          useEffect(()=>{
            setTasks(data)
            },[]);

  return (//Renderiza un componente de JSX
    
    <TaskContext.Provider value={{
        tasks,
        deleteTask,
        createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
