import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Cart from "./Cart";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import About from "./About";
import ErorrPage from "./ErorrPage";
import Header from "./componets/Header";
import Footer from "./componets/Footer";

const App = () => {
  const theme = {
    colors: {
      bg: "",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
            <Route path="*" element={<ErorrPage />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
};
export default App;
