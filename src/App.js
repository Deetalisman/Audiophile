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

function App() {
  const [home, setHome] = useState(true);
  const [head, setHead] = useState(false);
  const [speak, setSpeak] = useState(false);
  const [ear, setEar] = useState(false);
  const [see, setSee] = useState(false);
  const [isHam, setIsHam] = useState(false);

  function handleHome() {
    setHome(true);
    setHead(false);
    setSpeak(false);
    setEar(false);
    setIsHam(false);
  }
  function handleHead() {
    setHead(true);
    setHome(false);
    setSpeak(false);
    setEar(false);
    setIsHam(false);
  }
  function handleSpeak() {
    setSpeak(true);
    setHead(false);
    setHome(false);
    setEar(false);
    setIsHam(false);
  }
  function handleEar() {
    setEar(true);
    setHead(false);
    setHome(false);
    setSpeak(false);
    setIsHam(false);
  }

  const [produ, setProdu] = useState([]);
  const [proj, setProj] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setProdu(products);
    console.log(produ);
  });
  function handlePrev(id) {
    setSee(true);
    setProj(produ[id]);
    // console.log(proj);
  }
  const [cart, setCart] = useState(false);
  const [add, setAdd] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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
          add={add}
          setAdd={setAdd}
        />
        {cart && (
          <Cart
            proj={add && proj}
            setProj={setProj}
            count={count}
            setCount={setCount}
            cartItems={cartItems}
            setCartItems={setCartItems}
            add={add}
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
        />
      </Router>
    </div>
  );
}

export default App;
