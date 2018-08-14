import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './todo-list';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
    }
    updateInput = (event) => {
        this.setState({
            todo: event.target.value, 
        });
    }

    onClick = () => {
        console.log("adding item");
        console.log(this.state.todo);
        this.props.addItem(this.state.todo);
    }

    deleteItem = (id) => {
        console.log("reomving item");
        this.props.removeItem(id);
        //let newList = this.state.list.slice();
            // for(let i=0;i<newList.length;i++) {
            //     if(newList[i].id === id) {
            //         newList.splice(i,1);
            //         break;
            //     }
            // }
            // this.setState({
            //     list: newList,
            // });
    }

    // completeItem = (event,id) => {
    //     event.preventDefault();
    //     let newList = this.state.list.slice();
    //     for(let i=0;i<newList.length;i++) {
    //         if(newList[i].id===id) {
    //             if(newList[i].id === id && newList[i].isChecked === false) {
    //                 newList[i].isChecked=true;
    //             }
    //             else if(newList[i].id === id && newList[i].isChecked === true){
    //                 newList[i].isChecked=false;
    //             }
    //         }
    //     }
    //     this.setState({
    //         list: newList
    //     })
    // }

    render () {
        return (
            <div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add Item" aria-label="Recipient's username" aria-describedby="basic-addon2" value = { this.state.todo } onChange = { this.updateInput } />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.onClick}>Add</button>
                    </div>
                </div>
                <div className="card"> 
                    {
                        <TodoList list = {this.state.list} completed = {this.completeItem} delete = {this.deleteItem} />
                    }
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem : (value) => dispatch({
            type: "ADD_TODO",
            payload: {
                id: Math.random(),
                item: value,
                isChecked: false
            }
        }),
        removeItem : (value) => dispatch({
            type: "REMOVE_ITEM",
            payload: {
                id: value
            }
        })
    }
}

export default connect(null, mapDispatchToProps)(TodoInput);