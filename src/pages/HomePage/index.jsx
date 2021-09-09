import { useEffect, useRef, useState } from "react";
import "./HomePage.scss";
import ColorBox from "./components/ColorBox";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import queryString from 'query-string';
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";
import ClockCustomHooks from "./components/ClockCustomHooks";
import MagicBox from "./components/MagicBox";

function HomePage() {
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
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl =
          `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        // console.log(responseJSON);
        const { data , pagination } = responseJSON;
        // console.log('Pagination: ', pagination );

        setPostList(data);
        setPagination( pagination );
      } catch (error) {
        console.log('Failed to fetch post list: ' , error.message);
      }
    }
    fetchPostList();
  }, [ filters ]);
  function handlePageChange(page){
    // console.log('New page: ' , page);
    setFilters( { ...filters , _page: page } );
  };
  function handlePostfilterFormSubmit(search){
    console.log(search.searchTerm);
    setFilters({
      ...filters,
      _page: 1,
      title_like: search.searchTerm,
    });
  };
// Clock()========================================

  return (
    <div className="HomePage">
      <h1>Wellcome to React</h1>

      {/* useState */}
      {/* <TodoForm onSubmit={ handleTodoFormSubmit }/> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      {/* <ColorBox /> */}

      {/* useEffect */}
      <Clock />
      {/* <PostFiltersForm onSubmit={ handlePostfilterFormSubmit }/> */}
      {/* <PostList posts={postList} /> */}
      {/* <Pagination  pagination={ pagination} onPageChange={ handlePageChange } /> */}

      {/* Custom Hooks */}
      <ClockCustomHooks />
      <MagicBox />

    </div>
  );
}

export default HomePage;
