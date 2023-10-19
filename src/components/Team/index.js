import "./index.css";

import Header from "../Header";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Footer";

const sliderImages = [
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697480065/pexels-kindel-media-7688161_otuj39.jpg",
    alt: "Image1",
  },
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697480077/pexels-fox-1595391_bqitca.jpg",
    alt: "Image2",
  },
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697480189/pexels-kindel-media-7688159_xlpoui.jpg",
    alt: "Image3",
  },
];
function Team() {
  const teamMembers = [
    {
      name: "Rajnish Anand",
      role: "Marketing or Technical Analysis",
      imgSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1696422376/rajni_o5gitz.jpg",
      socialLinks: [
        {
          name: "Twitter",
          link: "https://www.facebook.com/",
          iconSrc:
            "https://res.cloudinary.com/dofzu13gt/image/upload/v1696422249/twitter_fuuq9u.png",
        },
        {
          name: "LinkedIn",
          link: "https://twitter.com/login",
          iconSrc:
            "https://res.cloudinary.com/dofzu13gt/image/upload/v1696422175/linkedin_mvoxkw.png",
        },
        {
          name: "WhatsApp",
          link: "https://whatsapp.com/",
          iconSrc:
            "https://res.cloudinary.com/dofzu13gt/image/upload/v1696424456/whatsapp_t62oks.png",
        },
        {
          name: "Instagram",
          link: "https://instagram.com/login",
          iconSrc:
            "https://res.cloudinary.com/dofzu13gt/image/upload/v1696424525/instagram_k12iwf.png",
        },
      ],
    },

    {
      name: "Saurabh Kumar",
      role: "Software Developer",
      imgSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1696424562/Saurabh_pr97lt.jpg",
      socialLinks: [
        {
          name: "Twitter",
          link: "https://www.facebook.com/",
          iconSrc:
            "https://res.cloudinary.com/dofzu13gt/image/upload/v1696422249/twitter_fuuq9u.png",
        },
        {
          name: "LinkedIn",
          link: "https://twitter.com/login",
          iconSrc:
            "https://res.cloudinary.com/dofzu13gt/image/upload/v1696422175/linkedin_mvoxkw.png",
        },
        {
          name: "WhatsApp",
          link: "https://whatsapp.com/",
          iconSrc:
            "https://res.cloudinary.com/dofzu13gt/image/upload/v1696424456/whatsapp_t62oks.png",
        },
        {
          name: "Instagram",
          link: "https://instagram.com/login",
          iconSrc:
            "https://res.cloudinary.com/dofzu13gt/image/upload/v1696424525/instagram_k12iwf.png",
        },
      ],
    },

    {
      name: "Ankit Raj",
      role: "Graphic Designer",
      imgSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1696424633/pexels-hussein-altameemi-2776353_a0fezo.jpg",
      socialLinks: [
        {
          name: "Twitter",
          link: "https://www.facebook.com/",
          iconSrc:
            "https://res.cloudinary.com/dofzu13gt/image/upload/v1696422249/twitter_fuuq9u.png",
        },
        {
          name: "LinkedIn",
          link: "https://twitter.com/login",
          iconSrc:
            "https://res.cloudinary.com/dofzu13gt/image/upload/v1696422175/linkedin_mvoxkw.png",
        },
        {
          name: "WhatsApp",
          link: "https://whatsapp.com/",
          iconSrc:
            "https://res.cloudinary.com/dofzu13gt/image/upload/v1696424456/whatsapp_t62oks.png",
        },
        {
          name: "Instagram",
          link: "https://instagram.com/login",
          iconSrc:
            "https://res.cloudinary.com/dofzu13gt/image/upload/v1696424525/instagram_k12iwf.png",
        },
      ],
    },
  ];

  return (
    <>
      <Header />

      <Carousel autoPlay infiniteLoop showArrows showStatus>
        {sliderImages.map((image, index) => (
          <div key={index} className="slider-item">
            <div className="image-wrapper">
              <img src={image.src} alt={image.alt} className="slider-image" />
            </div>
            <div className="image-overlay">
              <div className="contact-text">My Team</div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="main-con-team">
        <div className="small-con-team">
          <h1 className="head-team-h1">Our Team</h1>
          <p className="p-team">My Team speclized at</p>
          <div className="react-icons-team">
            <div class="technology-icon">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697391205/ikvbhkqgnagjlwi0iusi.png"
                alt="HTML Icon"
                className="icon-t"
              />
              <p>HTML</p>
            </div>
            <div class="technology-icon">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697391213/qsyktcy8ip6bkblyzkbu.png"
                alt="CSS Icon"
                className="icon-t"
              />
              <p>CSS</p>
            </div>
            <div class="technology-icon">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697391238/eba3983204f9f9c01dab4c54e33b2b9d9a2731e0_krg4y4.png"
                alt="Js Icon"
                className="icon-t"
              />
              <p>JavaScript</p>
            </div>
            <div class="technology-icon">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697390671/1200px-React-icon.svg_yjv3z3.png"
                alt="React Icon"
                className="icon-t"
              />
              <p>React</p>
            </div>
            <div class="technology-icon">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697391984/1200px-Python-logo-notext.svg_vgrvjb.png"
                alt="pythonIcon"
                className="icon-t"
              />
              <p>Python</p>
            </div>
            <div class="technology-icon">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697390706/a9yxc48y3ay5dm2udzwizc2bdyph_iqjqld.png"
                alt="mongo Icon"
                className="icon-t"
              />
              <p>MongoDB</p>
            </div>
            <div class="technology-icon">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697390735/dpc4tx2j58e8u04mfzhx.png"
                alt="NodeIcon"
                className="icon-t"
              />
              <p>NodeJS</p>
            </div>
            <div class="technology-icon">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697390761/1_i2fRBk3GsYLeUk_Rh7AzHw_l7yqjy.png"
                alt="ExpressIcon"
                className="icon-t"
              />
              <p>Express</p>
            </div>
            <div class="technology-icon">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697390956/654px-Android_robot.svg_oionyw.png"
                alt="AndroidIcon"
                className="icon-t"
              />
              <p>Android</p>
            </div>
            <div class="technology-icon">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697390906/wqoogybrkguvpz6a4jpl.png"
                alt="Php Icon"
                className="icon-t"
              />
              <p>PHP</p>
            </div>
            <div class="technology-icon">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697390874/apple-developer-logo-257x300_ql7dk9.png"
                alt="IosIcon"
                className="icon-t"
              />
              <p>IOS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-team">
        <h2 className="h-team-my">My Team</h2>
        <h2 className="h-team-my-1">Meet The Team</h2>
        <div className="images-con">
          <div className="img-team-r">
            <div className="team">
              <div className="row">
                {teamMembers.map((member, index) => (
                  <div className="card" key={index}>
                    <div className="image">
                      <img
                        src={member.imgSrc}
                        alt={`Team member ${index + 1}`}
                        className="img-raj"
                      />
                    </div>
                    <div className="info">
                      <h3>{member.name}</h3>
                      <span>{member.role}</span>
                      <div className="icons">
                        {member.socialLinks.map((link, i) => (
                          <a key={i} href={link.link}>
                            <img
                              src={link.iconSrc}
                              alt={link.name}
                              className="t-icon"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center">
        <div className="items-team">
          <div className="call_title_3">
            <span className="theme_span">Work with us</span>
            <h2>Join our Team</h2>
          </div>
        </div>

        <a href="/careers" className="apply_btn_3">
          Apply
        </a>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Team;
