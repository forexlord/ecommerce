import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  // Example of correct usage in Header.js:
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img className="header-logo" src="./images/ecommerce.png" alt="" />
      </Link>
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchOutlinedIcon className="hearder-searchIcon" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"} className="header-link">
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-optionLineOne">Hello {user?.email}</span>
            <span className="header-optionLineTwo">
              {user ? "Sign Out" : "sign In"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& orders</span>
          </div>
        </Link>

        <Link className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Your</span>
            <span className="header-optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header-link">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
