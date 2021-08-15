import React, { useState, useEffect } from "react";
import TodoPostForm from "../../Components/Form";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function TodoContainer() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      {
        id: uuid(),
        text: todo,
        completed: false,
      },
    ]);
  };

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeItem(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <TodoPostForm submit={addNewTodo} />

      <TodoList
        todos={todos}
        removeItem={removeItem}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default TodoContainer;
