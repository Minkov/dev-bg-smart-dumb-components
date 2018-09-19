import React from 'react';
import Navigation from './navigation';
import TodoForm from './todo-form';
import TodosList from './todo-list';

const TodosApp = () => (
    <div>
        <Navigation />
        <TodoForm />
        <TodosList />
    </div>
);

export default TodosApp;
