import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initState = {
    list : [
        {
            id: Math.random()
            ,
            item: 'Test',
            isChecked: false
        }
    ]
};

const reducer = (state = initState, action) => {
    let newState;
    switch(action.type.toUpperCase()) {
        case "INITIAL_TODO_LIST":
            newState = {...state, list: action.payload.items};
            return newState;
        case "ADD_TODO":
            newState = {...state};
            newState.list = [
                ...newState.list,
                {
                    id: Math.random(), item: action.payload.item, isChecked: false
                }
            ];
            return newState;
        case "REMOVE_ITEM":
            newState = {...state};
            console.log(newState.list[0].id);
            console.log(action.payload.id);
            for(let i=0;i<newState.list.length;i++) {
                if(newState.list[i].id===action.payload.id) {
                    newState.list.splice(i,1);
                }
            }
            console.log(newState.list);
            return newState;
        default:
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;