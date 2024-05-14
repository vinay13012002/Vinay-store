import React from "react";
import trustedApi from "../DataApi/trustedApi";

export default function Trusted() {
  return (
    <section>
      <div className="container">
        <h2>100+ trusted by companies</h2>
        <div className="grid grid-five-column mt-4">
          {trustedApi.logosSrc.map((logo) => (
            <figure className="trusted-log" key={logo.id}>
              <img key={logo.id} src={logo.url} alt="logo" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
