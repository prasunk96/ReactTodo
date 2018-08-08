import React, { Component } from 'react';

const  todos = [1,2,3];

const TodoItem = () => {
    return (
            todos.map((item,index) => {
            return <li key={index}>{item}</li>
        })
    );
}

export default TodoItem;