import React, { Component} from 'react';

class TodoList extends Component {
    delete = (key) => {
        this.props.delete(key);
    }
    completed = (k) => {
        this.props.completed(k);
    }
    render() {
        const {
            props,
        } = this;

        return (
            <ul className="list-group list-group-flush">
                {   
                    props.list.map((item,index) =>
                    <li className="list-style" key={index} checked={props.checked[index]}
                        onClick = { (event) => this.completed(event,index) }>
                        <span>{item}</span>
                        <button className="btn btn-danger btn-sm del-style fa fa-trash" 
                        onClick={(event) => this.delete(event, index)}></button>
                    </li>)
                }  
            </ul>
        );
    }
}

export default TodoList;