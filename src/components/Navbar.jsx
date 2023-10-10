import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-neutral-content">
      <div className="align-elements flex justify-between items-center py-3">
        <h1 className="text-3xl">
          <Link to="/">Recipie</Link>
        </h1>
        <Link className="btn btn-outline-primary" to="/create">Create</Link>
      </div>
    </nav>
  )
}

export default Navbar;
