import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";


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
  },
  {
    task: 'Clean Room',
    id: 1528817084359,
    completed: false
  },
  {
    task: 'Study React',
    id: 1528817084350,
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
      <div className ="body">
        <h2>Welcome to your Todo App!</h2>
        <h1>Todo List: MVP</h1>

        <TodoList 
          thisIsTheArray={this.state.todoList}
          toggleTodo={this.toggleTodo} />

        <TodoForm 
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }


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
  
  clearCompleted = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.filter(item => {
            return item.completed === !true
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
