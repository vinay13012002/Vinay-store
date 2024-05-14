import React from "react";
import { NavLink } from "react-router-dom";
import bannerImg from "../images/hero.jpg";
import { Button } from "../styles/Button";

export default function HeroSection(props) {
  return (
    <section>
      <div className="container top-pad">
        <div className="grid grid-two-column">
          <div className="banner-contents">
            <p> WELCOME TO </p>
            <h2>{props.storeTittle}</h2>
            <NavLink to={props.pagePath}>
              <Button>see collection</Button>
            </NavLink>
          </div>
          <div className="banner-image figure">
            <img src={bannerImg} alt="banner-image" height={250} width={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
