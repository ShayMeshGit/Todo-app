import React, { Component } from 'react';


class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoDes: ''
        }
    }

    onChange = (event) => {
        this.setState({
            todoDes: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodoHandler(this.state.todoDes);
        this.setState({ todoDes: '' });
    }

    render() {
        return (
            <div className="addTodoContainer">
                <form onSubmit={this.onSubmit} className="addTodo">
                    <input
                        type="text"
                        name="todoDes"
                        placeholder='Add todo...'
                        value={this.state.todoDes}
                        onChange={this.onChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}


export default AddTodo;