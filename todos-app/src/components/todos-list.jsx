import React from 'react';
import { arrayOf, func } from 'prop-types';
import TodoItem, { todoShape } from './todo-item';

const TodosList = ({ todos, onStateChanged, onTodoDeleted }) => (
    <ul>
        {
            todos.map(todo => (
                <li key={todo.id}>
                    <TodoItem
                      todo={todo}
                      onTodoDeleted={onTodoDeleted}
                      onStateChanged={onStateChanged}
                    />
                </li>
            ))
        }
    </ul>
);

TodosList.propTypes = {
    todos: arrayOf(todoShape).isRequired,
    onStateChanged: func.isRequired,
    onTodoDeleted: func,
};

TodosList.defaultProps = { onTodoDeleted() { } };

export default TodosList;
