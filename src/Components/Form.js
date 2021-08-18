import React, { useState } from "react";
import "./Style.scss";

function TodoPostForm({ submit, type }) {
  const [input, setInput] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    submit(input, desc);
    setInput("");
    setDesc("");
  };

  return (
    <div className="container-form">
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />  
      <br />
      {type === "post" && (
        <div className="form">
          <label for="des">Desc</label>
          <textarea
            id="des"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
      )}

      <button className="button-form" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default TodoPostForm;
