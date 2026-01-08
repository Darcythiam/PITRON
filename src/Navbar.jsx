import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container navInner">
        <a className="brand" href="/" aria-label="Pitron Engineering LLC Home">
          <span className="brandMark" />
          <span className="brandText">Pitron Engineering LLC</span>
        </a>

        <nav className="navLinks" aria-label="Primary">
          <NavLink className={({ isActive }) => "navLink" + (isActive ? " active" : "")} to="/services">
            Services
          </NavLink>
          <NavLink className={({ isActive }) => "navLink" + (isActive ? " active" : "")} to="/industries">
            Industries
          </NavLink>
          <NavLink className={({ isActive }) => "navLink" + (isActive ? " active" : "")} to="/how-we-work">
            How we work
          </NavLink>
          <NavLink className="navLink navCta" to="/start-a-project">
            Start a project
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
