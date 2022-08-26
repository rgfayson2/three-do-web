import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  const {tasklist, setTaskList} = useState()
  return (
   <>
   
   <h1>Three-do</h1>
    <TodoList tasklist={tasklist} setTaskList={setTaskList} />
   </>
   
  );
}

export default App;
