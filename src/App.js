import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Head from "./head";
import Home from "./home";
import Feet from "./feet";
import Headphone from "./headphone";
import Speaker from "./speaker";
import Earphone from "./earphone";
import { useEffect, useState } from "react";
import Seeproduct from "./seeproduct";
import products from "./products.json";
import { Cart } from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./checkout";

function App() {
  const [home, setHome] = useState(true);
  const [head, setHead] = useState(false);
  const [speak, setSpeak] = useState(false);
  const [ear, setEar] = useState(false);
  const [see, setSee] = useState(false);
  const [check, setCheck] = useState(false);
  const [isHam, setIsHam] = useState(false);

  function handleHome() {
    setHome(true);
    setHead(false);
    setSpeak(false);
    setEar(false);
    setIsHam(false);
    setCart(false);
    setSee(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  function handleHead() {
    setHead(true);
    setHome(false);
    setSpeak(false);
    setEar(false);
    setIsHam(false);
    setCart(false);
    setSee(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  function handleSpeak() {
    setSpeak(true);
    setHead(false);
    setHome(false);
    setEar(false);
    setIsHam(false);
    setCart(false);
    setSee(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  function handleEar() {
    setEar(true);
    setHead(false);
    setHome(false);
    setSpeak(false);
    setIsHam(false);
    setCart(false);
    setSee(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  const [cartItems, setCartItems] = useState([]);
  function handleAddedToCart(proj, count) {
    proj = {
      id: proj.id,
      name: proj.shortName,
      price: proj.price,
      count: count,
    };
    setCartItems([...cartItems, proj]);
    console.log(cartItems);
    console.log(count);
  }

  const [produ, setProdu] = useState([]);
  const [proj, setProj] = useState([]);
  const [count, setCount] = useState(1);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    setProdu(products);
    // console.log(produ);
    console.log(add);
    console.log(check);
    console.log(see);
  });
  function handlePrev(id) {
    setSee(true);
    setProj(produ[id]);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setCount(1);
  }
  const [cart, setCart] = useState(false);

  return (
    <div className="app">
      <Router>
        <Head
          home={home}
          head={head}
          speak={speak}
          ear={ear}
          handleHome={handleHome}
          handleHead={handleHead}
          handleSpeak={handleSpeak}
          handleEar={handleEar}
          isHam={isHam}
          setIsHam={setIsHam}
          cart={cart}
          setCart={setCart}
          setAdd={setAdd}
          add={add}
        />
        {cart && (
          <Cart
            proj={add && proj}
            setProj={setProj}
            setCount={setCount}
            cartItems={cartItems}
            setCartItems={setCartItems}
            add={add}
            setAdd={setAdd}
            setCheck={setCheck}
            setSee={setSee}
            setCart={setCart}
          />
        )}

        {!see && (
          <Switch>
            <Route exact path="/">
              <Home
                handlePrev={handlePrev}
                proj={proj}
                count={count}
                setCount={setCount}
                cart={cart}
              />
            </Route>
            <Route path="/headphone">
              <Headphone handlePrev={handlePrev} />
            </Route>
            <Route path="/speaker">
              <Speaker handlePrev={handlePrev} />
            </Route>
            <Route path="/earphone">
              <Earphone handlePrev={handlePrev} />
            </Route>
          </Switch>
        )}
        {check && (
          <Checkout
            setCheck={setCheck}
            cartItems={cartItems}
            count={count}
            setSee={setSee}
          />
        )}

        {see && (
          <Seeproduct
            see={see}
            setSee={setSee}
            proj={proj}
            handlePrev={handlePrev}
            count={count}
            setCount={setCount}
            add={add}
            setAdd={setAdd}
            cartItems={cartItems}
            setCartItems={setCartItems}
            onAddedToCart={handleAddedToCart}
            check={check}
          />
        )}
        <Feet
          home={home}
          head={head}
          speak={speak}
          ear={ear}
          handleHome={handleHome}
          handleHead={handleHead}
          handleSpeak={handleSpeak}
          handleEar={handleEar}
          check={check}
        />
      </Router>
    </div>
  );
}

export default App;
