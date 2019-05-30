import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ""
        }
    }
    render () {
    return (
        <div className = "form" >
            <form
                onSubmit = {this.addTodo}>
            <input
                placeholder = "...todo"
                name="newTodo"
                value={this.state.newTodo}
                onChange={this.handleChange}
            />
            
            <button>Add Todo</button>
            </form>
            <button
                onClick = {this.props.clearCompleted}>
                Clear Completed</button>

        </div>
    )}

    
    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({
          newTodo: ''
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}



export default TodoForm