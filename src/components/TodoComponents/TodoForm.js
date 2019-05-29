import React from "react";
// import App from "../../App";

function TodoForm (){
    return (
        <div>
            <input
                placeholder = "...todo"
                name="newTodo"
                // value={this.state.newTodo}
                // onChange={e => this.handleChange}
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm