import earphone from "./images/shared/desktop/image-earphones.png";
import earphone1 from "./images/product-yx1-earphones/tablet/image-gallery-2.jpg";
import headphone from "./images/shared/desktop/image-headphones.png";
import speaker from "./images/shared/desktop/image-speakers.png";
import speakerdisplay from "./images/home/desktop/image-speaker-zx9.png";
import earphonedisplay from "./images/home/desktop/image-earphones-yx1.jpg";
import { useState } from "react";
import { Cart } from "./Cart";
function Home({ handlePrev, proj, count, setCount, cart }) {
  return (
    <div className="HOME">
      <Homephase handlePrev={handlePrev} />
      <Homedisplay />
      <Speakerdisplay handlePrev={handlePrev} />
      <Speakerdisplay2 handlePrev={handlePrev} />
      <Earphonesdisplay handlePrev={handlePrev} />
    </div>
  );
}

function Homephase({ handlePrev }) {
  return (
    <div className="home">
      <p className="home-p">NEW PRODUCT</p>
      <h1 className="home-h1">XX99 MARK II HEADPHONES</h1>
      <p className="home-p1">
        Experience natural,lifelike audio and exceptional build quality made for
        the passionate music enthusiast.
      </p>
      <button onClick={() => handlePrev(3)}>SEE PRODUCT</button>
    </div>
  );
}

function Homedisplay() {
  return (
    <div className="homedisplay">
      <div className="category">
        <img src={headphone} alt="headphone" className="headphone" />
        <p className="cat-title">HEADPHONES</p>
        <p className="shop">
          SHOP<span>></span>
        </p>
      </div>
      <div className="category">
        <img src={speaker} alt="speaker" className="headphone" />
        <p className="cat-title">SPEAKERS</p>
        <p className="shop">
          SHOP<span>></span>
        </p>
      </div>
      <div className="category">
        <img src={earphone} alt="earphone" className="headphone" />
        <p className="cat-title">EARPHONES</p>
        <p className="shop">
          SHOP<span>></span>
        </p>
      </div>
    </div>
  );
}

function Speakerdisplay({ handlePrev }) {
  return (
    <div className="speakerdisplay">
      <img src={speakerdisplay} alt="speakerdisplay" className="speakerimg" />
      <div className="sub-sd">
        <h2>
          ZX9 <br></br> SPEAKER
        </h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound
        </p>
        <button className="speak-but" onClick={() => handlePrev(5)}>
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}

function Speakerdisplay2({ handlePrev }) {
  return (
    <div className="speakerdisplay2">
      <h2>ZX7 SPEAKER</h2>
      <button className="speak2-but" onClick={() => handlePrev(4)}>
        SEE PRODUCT
      </button>
    </div>
  );
}

function Earphonesdisplay({ handlePrev }) {
  return (
    <div className="earphonedisplay">
      <picture id="ear">
        <source src={earphone1} alt="ear" media="(max-width:1000px)" />
        <img src={earphonedisplay} alt="earphone" id="sub-ear" />
      </picture>
      <div className="sub-eardisplay">
        <h2>YX1 EARPHONES</h2>
        <button className="speak2-but" onClick={() => handlePrev(0)}>
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}

export default Home;
