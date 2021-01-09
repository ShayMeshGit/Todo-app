import React from 'react';
import { Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const TodoItem = (props) => {
    return (
        <div className={`todoItem ${props.class}`}>
            <span className="checkbox" onClick={props.onCheckedHadnler}><Checkbox checked={props.todo.checked}/></span>
            <div className={`text ${props.todo.checked ? 'checked' : ''}`}>{props.todo.text}</div>
            <span className="delete" onClick={props.onDeleteHandler}><DeleteOutlined /></span>
        </div>
    )
}

export default TodoItem;
