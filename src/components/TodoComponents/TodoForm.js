import React from "react";
// import App from "../../App";

function TodoForm (props){
    return (
        <div>
            <form onSubmit = {props.handleSubmit}>
            <input
                placeholder = "...todo"
                name="newTodo"
                value={props.formValue.newTodo}
                onChange={props.handleChange}
            />
            
            <button type="submit">Add Todo</button>
            <button>Clear Completed</button>
            </form>
        </div>
    )}



export default TodoForm