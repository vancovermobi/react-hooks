import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss'

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {   
    todos: [],
    onTodoClick: null
};

function TodoList(props) {
    const { todos , onTodoClick } = props ;
    return (
        <ul className="todo-list" >
            {todos.map(todo =>(
                <li key={ todo.id } 
                    onClick={() => onTodoClick(todo)}
                >{ todo.title }</li>
            ))}
        </ul>
    );
}

export default TodoList;