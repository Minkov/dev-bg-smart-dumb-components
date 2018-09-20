import React, { Component } from 'react';
import { func, number, bool, string, shape } from 'prop-types';

const todoShape = {
    id: number,
    isDone: bool,
    text: string,
};

class TodoItem extends Component {
    constructor() {
        super();
        this.handleOnChanged = this.handleOnChanged.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
    }

    handleOnChanged() {
        const { todo, onStateChanged } = this.props;
        onStateChanged(todo);
    }

    handleOnDelete() {
        const { todo, onTodoDeleted } = this.props;
        onTodoDeleted(todo);
    }

    render() {
        const { todo } = this.props;
        const { id, text, isDone } = todo;
        const todoCheckboxId = `cb-todo-${id}`;
        return (
            <div>
                <label htmlFor={todoCheckboxId}>
                    <input
                      id={todoCheckboxId}
                      type="checkbox"
                      checked={isDone}
                      onChange={this.handleOnChanged}
                    />
                    {text}
                </label>
                <button
                  type="button"
                  onClick={this.handleOnDelete}
                >
                    x
                </button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: shape(todoShape).isRequired,
    onStateChanged: func.isRequired,
    onTodoDeleted: func,
};

TodoItem.defaultProps = { onTodoDeleted() { } };

export default TodoItem;

export { todoShape };
