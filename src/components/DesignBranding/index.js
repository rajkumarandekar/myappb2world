import React, { Component } from "react";
import "./index.css";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
class DynamicTextComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Design Branding",
      displayText: "",
      currentIndex: 0,
      showCursor: true,
    };
  }

  componentDidMount() {
    this.typewriterEffect();
  }

  typewriterEffect = () => {
    const { text, currentIndex } = this.state;
    if (currentIndex <= text.length) {
      this.setState((prevState) => ({
        displayText: text.slice(0, currentIndex + 1),
        currentIndex: prevState.currentIndex + 1,
      }));

      if (currentIndex < text.length) {
        setTimeout(this.typewriterEffect, 150);
      }
    }
  };

  render() {
    return (
      <div className="dynamic-text">
        <h2 className="h-web-dynamic">{this.state.displayText}</h2>
      </div>
    );
  }
}

function DesignBranding() {
  return (
    <>
      <Header />
      <div className="main-web-dynamic1">
        <div className="main-web-dynamic">
          <img
            src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696535473/geeks-2894621_1280_m4mttw.jpg"
            className="dwaed"
            alt="ed"
          />
          <DynamicTextComponent />
        </div>
        <Slide direction="left" delay={1}>
          <h2 className="head-webapp-3">
            Web development is the art of crafting digital experiences through
            code, encompassing both frontend and backend
          </h2>
        </Slide>

        <div className="desc1">
          <Slide direction="left" delay={1}>
            <div className="web-pp1">
              <h1 className="web-a1">
                A Professional Web App Development Company
              </h1>
              <p className="web-p">
                A website is what digitally introduces you and your services to
                your clients. The site must be user-friendly, robust, and fast
                to load in any browser. So, if you are looking for a company
                that can design such a website for you, Electrum is the right
                one to choose from.
                <br />
                <br />
                <br />
                We develop the designs that are unique, creative and describe
                your company. We ensure that we will include everything that you
                will want on your website. With Electrum, you are sure to get a
                site that connects well with your customers.
                <br />
                <br /> We take customer satisfaction very seriously. From
                collecting requirements to designing the application and finally
                deploying it – we assure that we take everything you say into
                consideration. At the final step, when you see the application
                designed by us, you will find close to you and your business.
              </p>
            </div>
          </Slide>
          <Slide direction="right" delay={1}>
            <img
              src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696302260/app_limwlr.png"
              className="img-w"
              alt="d"
            />
          </Slide>
        </div>
        <div className="why1">
          <Slide direction="left" delay={1}>
            <h1 className="why-h2">
              Why Choose Us for Web App Development Services
            </h1>
          </Slide>

          <div className="why-img-des1">
            <Slide direction="left" delay={1}>
              <p className="why-p1">
                We are equipped with an experienced team that is skilled in
                various technologies to give you a website that matches your
                business.
                <br />
                <br />
                Not only developers, but we also have the designers who are
                creative and flexible to give you the best-suitable web pages.
                By working together, we will give you a website that quickly
                connects with your targeted audience.
              </p>
            </Slide>
            <Slide direction="right" delay={1}>
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696569301/mobile_h6mkpp.png"
                alt="img22"
                className="img20"
              />
            </Slide>
          </div>
          <div className="fea-why1">
            <div className="sss">
              <Slide direction="left" delay={1}>
                <h2 className="here1">
                  Here’s why should choose us for Web app development service:
                </h2>
              </Slide>
              <Slide direction="left" delay={1}>
                <div className="fea-all1">
                  <div className="con-fea11">
                    <img
                      src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696304530/check_m4hpc4.png"
                      alt="con-fea"
                      className="con-fea1"
                    />
                    <p className="con-fea-h1">Affordable Pricing</p>
                  </div>

                  <div className="con-fea11">
                    <img
                      src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696304530/check_m4hpc4.png"
                      alt="con-fea"
                      className="con-fea1"
                    />
                    <p className="con-fea-h1">
                      Innovative and creative mobile app designs
                    </p>
                  </div>

                  <div className="con-fea11">
                    <img
                      src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696304530/check_m4hpc4.png"
                      alt="con-fea"
                      className="con-fea1"
                    />
                    <p className="con-fea-h1">Full-time technical support</p>
                  </div>

                  <div className="con-fea11">
                    <img
                      src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696304530/check_m4hpc4.png"
                      alt="con-fea"
                      className="con-fea1"
                    />
                    <p className="con-fea-h1">
                      A team of qualified and skilled developers
                    </p>
                  </div>

                  <div className="con-fea11">
                    <img
                      src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696304530/check_m4hpc4.png"
                      alt="con-fea"
                      className="con-fea1"
                    />
                    <p className="con-fea-h1">
                      Constant and honest communication with our clients
                    </p>
                  </div>
                </div>
              </Slide>
            </div>
            <Slide direction="right" delay={1}>
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696306677/cleaning_lmnvnl.png"
                alt="img2"
                className="img32"
              />
            </Slide>
          </div>
          <div className="dont-con1">
            <h2 className="dont-oo">
              Don’t hesitate to reach out for us when you require the most
              effective, no-lagging mobile apps for your business.
              <br />
              <br />
              We can prove that we are the right developers for you.
            </h2>
          </div>
          <div className="need-more-con">
            <div className="need-more">
              <h1 className="need-h1">Need More?</h1>
              <p className="need-p">
                Looking for limits scale with your audience ? Our Development
                team is here to help
              </p>
              <button className="btn-sales">Talk to Team</button>
            </div>

            <div className="need-more">
              <Link to="/contactus">
                <h1 className="need-h2">Contact Support</h1>
              </Link>
              <p className="need-p2">
                Need help choosing the right plan for your business? Chat with
                support today!
              </p>
              <Link to="/contactus">
                <button className="btn-sales1">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-web">
        <Footer />
      </div>
    </>
  );
}
export default DesignBranding;
