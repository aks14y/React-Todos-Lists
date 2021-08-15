import React from "react";
import "../../Components/Style.scss";

function ListItem({ data, removeItem }) {
  function handleRemoveClick() {
    removeItem(data.id);
  }

  return (
    <div className="container-post">
      <li style={{ color: "red" }}>
        ID - {data.id} <br /> TITLE : {data.title}
        <br />
        BODY : {data.body}
        <br />
        <button onClick={handleRemoveClick}>Remove</button>
      </li>
    </div>
  );
}

export default ListItem;
