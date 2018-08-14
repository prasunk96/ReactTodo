import React, { Component} from 'react';
import {connect} from 'react-redux';
import deleteActionCreator from '../store/ActionCreator';

class TodoList extends Component {
    delete = (id) => {
        this.props.delete(id);
    }
    completed = (event,id) => {
        deleteActionCreator(id);
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

const mapStateToProps = state => {
    return {
        list: state.list
    }
}
export default connect(mapStateToProps)(TodoList);

