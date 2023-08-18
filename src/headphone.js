import mark2 from "./images/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import mark1 from "./images/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import mark59 from "./images/product-xx59-headphones/desktop/image-product.jpg";
function Headphone({ handlePrev }) {
  return (
    <div>
      <h1 className="headphone1">HEADPHONES</h1>
      <Marktwo handlePrev={handlePrev} />
      <Markone handlePrev={handlePrev} />
      <Mark59 handlePrev={handlePrev} />
    </div>
  );
}

function Marktwo({ handlePrev }) {
  return (
    <div className="mark">
      <img src={mark2} alt="markone" className="markimg" />
      <div className="sub-mark">
        <p className="mark-p">NEW PRODUCT</p>
        <h1 className="mark-h1">
          XX99 MARK II <br></br>HEADPHONES
        </h1>
        <p className="mark-p1">
          The new XX99 Mak 11 headphones is the pinnacle of pristine audi.It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <button className="mark-but" onClick={() => handlePrev(3)}>
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}

function Markone({ handlePrev }) {
  return (
    <div className="mark colo">
      <div className="sub-mark">
        <p className="mark-p">NEW PRODUCT</p>
        <h1 className="mark-h1">
          XX99 MARK I <br></br>HEADPHONES
        </h1>
        <p className="mark-p1">
          As thegold standard for headphones,the classic XX99 Mark 1 offers
          detailed and accurate audio reproduction for audiophiles,mixing
          engineers and music aficionados alike in studios and on the go
        </p>
        <button className="mark-but" onClick={() => handlePrev(1)}>
          SEE PRODUCT
        </button>
      </div>
      <img src={mark1} alt="markone" className="markimg" />
    </div>
  );
}

function Mark59({ handlePrev }) {
  return (
    <div className="mark">
      <img src={mark59} alt="markone" className="markimg" />
      <div className="sub-mark">
        <p className="mark-p">NEW PRODUCT</p>
        <h1 className="mark-h1">
          XX59 <br></br>HEADPHONES
        </h1>
        <p className="mark-p1">
          Enjoy your audio almost everywhere and customize it to your specific
          taste with the XX59 headphone.The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <button className="mark-but" onClick={() => handlePrev(2)}>
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}

export default Headphone;
