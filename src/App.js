import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: ["Learn setState()", "Style my Todo List"],
      newTodo: ""

    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h1>Todo List: MVP</h1>

        <TodoList thisIsTheArray={this.state.todoList} />
      
      
        {/* <div>
          {this.state.todoList.map(todoFromMap => (
            <Todo todoProps={todoFromMap}/>
          ))}
        </div> */}
        <TodoForm formValue={this.state} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} />
      </div>
    );
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ newTodo: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      todoList: [...this.state.todoList, this.state.newTodo],
      newTodo: ""
    });
  }
}


export default App;
