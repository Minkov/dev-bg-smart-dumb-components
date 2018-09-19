import React from 'react';
import { arrayOf, func } from 'prop-types';
import TodoItem, { todoShape } from './todo-item';

const TodosList = ({ todos, onStateChanged }) => (
    <ul>
        {
            todos.map(todo => (
                <li key={todo.id}>
                    <TodoItem todo={todo} onStateChanged={onStateChanged} />
                </li>
            ))
        }
    </ul>
);

TodosList.propTypes = {
    todos: arrayOf(todoShape).isRequired,
    onStateChanged: func.isRequired,
};

export default TodosList;
