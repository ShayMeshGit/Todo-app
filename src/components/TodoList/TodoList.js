import React, { Component } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

//components
import TodoItem from "../TodoItem";

class TodoList extends Component {
  render() {
    const { todos, checkedHandler, deleteHandler } = this.props;
    return (
      <ScrollToBottom className="todoList">
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
              className={index % 2 === 1 ? "grey" : ""}
              onChecked={() => checkedHandler(index)}
              onDelete={() => deleteHandler(todo.id)}
            />
          );
        })}
      </ScrollToBottom>
    );
  }
}

export default TodoList;
