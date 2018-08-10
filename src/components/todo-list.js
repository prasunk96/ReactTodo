import React, { Component} from 'react';

class TodoList extends Component {
    delete = (event,key) => {
        this.props.delete(event,key);
    }
    completed = (key) => {
        this.props.completed(key);
    }
    render() {
        const {
            props,
        } = this;

        return (
            <ul className="list-group list-group-flush">
                {   
                    props.list.map((item,index) =>
                    <li className="list-style" key={index} checked={props.checked[index]}>
                    <span onClick = { () => this.completed(index) }>{item}</span>
                    <button className="btn btn-danger btn-sm del-style fa fa-trash" 
                    onClick={(event) => this.delete(event,index)}></button>
                    </li>)
                }
            </ul>
        );
    }
}

export default TodoList;

