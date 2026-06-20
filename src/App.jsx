import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navbar from "./component/Navbar";
// import './App.css'
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [finish, setfinish] = useState(true)
  useEffect(() => {
    let todosString = localStorage.getItem("todos")
    if(todosString){
      let saveto = JSON.parse(localStorage.getItem("todos"));
      setTodos(saveto)
    }
  }, []);

  const savetoLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(params));
  };
  const togglefinish = (params) => {
    
  }
  

  const handleEdit = (e, id) => {
    let t = todos.filter(i=>i.id === id) 
    setTodo(t[0].todo)

    let newTodos = todos.filter((item) => {
      return (item.id !==id);
    });
    setTodos(newTodos);
    savetoLS(newTodos);
  };
  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return (item.id !==id);
    });
    setTodos(newTodos);
    savetoLS(newTodos);
  };
  const handleAdd = () => {
    let newTodos=[...todos, { id: uuidv4(), todo, isComplete: false }];
    setTodos(newTodos)
    setTodo("");
    savetoLS(newTodos);
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(`this id is ${id}`);
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
    savetoLS(newTodos);
  };

  return (
    <>
      <Navbar />

      <div className="container bg-slate-200 my-5 rounded-xl p-5 min-h-[80vh] w-[90vw] mx-auto ">
        <div className="addTodos my-5">
          <h1 className="text-lg font-bold">Add Your todo</h1>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-1/2"
          />
          <button
            onClick={handleAdd} disabled ={todo.length<3}
            className="bg-slate-800 disabled:bg-slate-700 hover:bg-slate-950 p-3 py-1 text-sm  font-bold text-white rounded-md mx-6"
          >
            Add
          </button>
        </div>
        <input onChange={togglefinish} type="checkbox" checked={finish} /> Show Finish 
        <h1 className="font-bold text-lg">your todos</h1>
        <div className="todos">
          {todos.length === 0 && <div>No Todo Display</div>}
          {todos.map((item) => {
            return (
              <div
                key={item.id}
                className="todo flex justify-between w-1/4 my-3"
              >
                <div className="flex gap-5">
                  <input
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={item.isComplete}
                    name={item.id}
                    id=""
                  />
                  <div className={item.isComplete ? "line-through" : ""}>
                    {item.todo}
                  </div>
                </div>
                <div className="button">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="bg-slate-800 hover:bg-slate-950 p-3 py-1 text-sm  font-bold text-white rounded-md mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="bg-slate-800 hover:bg-slate-950 p-3 py-1 text-sm  font-bold text-white rounded-md mx-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
