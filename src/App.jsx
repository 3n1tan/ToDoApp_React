
import TodoForm from "./components/TodoForm"
import ToDoLists from "./components/ToDoLists"
import { useState } from "react"

function App() {
    const [taskLists, setTaskLists] = useState([
      {
        id: 1,
        description: "Go to the movies"
      },
      {
        id: 2,
        description: "Water the flower"
      },
    ]);

    const handleFormSubmit = (data) => {
      console.log(data);
      setTaskLists([...taskLists, {...data, id: taskLists.length + 1}]);
    }
  return (
    <div>
      App will be here!!!
      <TodoForm handleFormSubmit={handleFormSubmit} />
      <ToDoLists lists={taskLists}  onDelete={(id)=> setTaskLists(taskLists.filter((e)=> e.id !== id))}/>
      
    </div>

  )
}

export default App
