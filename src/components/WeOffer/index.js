import "./index.css";
import { Slide } from "react-awesome-reveal";
function WeOffer() {
  return (
    <div className="we-offer-main">
      <div className="we-offer">
        <Slide direction="left" delay={1}>
          <h1 className="we-text">
            We provide top-notch services tailored to your specific
            requirements.
          </h1>
        </Slide>
        <Slide direction="left" delay={1}>
          <p className="we-para">
            We assist in overcoming challenges related to technology complexity,
            time constraints, and budget limitations, ultimately achieving
            exceptional outcomes.
          </p>
        </Slide>
        <Slide direction="left" delay={1}>
          <a href="/contactus" className="ppo" alt="j">
            <button className="btn-R">Contact Us</button>
          </a>
        </Slide>
      </div>
      <div className="tree-con">
        <Slide direction="right" delay={1}>
          <img
            src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695696838/Web-Development-1-148_bba9cc.jpg"
            className="we-img"
            alt="ii"
          />
        </Slide>
      </div>
    </div>
  );
}
export default WeOffer;
