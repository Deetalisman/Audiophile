import yx1 from "./images/product-yx1-earphones/desktop/image-product.jpg";

function Earphone({ handlePrev }) {
  return (
    <div>
      <h1 className="headphone1">EARPHONES</h1>
      <Earphonezx9 handlePrev={handlePrev} />
    </div>
  );
}

function Earphonezx9({ handlePrev }) {
  return (
    <div className="mark">
      <img src={yx1} alt="markone" className="markimg" />
      <div className="sub-mark">
        <p className="mark-p">NEW PRODUCT</p>
        <h1 className="mark-h1">
          YX1 WIRELESS <br></br>EARPHONES
        </h1>
        <p className="mark-p1">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones.Enjoy incredible high-fidelity sound even
          in noisy environment with its active noise cancellation feature.
        </p>
        <button className="mark-but" onClick={() => handlePrev(0)}>
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}

export default Earphone;
