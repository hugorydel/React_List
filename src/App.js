import React from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  let state = {
    todos: [
      { id: 1, title: "Take the trash out", completed: false },
      { id: 2, title: "Dinner With Wife", completed: true },
      { id: 3, title: "Wash Dishes", completed: false },
    ],
  };

  return (
    <div className='App'>
      <Todos todos={state.todos} />
    </div>
  );
}

export default App;
