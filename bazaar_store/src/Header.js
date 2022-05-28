import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="data:image/jpeg;base64,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"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Term</span>
          <span className="header__optionLineTwo">Condition</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">How to</span>
          <span className="header__optionLineTwo">Care</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
