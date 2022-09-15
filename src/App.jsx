import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
//Arriba importamos las tareas 
function App(){
  //Ahora App tiene el arreglo de tareas 
  //Es para subirlo a un nivel y que TaskForm pueda agregar nuevos datos


  return (
  <main className="bg-zinc-900 h-screen">
   <div className="container mx-auto p-10">
    <TaskForm/>
    <TaskList/>
    </div>
    </main>
  )
}
export default App