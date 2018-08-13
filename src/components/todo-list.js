import React, { Component} from 'react';

class TodoList extends Component {
    delete = (id) => {
        this.props.delete(id);
    }
    completed = (event,id) => {
        this.props.completed(event,id);
    }
    render() {
        const {
            props,
        } = this;

        return (
            <ul className="list-group list-group-flush">
                {   
                    props.list.map((items) =>
                    <li className="list-style" key={items.id} checked={items.isChecked}>
                        { items.isChecked ? (

                            <span className="completed" onClick = { (event) => this.completed(event,items.id) }>{items.item}</span>
                        ) : (
                            <span className="notCompleted" onClick = { (event) => this.completed(event,items.id) }>{items.item}</span>
                        )} 
                    <button className="btn btn-danger btn-sm del-style fa fa-trash" 
                    onClick={() => this.delete(items.id)}></button>
                    </li>)
                }
            </ul>
        );
    }
}

export default TodoList;

