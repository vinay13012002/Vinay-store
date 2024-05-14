import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

export default function ErorrPage() {
  return (
    <section className="top-pad">
      <div className="container">
        <h3>Erorr found </h3>
        <h2 className="mb-4">Your not having signal or you lost page</h2>
        <NavLink to="/">
          <Button>Home page</Button>
        </NavLink>
      </div>
    </section>
  );
}
