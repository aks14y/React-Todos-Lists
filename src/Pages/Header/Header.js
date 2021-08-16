import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div>
      <header>
        <h1>React Todo-List</h1>
      </header>
      <Link to="/Todo">Todo</Link>
      <br />
      <Link to="/List">Posts</Link>
    </div>
  );
}

export default Header;
