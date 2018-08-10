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
        this.setState({
            todo: event.target.value, 
        });
    }
    onClick = () => {
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
    }
    deleteItem = (event,key) => {
        event.preventDefault();
        let newVal = this.state.list.slice();
        let newCheckedVal = this.state.checked.slice();
            newVal.splice(key,1);
            newCheckedVal.splice(key,1);
            this.setState({
                list: newVal,
                checked: newCheckedVal
            });
    }
    completeItem = (key) => {
        //console.log(key);
        //event.preventDefault();
        let newC = this.state.checked.slice();
        let newL = document.getElementsByClassName("list-style");
        //console.log(this.state.checked);
        //console.log(newL[key].checked);
        if(newL[key].checked===false) {
            newC[key]=true;
            this.setState({
                checked: newC,
            });
        } else if(newL[key].checked===true) {
            newC[key]=false;
            this.setState({
                checked: newC,
            });
        }
        newL[key].firstChild.classList.toggle("completed");
        //console.log(newL[key].firstChild);     
        //console.log(this.state.checked);
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