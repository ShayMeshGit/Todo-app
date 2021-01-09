import React, { Component, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

//components
import TodoList from './TodoList';
import AddTodo from './AddTodo';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: uuidv4(), text: 'Make homework', checked: false },
                { id: uuidv4(), text: 'Take out tooty to a walk', checked: false },
            ]
        }
    }

    addTodoHandler = (todoDes) => {
        if(todoDes.length === 0 ) return;
        const id = uuidv4();
        const newTodo = { id, text: todoDes, checked: false }
        const newTodos = [...this.state.todos, newTodo];
        this.setState({ todos: newTodos });
    }

    onCheckedHadnler = (index) => {
        const newTodos = [...this.state.todos];
        newTodos[index].checked = !newTodos[index].checked;
        this.setState({ todos: newTodos });
    }

    onDeleteHandler = (id) => {
        const newTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos: newTodos });
    }

    render() {
        return (
            <Fragment>
                <TodoList
                    todos={this.state.todos}
                    onCheckedHadnler={this.onCheckedHadnler}
                    onDeleteHandler={this.onDeleteHandler}
                />
                <AddTodo addTodoHandler={this.addTodoHandler} />
            </Fragment>
        );
    }
}


export default Todo;