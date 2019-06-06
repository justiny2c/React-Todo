// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

function TodoList (props) {
    return (
        <div>
            {props.thisIsTheArray.map(item => {
                return (
                <Todo 
                    key={item.id}
                    toggleTodo={props.toggleTodo}
                    itemProp={item}/>
            )})}
        </div>
    )

}

export default TodoList