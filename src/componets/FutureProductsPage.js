// import SingleProduct from "../SingleProduct";
// import { useEffect, useState } from "react";
import FeaturedProduts from "../componets/FeaturedProduts";
// import { useProductContext } from "../Context/ProductContext";
// import { useProductContext } from "../Context/ProductContext";

export default function FutureProductsPage() {
  // const { isLoading, featuredProducts } = useProductContext();
  // console.log(featuredProducts, "Featured PrOduts data");
  // const [dataState, setDataState] = useState();
  // const [loading, setLoading] = useState(true);
  // const [errorCatch, setErrorCatch] = useState(false);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       // console.log("loading");

  //       const dataProducts = "https://api.pujakaitem.com/api/products";
  //       const res = await fetch(dataProducts);
  //       const productData = await res.json();
  //       // console.log("mohan", productData);
  //       // console.log(res)
  //       setDataState(productData);
  //       setLoading(false);
  //       console.log("loaded");
  //     } catch (error) {
  //       console.log(error, "error");
  //       setLoading(false);
  //       setErrorCatch(true);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // console.log("mohan", dataState);
  // console.log("vinay", dataState.colors);

  // if (dataState.featured) {
  //   console.log("only Featured", dataState);
  // }

  return (
    <section>
      <div className="container">
        <h2 className="mb-4">Our featured produts</h2>
        <FeaturedProduts />
      </div>

      {/* <div className="container">hello</div> */}
    </section>
  );
}
