import React from "react";

function Todo(props){
    return (
         <div 
            onClick ={() => props.toggleTodo(props.itemProp.id)}>
            <p>{props.itemProp.task}</p>
        </div>
    )
}


export default Todo