
import  React,{ useState } from "react";
import './App.css';

function App() {
  const [todos,setTodos]=useState([]);
  const [todo,setTodo]=useState('');
  const addItem=()=>{
    setTodos([...todos,todo]);
    setTodo('');
  }
  const remove=(index)=>{
    const newTask=[...todos]
    newTask.splice(index,1)
    setTodos(newTask)

  }
  return (
    <div className="main">
      <div className="header"><h1>Todo App</h1></div>
      <div className="inputSection">
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type='text' placeholder="add text....."/>
        <button className="btnAdd"  onClick={addItem}>Add</button>
      </div>
      
      {todos.map((value) => (
        <div className="deleteSection">
          <span>{value}</span>
          <button className="btnRemove" onClick={remove}>Delete</button>
        </div>
      ))}
    </div>
    
  );
}

export default App