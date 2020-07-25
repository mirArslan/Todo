import actionTypes from './reducers/actionTypes';
export default{
    addTodo :(todo)=>({
        type: actionTypes.ADD_TODO,
        todo
    }),
    delTodo :(index)=>({
        type: actionTypes.REMOVE_TODO,
        index
    }),
}