import React from "react";

function Todo(props){
    return (
         <div
            className="todoTasks"
            style={props.itemProp.completed ? { textDecoration: 'line-through', color: 'black'} : null}
            onClick ={() => props.toggleTodo(props.itemProp.id)}>
            <p>{props.itemProp.task}</p>
        </div>
    )
}


export default Todo