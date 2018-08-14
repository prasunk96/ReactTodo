import axios from 'axios';
import {connect} from 'react-redux';

const getTodoActionCreator = () => {
    return function(dispatch, getState) {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            var responseItems = response.data.slice(0,3);

            for(let i = responseItems.length-1;i>=0;i--) {
                responseItems[i].isChecked = false;
                responseItems[i].item = responseItems[i].title;
            }

            dispatch({
                type: "INITIAL_TODO_LIST", payload: {
                    items: responseItems
                }
            });
        })
        .catch(error => {
            console.log(error);
        })
    }
    return {type: "INITIAL_TODO_LIST", payload: {} }
}

const deleteActionCreator = () => {
    return function(dispatch, getState) {
        
    }
}
export default getTodoActionCreator;