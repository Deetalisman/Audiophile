import { useEffect, useState } from "react";
import yx1 from "./images/cart/image-yx1-earphones.jpg";
import xx991 from "./images/cart/image-xx99-mark-one-headphones.jpg";
import xx59 from "./images/cart/image-xx59-headphones.jpg";
import xxx992 from "./images/cart/image-xx99-mark-two-headphones.jpg";
import zx7 from "./images/cart/image-zx7-speaker.jpg";
import zx9 from "./images/cart/image-zx9-speaker.jpg";
import empty from "./images/cart/empty-cart.png";
import products from "./products.json";
import { Link } from "react-router-dom";

export function Cart({
  proj,
  setProj,
  count,
  setCount,
  cartItems,
  setCartItems,
  add,
  setAdd,
  setSee,
  setCart,
  setCheck,
}) {
  return (
    <div className="cart">
      {!add && <Cartisempty />}
      {add && (
        <Beforecard
          proj={add && proj}
          count={count}
          setCount={setCount}
          cartItems={cartItems}
          setCartItems={setCartItems}
          setAdd={setAdd}
          setSee={setSee}
          setCart={setCart}
          setCheck={setCheck}
        />
      )}
    </div>
  );
}

function Cartisempty() {
  return (
    <div className="cartisempty">
      <p>Your cart is empty</p>
      <img src={empty} className="emptycart" />
    </div>
  );
}
function Beforecard({
  proj,
  count,
  setCount,
  cartItems,
  setCartItems,
  setAdd,
  setSee,
  setCart,
  setCheck,
}) {
  function handleRemove() {
    setCartItems([]);
    setAdd(false);
  }
  return (
    <div className="cart7">
      <div className="cart1">
        <h2>CART({cartItems.length})</h2>
        <p onClick={handleRemove} className="remove">
          Remove all
        </p>
      </div>
      <AddedToCart count={count} setCount={setCount} cartItems={cartItems} />
      <Checkout setSee={setSee} setCart={setCart} setCheck={setCheck} />
    </div>
  );
}

function AddedToCart({ cartItems, count, setCount }) {
  return (
    <div className="cartcart">
      <ul>
        {cartItems?.map((cartItem) => (
          <Cartdetails
            cartItem={cartItem}
            count={count}
            setCount={setCount}
            key={cartItem.id}
          />
        ))}
      </ul>
      <Price cartItems={cartItems} />
    </div>
  );
}
function Cartdetails({ cartItem, proj, count, setCount }) {
  return (
    <div className="cart2">
      <div className="cart3">
        <img
          src={
            cartItem.id === 1
              ? yx1
              : cartItem.id === 2
              ? xx991
              : cartItem.id === 3
              ? xx59
              : cartItem.id === 4
              ? xxx992
              : cartItem.id === 5
              ? zx7
              : cartItem.id === 6
              ? zx9
              : null
          }
          alt="cart"
          className="cartimg"
        />
        <div className="cart4">
          <p>{cartItem.shortName}</p>
          <p>${cartItem.price}</p>
        </div>
      </div>
      <div className="counts cartc">
        <p className="coun" onClick={() => count > 1 && setCount(count - 1)}>
          -
        </p>
        <p>{count}</p>
        <p className="coun" onClick={() => setCount(count + 1)}>
          +
        </p>
      </div>
    </div>
  );
}

function Price({ cartItems, count }) {
  return (
    <div className="cart5">
      <p>TOTAL</p>
      <p>${cartItems.map((cartItem) => cartItem.price)}</p>
    </div>
  );
}

function Checkout({ setSee, setCart, setCheck }) {
  function handleCheck() {
    setCart(false);
    setCheck(true);
    setSee(true);
  }
  return (
    <button className="checkout" onClick={handleCheck}>
      CHECKOUT
    </button>
  );
}
