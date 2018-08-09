import React, { Component } from 'react';
import TodoList from './todo-list';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            list: [],
            checked: []
        };
    }
    updateInput = (event) => {
        event.preventDefault();
        this.setState({
            todo: event.target.value, 
        });
    }
    onClick = (event) => {
        event.preventDefault();
        let newVal = this.state.list.slice();
        let newDoneVal = this.state.checked.slice();
        if(this.state.todo.toLowerCase()!=="") {
            newVal.push(this.state.todo);
            newDoneVal.push(false);
        }
        this.setState({
                todo: '',
                list: newVal,
                checked: newDoneVal
        })
        for(let i in this.state.list) {
            console.log(i);
        }
        for(let i in this.state.checked) {
            console.log(i);
        }
    }
    completeItem = (event, k) => {
        event.preventDefault();
        let newVal = this.state.checked.slice();
        if(newVal[k]===false) {
            newVal[k]=true;
            this.setState({
                checked: newVal
            })
        } else {
            newVal[k]=false;
            this.setState({
                checked: newVal
            })
        }
        let newL = document.querySelectorAll("li");
        for(let d in this.state.checked) {
            if(d===true) {
                newL[d].classList.add('completed');
            } 
            else {
                newL[d].classList.remove('completed');

            }
        }
    }
    deleteItem = (event,key) => {
        event.preventDefault();
        let newVal = this.state.list.slice();
        //let newDoneVal = this.state.checked.slice();
        this.state.checked.splice(key,1);
            newVal.splice(key,1);
            //newDoneVal.splice(key,1);
            this.setState({
                list: newVal,
                //checked: newDoneVal
            });
            console.log("--" + this.state.checked);
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
                    <TodoList list = {this.state.list} checked = {this.state.checked} completed = {this.completeItem} delete = {this.deleteItem} />
                </div>
            </div>
        );
    }
}

export default TodoInput;