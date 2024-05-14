import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { useCart } from "../Context/CartContext";

export default function Nav() {
  const { cartItems } = useCart({});
  const [activeClass, setActiveClass] = useState(false);
  const classHolder = `pages ${activeClass ? "activeMenu" : "inactiveMenu"}`;

  return (
    <NavBar>
      <ul className={classHolder}>
        <li>
          <NavLink to="/" className="pages-list hover-state">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className="pages-list hover-state">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className="pages-list hover-state">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/Products" className="pages-list hover-state">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/Cart" className="pages-list cart-link">
            <IoCartOutline className="cart-icon" />
            <span className="cart-num">
              {cartItems &&
                cartItems.reduce(
                  (total, quantity) => total + quantity.quantity,
                  0
                )}
            </span>
          </NavLink>
        </li>
      </ul>
      <div
        className="close-menu"
        onClick={() => setActiveClass((active) => !active)}
      >
        <MdMenuOpen />
      </div>
    </NavBar>
  );
}

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
  .pages {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  .pages-list{font-size:14px;    color: white;}
  .cart-icon,
  .cart-link {
    height: 24px;
    width: 24px;
    position: relative;
  }
  .cart-num {
    position: absolute;
    top: -15px;
    right: -3px;
    padding: 3px;
    background-color: black;
    border-radius: 50%;
    color: white;
    height: 12px;
    width: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8px;
  }
  .close-menu {
    display: none;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    .close-menu {
      display: block;
      height: 26px;
      width: 26px;
    }
    .close-menu svg{
      width:100%;
      height:auto;
    
    }
    .inactiveMenu {
      display: none;
    }
    .pages-list{font-size:10px;}
    
    
`;
