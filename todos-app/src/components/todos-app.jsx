import React, { Component } from 'react';

import { get } from '../services/todos-service';

import TodosList from './todos-list';
import TodoForm from './todo-form';

class TodosApp extends Component {
    constructor() {
        super();
        this.service = get();
        this.state = { todos: [] };

        this.handleTodoStateChanged = this.handleTodoStateChanged.bind(this);
        this.handleOnTodoSave = this.handleOnTodoSave.bind(this);
    }

    async componentWillMount() {
        await this.reload();
    }

    async reload() {
        const todos = await this.service.getAll();
        this.setState({ todos });
    }

    async handleTodoStateChanged(todo) {
        await this.service.update(todo);
        await this.reload();
    }

    async handleOnTodoSave(todo) {
        await this.service.add(todo);
        await this.reload();
    }

    render() {
        const { todos } = this.state;

        return (
            <div>
                <TodoForm
                  onSave={this.handleOnTodoSave}
                />
                <TodosList
                  todos={todos}
                  onStateChanged={this.handleTodoStateChanged}
                />
            </div>
        );
    }
}

export default TodosApp;
