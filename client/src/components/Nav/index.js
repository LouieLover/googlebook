import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      {
        <Link to={"/books"} style={{ color: "white" }}>
          <strong>savedBooks</strong>
        </Link>
      }
    </nav>
  );
}

export default Nav;
