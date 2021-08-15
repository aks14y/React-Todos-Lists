import React from "react";
import PostItem from "./PostItem";

function ListContainer({ todos = [], removeItem }) {
  return (
    <div className="container">
      <p>Post List</p>

      <ul>
        {todos.map((item) => (
          <PostItem key={item.id} data={item} removeItem={removeItem} />
        ))}
      </ul>
    </div>
  );
}

export default ListContainer;
