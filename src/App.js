import { useEffect, useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  // useState() ============================
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
  function handleTodoFormSubmit(formvalue) {
    const newTodoList = [...todoList, formvalue];
    console.log(newTodoList);
    setTodoList(newTodoList);
  }

  // useEffect() ============================
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        // console.log(responseJSON);
        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log('Failed to fetch post list: ' , error.message);
      }
    }
    fetchPostList();
  }, []);

  return (
    <div className="App">
      <h1>Wellcome to React</h1>

      {/* useState */}
      {/* <TodoForm onSubmit={ handleTodoFormSubmit }/> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      {/* <ColorBox /> */}

      {/* useEffect */}
      <PostList posts={postList} />
    </div>
  );
}

export default App;
