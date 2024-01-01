import { useState } from "react";
import "./style.css";

function generateid(){
  return Math.floor(Math.random()*100);
}

function App() {
const [todos,setTodos]=useState([]);
const [input, setinput]=useState("");

const handleSubmit =() =>{
  setTodos((todos)=>
    todos.concat({
      text: input,
      id: generateid(),
    })
  );
    setinput("");
  
  }

  const removeTodo =(id)=>
    setTodos((todos)=>todos.filter((t)=>t.id!==id))
  

  return (
   <div className="container">
   <h1 className="hadding">Todo</h1> <hr/>
   <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} placeholder="New Todo"/>
   <button onClick={handleSubmit}>Submit</button>

   <ul className="todos-list">
   {todos.map(({text,id})=>(
    <li kay={id} className="todo">
      <span>{text}</span>
      <button className="close" onClick={()=>removeTodo(id)}>X</button>
    </li>)
   )}

   </ul>
   </div>
  );
}

export default App;
