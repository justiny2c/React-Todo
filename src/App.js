import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";


const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList,
      newTodo: ""

    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h1>Todo List: MVP</h1>

        <TodoList 
          thisIsTheArray={this.state.todoList} />

        <TodoForm 
          addTodo={this.addTodo}/>
      </div>
    );
  }

  // handleChange = (event) => {
  //   event.preventDefault();
  //   this.setState({ newTodo: event.target.value });
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   this.setState({
  //     todoList: [...this.state.todoList, this.state.newTodo],
  //     newTodo: ""
  //   });
  // }

  toggleTodo = id => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            }}
            else {
              return item
            }
          }
        )
      }
    })
  };

  addTodo = todoTask => {
    const todoNew = {
      task: todoTask,
      id: Date.now(),
      completed: false
    }

    this.setState(prevState => {
      return {
        todoList: [...prevState.todoList, todoNew]
      }
    })
  }
}


export default App;
