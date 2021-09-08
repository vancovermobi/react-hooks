import { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love my family" },
    { id: 2, title: "We love my father" },
    { id: 3, title: "My mother love them " },
  ]);
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formvalue){    
    const newTodoList = [ ...todoList , formvalue ];
    console.log(newTodoList);
    setTodoList(newTodoList)
  }
  return (
    <div className="App">
      <h1>Wellcome to React</h1>
      
      <TodoForm onSubmit={ handleTodoFormSubmit }/>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <ColorBox />
    </div>
  );
}

export default App;
