import React from "react";
import { NavLink } from "react-router-dom";

export default function PageNavigation(props) {
  return (
    <div className="d-flex align-itmes-center mb-4">
      <NavLink to="/">
        <p>Home / </p>
      </NavLink>
      <p> {props.pageName}</p>
    </div>
  );
}
