import React, { Component } from 'react';
import _ from 'lodash-es';

import { get } from '../services/todos-service';

import TodosList from './todos-list';
import TodoForm from './todo-form';
import SearchForm from './search-form';

class TodosApp extends Component {
    state = {
        todos: [],
        filterPattern: '',
    };

    constructor() {
        super();

        this.service = get();

        this.handleTodoStateChanged = this.handleTodoStateChanged.bind(this);
        this.handleOnTodoSave = this.handleOnTodoSave.bind(this);
        this.handleOnTodoDeleted = this.handleOnTodoDeleted.bind(this);
        this.handleOnFilterPatternChanged = this.handleOnFilterPatternChanged.bind(this);
    }

    async componentWillMount() {
        await this.reload();
    }

    async reload() {
        const { filterPattern } = this.state;
        const todos =
            _.isEmpty(filterPattern)
                ? await this.service.getAll()
                : await this.service.getFiltered(filterPattern);

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

    async handleOnTodoDeleted(todo) {
        await this.service.delete(todo.id);
        await this.reload();
    }

    async handleOnFilterPatternChanged(filterPattern) {
        this.setState({ filterPattern });
        await this.reload();
    }

    render() {
        const { todos } = this.state;

        return (
            <div>
                <TodoForm
                  onSave={this.handleOnTodoSave}
                  hint="Enter todo text"
                />
                <SearchForm
                  onPatternChanged={this.handleOnFilterPatternChanged}
                  hint="Enter to search"
                />
                <TodosList
                  todos={todos}
                  onStateChanged={this.handleTodoStateChanged}
                  onTodoDeleted={this.handleOnTodoDeleted}
                />
            </div>
        );
    }
}

export default TodosApp;
