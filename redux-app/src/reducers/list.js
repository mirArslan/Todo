const intialState={
    todos:[]
}

const TodoReducer=(state=intialState,action)=>{

    switch (action.type) {
        case 'ADD_TODO':
            return{
                todos:state.todos.concat([action.todo])
            };
        default:
            break;
    }
}
export default TodoReducer;