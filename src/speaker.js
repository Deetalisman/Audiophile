import zx9 from "./images/product-zx9-speaker/desktop/image-product.jpg";
import zx7 from "./images/product-zx7-speaker/desktop/image-product.jpg";

function Speaker({ handlePrev }) {
  return (
    <div>
      <h1 className="headphone1">SPEAKERS</h1>
      <Speakerzx9 handlePrev={handlePrev} />
      <Speakerzx7 handlePrev={handlePrev} />
    </div>
  );
}

function Speakerzx9({ handlePrev }) {
  return (
    <div className="mark">
      <img src={zx9} alt="markone" className="markimg" />
      <div className="sub-mark">
        <p className="mark-p">NEW PRODUCT</p>
        <h1 className="mark-h1">ZX9 SPEAKER</h1>
        <p className="mark-p1">
          Upgrade your sound system with the all new ZX9 active speaker.It's a
          bookshelf speaker system that offers truly wireless
          connectivit-creating new possibilities for more pleasing and practical
          audio setups.
        </p>
        <button className="mark-but" onClick={() => handlePrev(5)}>
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}

function Speakerzx7({ handlePrev }) {
  return (
    <div className="mark colo">
      <div className="sub-mark">
        <p className="mark-p">NEW PRODUCT</p>
        <h1 className="mark-h1">ZX7 SPEAKER</h1>
        <p className="mark-p1">
          Stream high quality sound wirelessly with minimal to no loss.The ZX7
          speaker uses high-end audiophile components that represents the top of
          the line powered speakers for home or studio use.
        </p>
        <button className="mark-but" onClick={() => handlePrev(4)}>
          SEE PRODUCT
        </button>
      </div>
      <img src={zx7} alt="markone" className="markimg" />
    </div>
  );
}

export default Speaker;
