import React from "react";
import trustedApi from "../DataApi/trustedApi";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import footerlogo from "../images/foter-logo.svg";

export default function Footer() {
  const FooterData = [
    {
      id: 1,
      pathUrl: "/About",
      pageName: "About Us",
    },
    {
      id: 2,
      pathUrl: "/About",
      pageName: "Our Producers",
    },

    {
      id: 3,
      pathUrl: "/About",
      pageName: "Sitemap",
    },
    {
      id: 4,
      pathUrl: "/About",
      pageName: "FAQ",
    },
    {
      id: 5,
      pathUrl: "/About",
      pageName: "Terms & Conditions",
    },
    {
      id: 6,
      pathUrl: "/About",
      pageName: "About Us",
    },
  ];
  return (
    <section className="pb-0">
      <footer>
        <div className="subscribe-form">
          <form action="">
            <div className="form-group d-flex align-itmes-center">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter your Gmail"
                autoComplete="off"
                required
              />
              <Button type="submit">Subscribe</Button>
            </div>
          </form>
        </div>
        <div className="container footpad">
          <div className="grid grid-footer--lists">
            <div className="w-25">
              <figure>
                <img src={footerlogo} alt="footerlogo" />
              </figure>
              <p className="footer-description mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>

              <div className="d-flex justify-content-between align-itmes-center mt-4 footer-social--logos">
                {trustedApi.logosSrc.map((imgEle) => {
                  return (
                    <NavLink key={imgEle.id}>
                      <img src={imgEle.url} alt="logo" />
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="w-25">
              <ul className="footer-lists">
                {FooterData.map((item) => {
                  return (
                    <li key={item.id}>
                      <NavLink to={item.pathUrl}>{item.pageName}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-25">
              <ul className="footer-lists">
                {FooterData.map((item) => {
                  return (
                    <li key={item.id}>
                      <NavLink to={item.pathUrl}>{item.pageName}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-25">
              <ul className="footer-lists">
                {FooterData.map((item) => {
                  return (
                    <li key={item.id}>
                      <NavLink to={item.pathUrl}>{item.pageName}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
