import React, { Component } from 'react';
import { func, number, bool, string, shape } from 'prop-types';

const todoShape = {
    id: number,
    isDone: bool,
    text: string,
};

class TodoItem extends Component {
    handleOnChanged = () => {
        const { todo, onStateChanged } = this.props;
        onStateChanged(todo);
    }

    render() {
        const { todo } = this.props;
        const { id, text, isDone } = todo;
        const todoCheckboxId = `cb-todo-${id}`;
        return (
            <label htmlFor={todoCheckboxId}>
                <input
                  id={todoCheckboxId}
                  type="checkbox"
                  checked={isDone}
                  onChange={this.handleOnChanged}
                />
                {text}
            </label>
        );
    }
}

TodoItem.propTypes = {
    onStateChanged: func.isRequired,
    todo: shape(todoShape).isRequired,
};

export default TodoItem;

export { todoShape };
