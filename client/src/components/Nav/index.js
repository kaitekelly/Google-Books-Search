import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/" >
        Google Books Search
      </a>
      <a className="navbar-brand" href="/savedbooks">
        Saved Books List
      </a>
    </nav>
  );
}

export default Nav;