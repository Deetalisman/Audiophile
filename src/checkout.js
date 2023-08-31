import { Formik, useFormik } from "formik";
import * as yup from "yup";
import yx1 from "./images/cart/image-yx1-earphones.jpg";
import xx991 from "./images/cart/image-xx99-mark-one-headphones.jpg";
import xx59 from "./images/cart/image-xx59-headphones.jpg";
import xxx992 from "./images/cart/image-xx99-mark-two-headphones.jpg";
import zx7 from "./images/cart/image-zx7-speaker.jpg";
import zx9 from "./images/cart/image-zx9-speaker.jpg";
import checkimg from "./images/checkout/icon-cash-on-delivery.svg";
import { useState } from "react";
function Checkout({ setCheck, cartItems, count, setSee }) {
  function handleGoback() {
    setCheck(false);
  }
  const [checkout, setCheckout] = useState(false);
  return (
    <div className="checkout">
      <p onClick={handleGoback} className="goback">
        GO BACK
      </p>
      <Checkoutform
        cartItems={cartItems}
        count={count}
        setCheckout={setCheckout}
      />
      {checkout && (
        <Completed
          setCheckout={setCheckout}
          setCheck={setCheck}
          setSee={setSee}
        />
      )}
    </div>
  );
}

function Checkoutform({ cartItems, count, setCheckout }) {
  const onSubmit = (values, actions) => {
    console.log("submitted");
    console.log(actions);
    actions.resetForm();
    setCheckout(true);
  };
  const basicSchema = yup.object().shape({
    name: yup.string().required("Required").min(6),
    email: yup.string().email("Enter a valid email").required("Required"),
    number: yup.number().required("Required"),
    address: yup.string().required("Required"),
    zipCode: yup.number().required("Required"),
    city: yup.string().required("Required"),
    country: yup.string().required("Required"),
    emoneyNumber: yup.number().min(9).required("Required"),
    emoneyPin: yup.number().min(4).required("Required"),
  });
  const { errors, values, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        number: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        emoneyNumber: "",
        emoneyPin: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  console.log(errors);
  return (
    <div className="checkoutform">
      <form>
        <h1 className="checkhead">CHECKOUT</h1>
        <h2 className="checkdetail">BILLING DETAILS</h2>
        <nav>
          <small>
            <label>Name</label>
            <br></br>

            <input
              type="text"
              id="name"
              placeholder="Ajiboye Ismail"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? "error" : ""}
            />
            {errors.name && touched.name && (
              <p className="error1">{errors.name}</p>
            )}
          </small>
          <br></br>
          <small>
            <label>Email</label>
            <br></br>

            <input
              type="email"
              id="email"
              placeholder="Ajiboye@gmail.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "error" : ""}
            />
            {errors.email && touched.email && (
              <p className="error1">{errors.email}</p>
            )}
          </small>
          <br></br>

          <small>
            <label>Phone Number</label>
            <br></br>

            <input
              type="number"
              id="number"
              placeholder="+1 234-567-890"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.number && touched.number ? "error" : ""}
            />
            {errors.number && touched.number && (
              <p className="error1">{errors.number}</p>
            )}
          </small>
        </nav>
        <h2 className="checkdetail">SHIPPING INFO</h2>
        <article>
          <small>
            <label>Your Address</label>
            <br></br>

            <input
              type="address"
              id="address"
              placeholder="No 30, React street,Javascript"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.address && touched.address ? "error" : ""}
            />
            {errors.address && touched.address && (
              <p className="error1">{errors.address}</p>
            )}
          </small>
          <br></br>
          <nav>
            <small>
              <label>Zipcode</label>
              <br></br>

              <input
                type="number"
                id="zipCode"
                placeholder="11000"
                value={values.zipCode}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.zipCode && touched.zipCode ? "error" : ""}
              />
              {errors.zipCode && touched.zipCode && (
                <p className="error1">{errors.zipCode}</p>
              )}
            </small>
            <br></br>
            <small>
              <label>City</label>
              <br></br>

              <input
                type="text"
                id="city"
                placeholder="Ketu"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.city && touched.city ? "error" : ""}
              />
              {errors.city && touched.city && (
                <p className="error1">{errors.city}</p>
              )}
            </small>
            <br></br>

            <small>
              <label>Country</label>
              <br></br>

              <input
                type="text"
                id="country"
                placeholder="Nigeria"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.country && touched.country ? "error" : ""}
              />
              {errors.country && touched.country && (
                <p className="error1">{errors.country}</p>
              )}
            </small>
          </nav>
        </article>
        <h2 className="checkdetail">PAYMENT DETAILS</h2>
        <aside>
          <div className="payment">
            {" "}
            <input type="checkbox" className="checkbox" />
            <p>e-payment</p>
          </div>
          <div className="payment">
            {" "}
            <input type="checkbox" className="checkbox" />
            <p>Cash on delivery</p>
          </div>
        </aside>
        <nav>
          <small>
            <label>e-money Number</label>
            <br></br>

            <input
              type="number"
              id="emoneyNumber"
              placeholder="1234567"
              value={values.emoneyNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.emoneyNumber && touched.emoneyNumber ? "error" : ""
              }
            />
            {errors.emoneyNumber && touched.emoneyNumber && (
              <p className="error1">{errors.emoneyNumber}</p>
            )}
          </small>
          <br></br>

          <small>
            <label>e-money PIN </label>
            <br></br>

            <input
              type="number"
              id="emoneyPin"
              placeholder="2222"
              value={values.emoneyPin}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.emoneyPin && touched.emoneyPin ? "error" : ""}
            />
            {errors.emoneyPin && touched.emoneyPin && (
              <p className="error1">{errors.emoneyPin}</p>
            )}
          </small>
        </nav>
      </form>
      <mark>
        <h2>SUMMARY</h2>
        <AddedToCart cartItems={cartItems} count={count} />
        <Totalcheck handleSubmit={handleSubmit} cartItems={cartItems} />
      </mark>
    </div>
  );
}

function AddedToCart({ cartItems, count, setCount }) {
  return (
    <div>
      <ul>
        {cartItems?.map((cartItem) => (
          <Cartdetails cartItem={cartItem} count={count} key={cartItem.id} />
        ))}
      </ul>
    </div>
  );
}
function Cartdetails({ cartItem, count }) {
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
          <p>{cartItem.name}</p>
          <p>${cartItem.price}</p>
        </div>
      </div>
      <p className="checkcount">x{cartItem.count}</p>
    </div>
  );
}

function Totalcheck({ handleSubmit, cartItems }) {
  let Checktotal = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.count,
    0
  );
  let Checkvat = cartItems.reduce(
    (acc, cur) => Math.floor((acc + cur.price * cur.count * 10) / 100),
    0
  );
  return (
    <div className="totalcheck">
      <div className="sub-tc">
        <p>TOTAL</p>
        <p className="checkp">${Checktotal}</p>
      </div>
      <div className="sub-tc">
        <p>SHIPPING</p>
        <p className="checkp">$50</p>
      </div>
      <div className="sub-tc">
        <p>VAT(INCLUDED)</p>
        <p className="checkp">${Checkvat}</p>
      </div>

      <div className="sub-tc">
        <p>GRAND TOTAL</p>
        <p className="checkp">${Checktotal + 50 + Checkvat}</p>
      </div>
      <button className="continue" onClick={handleSubmit}>
        CONTINUE & PAY
      </button>
    </div>
  );
}

function Completed({ setCheckout, setCheck, setSee }) {
  return (
    <div className="completed">
      <Maincomplete
        setCheckout={setCheckout}
        setCheck={setCheck}
        setSee={setSee}
      />
    </div>
  );
}

function Maincomplete({ setCheckout, setCheck, setSee }) {
  function handlecheckout() {
    setCheckout(false);
    setCheck(false);
    setSee(false);
  }
  return (
    <div className="maincomplete">
      <img src={checkimg} className="checkimg" />
      <h1 className="mchead">THANK YOU FOR YOUR ORDER</h1>
      <p className="mcp">You will receive an email confirmation shortly</p>
      <button className="continue" onClick={handlecheckout}>
        BACK TO HOME
      </button>
    </div>
  );
}
export default Checkout;
