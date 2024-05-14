import React, { useEffect, useState } from "react";
import PageNavigation from "./componets/PageNavigation";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useCart } from "./Context/CartContext";
import { Button } from "./styles/Button";
import NumberFormat from "./componets/NumberFormat";

const Products = () => {
  const [dataProducts, setdataProduct] = useState();
  const [isLoading, setLoading] = useState(false);
  const [catgory, setCatgeory] = useState();
  const [addedProduct, setadded] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const getdataProduts = async () => {
      try {
        setLoading(false);
        const res = await axios.get("https://api.pujakaitem.com/api/products");
        const data = await res.data;
        setdataProduct(data);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(true, error);
      }
    };
    getdataProduts();
  }, []);

  const handleCategory = (e) => {
    setCatgeory(e.target.value);
  };
  // const [noQ, setNoQ] = useState(1);

  const addToCartHandler = (product) => {
    addToCart(product);
    setadded(true);

    setTimeout(() => {
      setadded(false);
    }, 1000);

    // setNoQ((prevQuantity) => prevQuantity + 1);
    console.log("clicked", addedProduct);
  };

  // console.log(noQ, "NoofQuantity");

  return (
    <section className="top-pad">
      <div className="container">
        <PageNavigation pageName="Products" />

        <select
          name="dropdown-category"
          id="catageory"
          onChange={handleCategory}
        >
          <option>choose category</option>
          <option value="mobile">mobile</option>
          <option value="laptop">laptop</option>
          <option value="computer">computer</option>
          <option value="accessories">accessories</option>
          <option value="accessories">watch</option>
        </select>

        <div className="d-flex flex-wrap gap-3 justify-content-between">
          {isLoading ? (
            <>
              {dataProducts &&
                dataProducts.map((elementData) => (
                  <div key={elementData.id}>
                    <NavLink
                      className="mb-4 btn-link"
                      to={`/singleProduct/${elementData.id}`}
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
                    <span className=" d-flex mb-4 justify-content-between align-itmes-center mt-4">
                      <div className="d-flex gap-3">
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
                      </div>
                      <Button onClick={() => addToCartHandler(elementData)}>
                        Add to cart
                      </Button>
                    </span>
                  </div>
                ))}
              <p className={addedProduct ? "added" : "not-added"}>
                added to cart
              </p>
            </>
          ) : (
            <h2>loading.....</h2>
          )}
          {
            <>
              {dataProducts &&
                dataProducts
                  .filter((itme) => itme.category == catgory)
                  .map((elementData) => (
                    <div key={elementData.id}>
                      <NavLink
                        className="mb-4 btn-link"
                        to={`/singleProduct/${elementData.id}`}
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
                          <p>Rs {elementData.price} /-</p>
                        </div>
                      </NavLink>
                      <span className="d-flex gap-3 mb-4">
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
                      <Button onClick={() => addToCartHandler(elementData)}>
                        Add to cart
                      </Button>
                    </div>
                  ))}
            </>
          }
        </div>
      </div>
    </section>
  );
};
export default Products;
