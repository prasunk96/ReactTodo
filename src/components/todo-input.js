import React, { Component } from 'react';

class TodoInput extends Component {
    render () {
        return (
            <div>
                <input type="text" placeholder="Enter Todo" name="todo" />
                <button type="button">Add</button>
            </div>
        );
    }
}

export default TodoInput;