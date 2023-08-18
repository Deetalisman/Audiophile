import person from "./images/shared/desktop/image-best-gear.jpg";
import earphone from "./images/shared/desktop/image-earphones.png";
import headphone from "./images/shared/desktop/image-headphones.png";
import speaker from "./images/shared/desktop/image-speakers.png";
import tab from "./images/shared/tablet/image-best-gear.jpg";
import tab1 from "./images/shared/mobile/image-best-gear.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
function Feet({
  head,
  home,
  speak,
  ear,
  handleEar,
  handleHead,
  handleHome,
  handleSpeak,
}) {
  return (
    <div>
      {!home && <Homedisplay />}
      <Building />
      <Foot
        home={home}
        head={head}
        speak={speak}
        ear={ear}
        handleHome={handleHome}
        handleHead={handleHead}
        handleSpeak={handleSpeak}
        handleEar={handleEar}
      />
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

function Building() {
  return (
    <div className="building">
      <div className="sub-build">
        <h2>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </h2>
        <p>
          Located at the heart of New York City.Audiophile is the premier store
          for high end headphone,earphones,speakers and audio accessories.We
          have a large showroom and luxury demonstration rooms avaliable for you
          to browse and experience a wide range of our product.Stop by our store
          to meet some of the fantastic poeple who make Audiophile the best
          place to buy your portabke audio equipment.
        </p>
      </div>
      <picture>
        <source srcSet={tab1} alt="tab" media="(max-width:700px)" />
        <source srcSet={tab} alt="tab" media="(max-width:1000px)" />
        <img src={person} alt="person" id="person" />
      </picture>
    </div>
  );
}

function Foot({
  head,
  home,
  speak,
  ear,
  handleEar,
  handleHead,
  handleHome,
  handleSpeak,
}) {
  return (
    <div className="foot">
      <div className="sub-foot">
        <h1>audiophile</h1>
        <ul>
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
      </div>
      <div className="sub-foot1">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs.We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <div>
          <small>Copyright 2021. All Rights Reservered</small>
          <div id="icons">
            <FaFacebookSquare className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Feet;
