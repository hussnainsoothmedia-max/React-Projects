import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navbar from "./component/Navbar";
// import './App.css'
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleEdit = () => {
   
  };
  const handleDelete = (e, id) => {
     let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = todos.filter((item) => {
      return (item.id = !id);
    });
    setTodos(newTodos);
  };
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isComplete: false }]);
    setTodo("");
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
  };

  return (
    <>
      <Navbar />

      <div className="container bg-slate-200 my-5 rounded-xl p-5 min-h-[80vh]">
        <div className="addTodos my-5">
          <h1 className="text-lg font-bold">Add Your todo</h1>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-1/2"
          />
          <button
            onClick={handleAdd}
            className="bg-slate-800 hover:bg-slate-950 p-3 py-1 text-sm  font-bold text-white rounded-md mx-6"
          >
            Add
          </button>
        </div>
        <h1 className="font-bold text-lg">your todos</h1>
        <div className="todos">
          {todos.map((item) => {
            return (
              <div
                key={item.id}
                className="todo flex justify-between w-1/4 my-3"
              >
                <input
                  onChange={handleCheckbox}
                  type="checkbox"
                  value={item.isComplete}
                  name={item.id}
                  id=""
                />
                <div className={item.isComplete ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="button">
                  <button
                    onClick={handleEdit}
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
