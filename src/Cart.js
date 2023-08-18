import { useEffect } from "react";
import yx1 from "./images/cart/image-yx1-earphones.jpg";
import xx991 from "./images/cart/image-xx99-mark-one-headphones.jpg";
import xx59 from "./images/cart/image-xx59-headphones.jpg";
import xxx992 from "./images/cart/image-xx99-mark-two-headphones.jpg";
import zx7 from "./images/cart/image-zx7-speaker.jpg";
import zx9 from "./images/cart/image-zx9-speaker.jpg";
import empty from "./images/cart/empty-cart.png";
export function Cart({
  proj,
  setProj,
  count,
  setCount,
  cartItems,
  setCartItems,
  add,
}) {
  useEffect(() => {
    setCartItems(proj);
    console.log(proj);
  });
  return (
    <div className="cart">
      {!add && <Cartisempty />}
      {add && <Beforecard proj={proj} count={count} setCount={setCount} />}
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
function Beforecard({ proj, count, setCount }) {
  return (
    <div className="cart7">
      <div className="cart1">
        <h2>CART(0)</h2>
        <p>Remove all</p>
      </div>
      <Cartdetails proj={proj} count={count} setCount={setCount} />
      <div className="cart5">
        <p>TOTAL</p>
        <p>${proj.price * count}</p>
      </div>
    </div>
  );
}
function Cartdetails({ proj, count, setCount }) {
  return (
    <div className="cart2">
      <div className="cart3">
        <img
          src={
            proj.id === 1
              ? yx1
              : proj.id === 2
              ? xx991
              : proj.id === 3
              ? xx59
              : proj.id === 4
              ? xxx992
              : proj.id === 5
              ? zx7
              : proj.id === 6
              ? zx9
              : null
          }
          alt="cart"
          className="cartimg"
        />
        <div className="cart4">
          <p>{proj.shortName}</p>
          <p>${proj.price}</p>
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
