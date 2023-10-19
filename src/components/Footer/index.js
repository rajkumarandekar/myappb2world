import "./index.css";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="M-cube-con">
          <div className="m-cube">
            <h1 className="cube-h">
              <Link to="/" className="navbar-logo">
                <Slide direction="down" delay={1}>
                  <img
                    src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695396386/Company_20Logo.png_lv3klc.png"
                    alt="img"
                    className="img1"
                  />
                </Slide>
              </Link>
            </h1>
            <Slide direction="down" delay={1}>
              <p className="cube-p">
                At B2World, We Are Passionate About Technology And Its Potential
                To Transform Businesses. As A Dynamic And Innovative Startup.
              </p>
            </Slide>

            <Slide direction="down" delay={1}>
              <div className="img-con-foot">
                <img
                  src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697051106/instagram_1_kt5sfr.png"
                  alt="face-foot"
                  className="face-foot"
                />
                <img
                  src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697051112/facebook_rqkq3l.png"
                  alt="face-foot"
                  className="face-foot"
                />
                <img
                  src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697051126/youtube_ea7fbn.png"
                  alt="face-foot"
                  className="face-foot"
                />
                <img
                  src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697051120/linkedin_1_kno5sg.png"
                  alt="face-foot"
                  className="face-foot"
                />
              </div>
            </Slide>
            <div className="sms-foot-con">
              <Slide direction="down" delay={1}>
                <img
                  src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697052607/email_oib49x.png"
                  alt="sms-foot"
                  className="sms-foot"
                />
              </Slide>
              <Slide direction="down" delay={1}>
                <p className="foot-contact">contact@b2world.com</p>
              </Slide>
            </div>
          </div>

          <div className="links-foot">
            <Slide direction="down" delay={1}>
              <h1 className="cube-h">Quick Links</h1>
            </Slide>
            <hr />
            <ul className="ul-con">
              <span className="s">
                <Slide direction="down" delay={1}>
                  <li>Home</li>
                </Slide>
              </span>
              <li>
                <Slide direction="down" delay={1}>
                  <a href="/services">Services</a>
                </Slide>
              </li>
              <li>
                <Slide direction="down" delay={1}>
                  <a href="/pricing">Pricing</a>
                </Slide>
              </li>
              <li>
                <Slide direction="down" delay={1}>
                  <a href="/team">Meet The Team</a>
                </Slide>
              </li>
              <li>
                <Slide direction="down" delay={1}>
                  <a href="/career">Career</a>
                </Slide>
              </li>
              <li>
                <Slide direction="down" delay={1}>
                  <a href="/about">About Us</a>
                </Slide>
              </li>
              <li>
                <Slide direction="down" delay={1}>
                  <a href="/contact">Contact Us</a>
                </Slide>
              </li>
            </ul>
          </div>
          <div className="links-foot">
            <Slide direction="down" delay={1}>
              <h1 className="cube-h">Services</h1>
            </Slide>
            <hr />
            <ul className="ul-con">
              <li>
                <Slide direction="down" delay={1}>
                  <a href="/web-development">Web Development</a>
                </Slide>
              </li>
              <li>
                <Slide direction="down" delay={1}>
                  <a href="/app-development">App Development</a>
                </Slide>
              </li>
              <li>
                <Slide direction="down" delay={1}>
                  <a href="/ai-ml">AI/ML</a>
                </Slide>
              </li>
              <li>
                <Slide direction="down" delay={1}>
                  <a href="/seo">SEO Optimization</a>
                </Slide>
              </li>
              <li>
                <Slide direction="down" delay={1}>
                  <a href="/privacy-policy">Privacy Policy</a>
                </Slide>
              </li>
              <li>
                <Slide direction="down" delay={1}>
                  <a href="/digital-marketing">Digital Marketing</a>
                </Slide>
              </li>
              <li>
                <Slide direction="down" delay={1}>
                  <a href="/design-branding">Design & Branding</a>
                </Slide>
              </li>
            </ul>
          </div>
          <div className="headq">
            <Slide direction="down" delay={1}>
              <h1 className="cube-h">HeadQuarter</h1>
            </Slide>
            <hr />
            <span className="span-headq">
              <Slide direction="down" delay={1}>
                <img
                  src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697056316/location_y4buc3.png"
                  alt="mark"
                  className="mark-c"
                />
              </Slide>
              <Slide direction="down" delay={1}>
                <h1 className="bihar-h">Bihar</h1>
              </Slide>
            </span>
            <Slide direction="down" delay={1}>
              <p className="add-foot">
                26B Road Rajiv Nagar Patna, Bihar, India
              </p>
            </Slide>
            <span className="span-headq">
              <Slide direction="down" delay={1}>
                <img
                  src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697057103/phone-call_1_cjuj5e.png"
                  alt="img"
                  className="mark-c"
                />
              </Slide>
              <Slide direction="down" delay={1}>
                <h1 className="num-foot">+91 970 8176 144</h1>
              </Slide>
            </span>
          </div>
        </div>
        <div className="corner-image">
          <a href="https://wa.me/919392395024" target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697078920/photo_smaheb.png"
              alt="FooterImage"
              className="footer-image"
            />

            <img
              src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697222054/whatsapp_4_ykzveq.png"
              alt="whats"
              className="whats-app-foot"
            />
          </a>
        </div>
      </div>
      <h1 className="copyright-foot">
        Copyright © 2023 @BTOW Pvt. Ltd. All Rights Reserved.
      </h1>
    </>
  );
}
export default Footer;
