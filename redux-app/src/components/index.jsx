import React from 'react';
import {connect} from 'react-redux';

const TodoList=(props)=>{
    return(
        <div>
            <h3>Todo List</h3>
            <table border="1">
                <thead>
                    <th>Pending Work</th>
                </thead>
                {/* <tbody>
                    {this.props.todos.map(function(todo,index){
                        return (
                            <tr>
                                <td>{todo.work}</td>
                            </tr>
                        )
                    })
                    }
                </tbody> */}
            </table>
        </div>
    );
}

export default connect()(TodoList);