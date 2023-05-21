import "./App.css";
import img from "./img.png";

export default function Third() {
  return (
    <div style={{ color: "white",display:"flex", alignItems:"center", justifyContent:"space-between" }}>
      <div className="third">
        <div className="thirdM">
          <b>About me</b>

          <p style={{width:700,display:"flex",textAlign:"-webkit-left"}}>
            I’m software developer and this is my portfolio. I’m software
            developer and this is my portfolio. I’m software developer and this
            is my portfolio. I’m software developer and this is my portfolio.
          </p>
          <div style={{display:"flex",gap:70}}>
            <div className="ps">
              <p>Lorem Ipsum Description Text</p>
              <p>Lorem Ipsum Description Text</p>
            </div>
            <div>
              <p>Lorem Ipsum Description Text</p>
              <p>Lorem Ipsum Description Text</p>
            </div>
          </div>
        </div>
      </div>
      <div className="img">
        <img style={{width:280,height:280, marginRight:80}} src={img}></img>
      </div>
    </div>
  );
}
