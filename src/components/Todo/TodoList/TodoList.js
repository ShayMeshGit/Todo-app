import React, { Component } from 'react';

//components
import TodoItem from '../TodoItem';


export class TodoList extends Component {
    render() {
        return (
            <div className="todoList">
                {this.props.todos.map((todo, index) => {
                    return <TodoItem
                        key={index}
                        todo={todo}
                        class={index%2===1 ? 'grey': ''}
                        onCheckedHadnler={() => this.props.onCheckedHadnler(index)}
                        onDeleteHandler={() => this.props.onDeleteHandler(todo.id)}
                    />
                })}
            </div>
        )
    }
}

export default TodoList;
