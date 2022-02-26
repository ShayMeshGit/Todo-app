import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

//components
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: uuidv4(), text: "Make homework", checked: false },
        { id: uuidv4(), text: "Take out the dog for a walk", checked: false },
      ],
    };
    this.bottomRef = React.createRef();
    this.todoListRef = React.createRef();
  }

  addTodoHandler = (todoDes) => {
    if (todoDes.length === 0) return;
    const id = uuidv4();
    const newTodo = { id, text: todoDes, checked: false };
    const newTodos = [...this.state.todos, newTodo];
    this.setState({ todos: newTodos });
  };

  checkedHandler = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index].checked = !newTodos[index].checked;
    this.setState({ todos: newTodos });
  };

  deleteHandler = (id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <>
        <div className="shape"></div>
        <Layout>
          <TodoList
            todos={this.state.todos}
            checkedHandler={this.checkedHandler}
            deleteHandler={this.deleteHandler}
          />
          <AddTodo addTodoHandler={this.addTodoHandler} />
        </Layout>
      </>
    );
  }
}

export default App;
