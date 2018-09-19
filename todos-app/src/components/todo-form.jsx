import React, { Component } from 'react';
import { func } from 'prop-types';

class TodoForm extends Component {
    static propTypes = { onSave: func.isRequired };

    constructor() {
        super();
        this.state = { text: '' };
        this.handleOnTextChanged = this.handleOnTextChanged.bind(this);
        this.handleOnSaveClick = this.handleOnSaveClick.bind(this);
    }

    handleOnTextChanged(event) {
        const text = event.target.value;
        this.setState({ text });
    }

    handleOnSaveClick() {
        const { onSave } = this.props;
        const todo = { ...this.state };
        onSave(todo);
    }

    render() {
        const { text } = this.state;
        return (
            <div>
                <label htmlFor="todo-text">
                    <input
                      type="text"
                      onChange={this.handleOnTextChanged}
                      value={text}
                    />
                </label>
                <button
                  type="button"
                  onClick={this.handleOnSaveClick}
                >
                    Save
                </button>
            </div>
        );
    }
}

export default TodoForm;
