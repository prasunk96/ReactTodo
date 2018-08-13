import React, { Component } from 'react';
import TodoList from './todo-list';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            list: [{
                id: '',
                item: '',
                isChecked: ''
            }],
        };
        this.state.list.pop();
    }
    updateInput = (event) => {
        this.setState({
            todo: event.target.value, 
        });
    }
    onClick = () => {
        let newList = this.state.list.slice();
        if(this.state.todo.toLowerCase()!=="") {
            newList.push({
                id: Math.random(),
                item: this.state.todo,
                isChecked: false
            })
        }
        this.setState({
                todo: '',
                list: newList 
        })
    }
    deleteItem = (id) => {
        let newList = this.state.list.slice();
            for(let i=0;i<newList.length;i++) {
                if(newList[i].id === id) {
                    newList.splice(i,1);
                    break;
                }
            }
            this.setState({
                list: newList,
            });
    }
    completeItem = (event,id) => {
        event.preventDefault();
        let newList = this.state.list.slice();
        for(let i=0;i<newList.length;i++) {
            if(newList[i].id===id) {
                if(newList[i].id === id && newList[i].isChecked === false) {
                    newList[i].isChecked=true;
                }
                else if(newList[i].id === id && newList[i].isChecked === true){
                    newList[i].isChecked=false;
                }
            }
        }
        this.setState({
            list: newList
        })
    }
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

export default TodoInput;