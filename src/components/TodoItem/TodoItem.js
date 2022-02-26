import React from "react";
import { Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const TodoItem = ({ className, onChecked, onDelete, todo }) => {
  return (
    <div className={`todoItem ${className}`}>
      <span className="checkbox" onClick={onChecked}>
        <Checkbox checked={todo.checked} />
      </span>
      <div className={`text ${todo.checked ? "checked" : ""}`}>{todo.text}</div>
      <span className="delete" onClick={onDelete}>
        <DeleteOutlined />
      </span>
    </div>
  );
};

export default TodoItem;
