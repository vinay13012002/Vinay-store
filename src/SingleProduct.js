import React, { useEffect, useState } from "react";
import { Button } from "./styles/Button";
import { useParams } from "react-router-dom";
// import { useProductContext } from "./Context/ProductContext";
import PageNavigation from "./componets/PageNavigation";
import { useCart } from "./Context/CartContext";
import NumberFormat from "./componets/NumberFormat";

const API = "https://api.pujakaitem.com/api/products";

const SingleData = () => {
  const { id: singlePageId } = useParams();
  const { addToCart } = useCart();

  const [imgID, setImgID] = useState(0);
  const [SinglePdata, setData] = useState({});
  // const empty = {};

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API}?id=${singlePageId}`);
        const data = await res.json();

        if (data.success == false) {
          console.log("error", data.message);
          return;
        }
        // console.log("vinay", data);
        setData(data);
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchProducts();
  }, [singlePageId]);

  const {
    name,
    price,
    company,
    description,
    category,
    featured,
    shipping,
    stock,
    reviews,
    stars,
    image,
    colors,
  } = SinglePdata;

  // console.log("object", data.name);

  const handleSingleImg = (index) => {
    // console.log("clicked", index);
    setImgID(index);
  };
  // console.log("vinay", SingleData);
  const [Added, setAdded] = useState(false);
  // const [Noquantity, setQuantity] = useState(1);

  const setAddCart = (singleProdut) => {
    addToCart(singleProdut);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);

    // setQuantity((prevQ) => prevQ + 1);

    // console.log("clicked");
  };

  // console.log("data", SinglePdata);
  // console.log("data", Array.isArray(SingleData), SingleData);
  // console.log(!!empty);

  // const existingProduct = SinglePdata.find(
  //   (items) => items.id === singlePageId
  // );
  // if (existingProduct) {
  //   setQuantity((prevCartItems) => {
  //     prevCartItems.map((item) =>
  //       item.id === singlePageId ? { ...item, quantity: Noquantity } : "ef"
  //     );
  //   });
  // }
  return (
    <div>
      {SinglePdata && (
        <section className="top-pad">
          <div className="container">
            <div className="bread-crumb">
              <PageNavigation pageName={name} />
            </div>
            <div className="d-flex justify-content-between align-itmes-center ">
              <div className="side-imges-wrapper flex-1">
                <div className="d-flex align-itmes-center gap-3 row-revrese justify-left  ">
                  <div className="flex-colomn d-flex gap-3 pointer mb-4 justify-content-center align-items-center ">
                    {image &&
                      image.map((imgs, index) => (
                        <img
                          src={imgs.url}
                          alt={imgs.name}
                          className="side-img--size"
                          key={imgs.id}
                          onClick={() => handleSingleImg(index)}
                        />
                      ))}
                  </div>
                  <div className="d-flex gap-3 ps-0 p-4 single-img--hover pointer">
                    {image && (
                      <img
                        key={image[imgID].id}
                        src={image[imgID].url}
                        alt={image[imgID].name}
                        className="single--img"
                      />
                    )}
                  </div>
                </div>
                <p>{imgID}</p>
                <div className="d-flex gap-3">
                  {colors &&
                    colors.map((itemsColor, index) => (
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
              </div>
              <div className="flex-1">
                <div className="d-flex gap-3 flex-colomn">
                  <p>name ::{name} </p>
                  <p>
                    price :: Rs <NumberFormat number={price} />
                    /-
                  </p>
                  <p>company :: {company}</p>
                  <p>description :: {description}</p>
                  <p>category ::{category}</p>
                  <p>featured :: {featured ? "true" : "false"}</p>
                  <p>shipping::{shipping ? "true" : "false"}</p>
                  <p>stock ::{stock > 0 ? " available" : "not Available"}</p>
                  <p>reviews::{reviews}</p>
                  <p>stars rating ::{stars}</p>
                  <Button
                    onClick={() => {
                      setAddCart(SinglePdata);
                    }}
                  >
                    add to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <p className={Added ? "added" : "not-added"}>added to cart</p>
        </section>
      )}
    </div>
  );
};

export default SingleData;
