import React from "react";
import "./TodoStyle.scss";

function ListItem({ data, removeItem, toggleComplete }) {
  function handleRemoveClick() {
    removeItem(data.id);
  }

  function handleCheckboxClick() {
    toggleComplete(data.id);
  }

  return (
    <div className="container-todo">
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li style={{ textDecoration: data.completed ? "line-through" : null }}>
        {data.text}
      </li>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
}

export default ListItem;
