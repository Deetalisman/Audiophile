import { Link } from "react-router-dom";
import cart1 from "./images/shared/desktop/icon-cart.svg";
import ham from "./images/shared/tablet/icon-hamburger.svg";
import { useState } from "react";
function Head({
  home,
  head,
  speak,
  ear,
  handleEar,
  handleHead,
  handleHome,
  handleSpeak,
  isHam,
  setIsHam,
  cart,
  setCart,
  add,
  setAdd,
  cartItems,
}) {
  function handleList() {
    setIsHam((isHam) => !isHam);
    console.log(isHam);
  }

  function handleCart() {
    setCart((cart) => !cart);
  }

  return (
    <div className="head">
      <img src={ham} alt="ham" id="ham" onClick={handleList} />
      <h1>audiophile</h1>
      <ul className={"list " + (isHam && "hide")}>
        <li onClick={handleHome}>
          <Link to="/" className={home && "active"}>
            HOME
          </Link>
        </li>
        <li onClick={handleHead}>
          <Link to="/headphone" className={head && "active"}>
            HEADPHONES
          </Link>
        </li>
        <li onClick={handleSpeak}>
          <Link to="/speaker" className={speak && "active"}>
            SPEAKERS
          </Link>
        </li>
        <li onClick={handleEar}>
          <Link to="/earphone" className={ear && "active"}>
            EARPHONES
          </Link>
        </li>
      </ul>
      <div className="cartcartt">
        <img src={cart1} alt="cart" id="cart" onClick={handleCart} />
        {add && <p className="cartlength">{cartItems.length}</p>}
      </div>
    </div>
  );
}

export default Head;
