import { useState } from "react";
import head1 from "./images/category-headphones/desktop/image-xx99-mark-one.jpg";
import head2 from "./images/category-headphones/desktop/image-xx99-mark-two.jpg";
import speak1 from "./images/category-speakers/desktop/image-zx9.jpg";
import ment from "./images/product-yx1-earphones/desktop/image-product.jpg";
import ment1 from "./images/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import ment2 from "./images/product-xx59-headphones/desktop/image-product.jpg";
import ment3 from "./images/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import ment4 from "./images/product-zx7-speaker/desktop/image-product.jpg";
import ment5 from "./images/product-zx9-speaker/desktop/image-product.jpg";
import gEar1 from "./images/product-yx1-earphones/desktop/image-gallery-1.jpg";
import gEar2 from "./images/product-yx1-earphones/desktop/image-gallery-2.jpg";
import gEar3 from "./images/product-yx1-earphones/tablet/image-gallery-3.jpg";
import xx99mark1 from "./images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import xx99mark2 from "./images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import xx99mark3 from "./images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";
import xx591 from "./images/product-xx59-headphones/desktop/image-gallery-1.jpg";
import xx592 from "./images/product-xx59-headphones/desktop/image-gallery-2.jpg";
import xx593 from "./images/product-xx59-headphones/desktop/image-gallery-3.jpg";
import xx99mark21 from "./images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import xx99mark22 from "./images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import xx99mark23 from "./images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import zx71 from "./images/product-zx7-speaker/desktop/image-gallery-1.jpg";
import zx72 from "./images/product-zx7-speaker/desktop/image-gallery-2.jpg";
import zx73 from "./images/product-zx7-speaker/desktop/image-gallery-3.jpg";
import zx91 from "./images/product-zx9-speaker/desktop/image-gallery-1.jpg";
import zx92 from "./images/product-zx9-speaker/desktop/image-gallery-2.jpg";
import zx93 from "./images/product-zx9-speaker/desktop/image-gallery-3.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Seeproduct({
  proj,
  setSee,
  handlePrev,
  count,
  setCount,
  add,
  setAdd,
  cartItems,
  setCartItems,
  onAddedToCart,
  check,
}) {
  function handlePrav() {
    setSee(false);
  }
  function handleAdd(proj, count) {
    setAdd(true);
    onAddedToCart(proj, count);
    console.log(proj.id);
    console.log(add);
    Notify(proj);
    console.log(count);
  }
  function Notify(proj) {
    toast(proj.name + " " + "has been added to cart");
  }
  return (
    <div className={"seeproduct " + (check ? "none" : "")}>
      <p className="back" onClick={handlePrav}>
        Go back
      </p>
      {proj && (
        <Seeproduct1
          proj={proj}
          count={count}
          setCount={setCount}
          add={add}
          setAdd={setAdd}
          cartItems={cartItems}
          setCartItems={setCartItems}
          onAddedToCart={onAddedToCart}
          handleAdd={handleAdd}
        />
      )}
      <Alsolike handlePrev={handlePrev} />
    </div>
  );
}

function Seeproduct1({
  proj,
  count,
  setCount,
  add,
  setAdd,
  cartItems,
  setCartItems,
  onAddedToCart,
  handleAdd,
}) {
  return (
    <>
      <div className="mark-prod">
        <img
          src={
            proj.id === 1
              ? ment
              : proj.id === 2
              ? ment1
              : proj.id === 3
              ? ment2
              : proj.id === 4
              ? ment3
              : proj.id === 5
              ? ment4
              : ment5
          }
          alt="markone"
          className="markimg"
        />
        <div className="sub-mark">
          <p className="prod-p">NEW PRODUCT</p>
          <h1 className="prod-h1">{proj.name}</h1>
          <p className="mark-p1">{proj.description}</p>
          <p className="price">$ {proj.price}</p>
          <div className="sub-sp1">
            <div className="counts">
              <p
                className="coun"
                onClick={() => count > 0 && setCount(count - 1)}
              >
                -
              </p>
              <p>{count}</p>
              <p className="coun" onClick={() => setCount(count + 1)}>
                +
              </p>
            </div>
            <button
              id="add"
              className="prod-but"
              onClick={() => handleAdd(proj, count)}
            >
              ADD TO CART
            </button>
            <ToastContainer
              id="toast"
              style={{ fontSize: "7rem", width: "40rem" }}
            />
          </div>
        </div>
      </div>
      <Features proj={proj} />
      <Gallery proj={proj} />
    </>
  );
}

function Features({ proj }) {
  return (
    <div className="features">
      <div className="feature">
        <h1>FEATURES</h1>
        <p>{proj.features}</p>
      </div>
      <div className="in-box">
        <h1>IN THE BOX</h1>
        <div>
          {proj.includedItems?.map((include) => (
            <p className="include">
              <span>{include.quantity}X </span> {include.item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Gallery({ proj }) {
  return (
    <div className="gallery">
      <div className="gallery1">
        <img
          src={
            proj.id === 1
              ? gEar1
              : proj.id === 2
              ? xx99mark1
              : proj.id === 3
              ? xx591
              : proj.id === 4
              ? xx99mark21
              : proj.id === 5
              ? zx71
              : zx91
          }
          alt="gallery"
        />{" "}
        <br></br>
        <img
          src={
            proj.id === 1
              ? gEar2
              : proj.id === 2
              ? xx99mark2
              : proj.id === 3
              ? xx592
              : proj.id === 4
              ? xx99mark22
              : proj.id === 5
              ? zx72
              : zx92
          }
          alt="gallery"
        />
      </div>
      <img
        src={
          proj.id === 1
            ? gEar3
            : proj.id === 2
            ? xx99mark3
            : proj.id === 3
            ? xx593
            : proj.id === 4
            ? xx99mark23
            : proj.id === 5
            ? zx73
            : zx93
        }
        alt="gallery"
        className="gthree"
      />
    </div>
  );
}

function Alsolike({ handlePrev }) {
  return (
    <div className="alsos">
      <div className="also">
        <img src={head1} alt="head" className="pre-img" />
        <h2>XX99 MARK 1</h2>
        <button className="mark-but" onClick={() => handlePrev(1)}>
          SEE PRODUCT
        </button>
      </div>
      <div className="also">
        <img src={head2} alt="head" className="pre-img" />
        <h2>XX59</h2>
        <button className="mark-but" onClick={() => handlePrev(2)}>
          SEE PRODUCT
        </button>
      </div>
      <div className="also">
        <img src={speak1} alt="head" className="pre-img" />
        <h2>ZX9 SPEAKER</h2>
        <button className="mark-but" onClick={() => handlePrev(5)}>
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}

export default Seeproduct;
