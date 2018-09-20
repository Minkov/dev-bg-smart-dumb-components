import React, { Component } from 'react';
import { func, string } from 'prop-types';

class SearchForm extends Component {
    static propTypes = {
        onPatternChanged: func.isRequired,
        hint: string,
    };

    static defaultProps = { hint: '' };

    state = { value: '' };

    constructor() {
        super();

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        const { onPatternChanged } = this.props;
        const { value } = event.target;
        onPatternChanged(value);
        this.setState({ value });
    }

    render() {
        const { hint } = this.props;
        const { value } = this.state;
        return (
            <input
              type="text"
              value={value}
              onChange={this.handleOnChange}
              placeholder={hint}
            />
        );
    }
}


export default SearchForm;
