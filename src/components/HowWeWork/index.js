import React from "react";
import "./index.css";
import { Slide } from "react-awesome-reveal";
function HowWeWork() {
  return (
    <>
      <Slide direction="down" delay={1}>
        <h2 className="how">How We Work</h2>
      </Slide>
      <Slide direction="down" delay={1}>
        <p className="service-pa1">
          "At our company, we take pride in delivering top-notch services that
          exceed your expectations. We are dedicated to providing innovative
          solutions that meet your specific needs and drive your success."
        </p>
      </Slide>
      <div className="how-we-work">
        <div className="steps-container">
          <div className="step-card">
            <Slide direction="down" delay={1}>
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696877998/creativity_vaq9os.png"
                alt="rocket"
                className="icon-how"
              />
            </Slide>
            <Slide direction="down" delay={1}>
              <h2>Project Mission</h2>
              <p>Define the project's goals and objectives.</p>
            </Slide>
          </div>
          <div className="arrow-container">
            <img
              src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696878564/process_2_jy9tvm.png"
              //  src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695656437/right-arrow_pthvov.gif"
              alt="arrow"
              className="arrow"
            />
          </div>
          <div className="step-card">
            <Slide direction="down" delay={1}>
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696878775/time_hamc7b.png"
                alt="rocket"
                className="icon-how"
              />
            </Slide>
            <Slide direction="down" delay={1}>
              <h2>Our Process</h2>
            </Slide>
            <Slide direction="down" delay={1}>
              <p>Follow our established development process.</p>
            </Slide>
          </div>
          <div className="arrow-container">
            <img
              src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696878564/process_2_jy9tvm.png"
              alt="arrow"
              className="arrow"
            />
          </div>
          <div className="step-card">
            <Slide direction="down" delay={1}>
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696878213/product_o3bdcs.png"
                alt="rocket"
                className="icon-how"
              />
            </Slide>

            <Slide direction="down" delay={1}>
              <h2>Product Delivery</h2>
            </Slide>
            <Slide direction="down" delay={1}>
              <p>Deliver the final product to our clients.</p>
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowWeWork;
