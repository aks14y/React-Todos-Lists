import React from "react";
import TodoItem from "./TodoItem";

function ListContainer({ todos = [], removeItem, toggleComplete }) {
  return (
    <div>
      <p>Todo List</p>
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            data={item}
            removeItem={removeItem}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListContainer;
