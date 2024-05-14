import { NavLink } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";

import { useCart } from "../Context/CartContext";
import { Button } from "../styles/Button";
import { useState } from "react";
import NumberFormat from "./NumberFormat";

export default function FeaturedProducts() {
  const { isLoading, featuredProducts } = useProductContext();
  //   console.log(featuredProducts, "Featured Products data");
  const { addToCart } = useCart();
  const [Added, setAdded] = useState();
  const addToCartFunc = (products) => {
    addToCart(products);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };
  return isLoading ? (
    <p>Loading or Error Catch...</p>
  ) : (
    <div className="d-flex justify-content-between">
      {featuredProducts.length > 0 ? (
        featuredProducts.map((elementData) => (
          <div className="d-flex flex-colomn">
            <NavLink
              to={`/singleProduct/${elementData.id}`}
              className="btn-link"
              key={elementData.id}
            >
              <div className="img-wrapper">
                <img
                  className="img-size"
                  src={elementData.image}
                  height={200}
                  width={200}
                  alt="imgs"
                />
                <figcaption>{elementData.name}</figcaption>
              </div>

              <div className="d-flex justify-content-between">
                <p>{elementData.company}</p>
                <p>
                  Rs <NumberFormat number={elementData.price} /> /-
                </p>
              </div>
            </NavLink>
            <div className="d-flex justify-content-between align-itmes-center">
              <span className="d-flex gap-3">
                {elementData.colors.map((itemsColor, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: `${itemsColor}`,
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      display: "block",
                    }}
                  ></span>
                ))}
              </span>
              <Button onClick={() => addToCartFunc(elementData)}>
                add to cart
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p>No featured products available.</p>
      )}
      <p className={Added ? "added" : "not-added"}>added to cart</p>
    </div>
  );
}
