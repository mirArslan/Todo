import React from 'react';
import {connect} from 'react-redux';

const TodoList=(props)=>{
    return(
        <div>
            <h3>Todo List</h3>
            <table border="1">
                <thead>
                    <tr>

                    <th>Pending Work</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos && props.todos.map(function(todo,index){
                        return (
                            <tr key={`todo_${index}`}>
                                <td>{todo.work}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) => {
    const stateMap = {};
    if(state && state.todos){
        stateMap.todos = state.todos;
    }else{
        stateMap.todos = [];
    }
    return stateMap;
}
export default connect(mapStateToProps)(TodoList);