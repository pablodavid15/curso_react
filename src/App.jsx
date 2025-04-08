import AddTasks from "./assets/components/AddTasks";
import Tasks from "./assets/components/Tasks";
import { defineConfig } from 'vite'


function App() {
    return (
      <div>
        <h1 className="title">Gereciador de Tarefas</h1>

        <AddTasks />
        
        <Tasks />
      </div>
    );
  }

export default App
