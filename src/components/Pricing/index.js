import "./index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../Header";
import React, { useState } from "react";
import Footer from "../Footer";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const sliderImages = [
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697480770/pexels-karolina-grabowska-4386339_f0pwsp.jpg",
    alt: "Image1",
  },
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697481132/pexels-david-mcbee-730547_acu49z.jpg",
    alt: "Image2",
  },
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697480784/pexels-leeloo-thefirst-8970686_nedxqo.jpg",
    alt: "Image3",
  },
];

const greenTickImage =
  "https://res.cloudinary.com/dofzu13gt/image/upload/v1696048226/64246f964fc3516559f22046_check-circle_wgyu62.svg";

const wrongTickImage =
  "https://res.cloudinary.com/dofzu13gt/image/upload//c_thumb,w_380,h_500,g_auto/v1696246042/tick-cross-wrong-vector-icon-design-89147655_irfufx.jpg";

function Pricing() {
  const [activePlan, setActivePlan] = useState("annual");

  const handleAnnualClick = () => {
    setActivePlan("annual");
  };

  const handleMonthlyClick = () => {
    setActivePlan("monthly");
  };

  const renderPricingCards = () => {
    const annualPlans = [
      {
        name: "Basic",
        annualPrice: 240,
        monthlyPrice: 30,
        features: [
          {
            name: "Landing Pages",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Domain+Hoisting",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },

          {
            name: "01-05 Pages Only",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Cross-browser Support",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Digital Marketing",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "SEO Service",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Email Marketing",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "24/7 IT Support",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Admin Panel",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Business Email",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
        ],
      },
      {
        name: "Standard",
        annualPrice: 480,
        monthlyPrice: 60,
        features: [
          {
            name: "Landing Pages",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Responsive Layout",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Domain+Hoisting",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },

          {
            name: "01-10 Pages Only",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Cross-browser Support",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Digital Marketing",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "SEO Service",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Facebook & Email Marketing",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "24/7 IT Support",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Admin Panel",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Business Support",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
        ],
      },
      {
        name: "Premium",
        annualPrice: 720,
        monthlyPrice: 90,
        features: [
          {
            name: "Landing Page",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Admin+Customer Pannel",
            icon: greenTickImage, // Use the green tick icon for this feature
          },

          {
            name: "E-commerce",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Cross-browser Support",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Digital Marketing",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "SEO Service",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Email Marketing",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "24/7 IT Support",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Admin Panel",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Business Email",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
        ],
      },
    ];

    const monthlyPlans = [
      {
        name: "Basic",
        annualPrice: 140,
        monthlyPrice: 20,
        features: [
          {
            name: "Landing Pages",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Domain+Hoisting",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },

          {
            name: "01-05 Pages Only",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Cross-browser Support",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Digital Marketing",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "SEO Service",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Email Marketing",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "24/7 IT Support",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Admin Panel",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Business Email",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
        ],
      },
      {
        name: "Standard",
        annualPrice: 380,
        monthlyPrice: 30,
        features: [
          {
            name: "Landing Pages",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Domain+Hoisting",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },

          {
            name: "01-05 Pages Only",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Cross-browser Support",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Digital Marketing",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "SEO Service",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Email Marketing",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "24/7 IT Support",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Admin Panel",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Business Email",
            icon: wrongTickImage, // Use the green tick icon for this feature
          },
        ],
      },
      {
        name: "Premium",
        annualPrice: 420,
        monthlyPrice: 80,
        features: [
          {
            name: "Landing Pages",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Domain+Hoisting",
            icon: greenTickImage, // Use the green tick icon for this feature
          },

          {
            name: "01-05 Pages Only",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Cross-browser Support",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Digital Marketing",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "SEO Service",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Email Marketing",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "24/7 IT Support",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Admin Panel",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
          {
            name: "Business Email",
            icon: greenTickImage, // Use the green tick icon for this feature
          },
        ],
      },
    ];

    const plans = activePlan === "annual" ? annualPlans : monthlyPlans;
    const billedText =
      activePlan === "annual" ? "Billed Annually" : "Billed Monthly";

    return plans.map((plan, index) => (
      <div
        key={index}
        className={`pricing-con ${
          activePlan === "annual" ? "annual" : "monthly"
        } ${index === 1 ? "middle-card" : ""}`}
      >
        <div className="basic-con">
          <h2
            className={`pricing-name ${
              plan.name === "Standard" ? "pricing-name-s" : ""
            } ${activePlan === "monthly" ? "green-name" : ""}`}
          >
            {plan.name}
            {plan.name === "Standard" && (
              <span
                className={`mp ${
                  activePlan === "monthly" ? "most-popular" : ""
                }`}
              >
                Most popular
              </span>
            )}
          </h2>

          <h2 className="pricing-d">
            {activePlan === "annual"
              ? `$${plan.annualPrice}/year`
              : `$${plan.monthlyPrice}/month`}
            <br />
            <span className="bill">{billedText}</span>
          </h2>
          <h2
            className={`pricing-cut ${
              activePlan === "annual" ? "annual" : "monthly"
            }`}
          >
            {activePlan === "annual"
              ? `$${plan.annualPrice}/Yr`
              : `Per $${plan.monthlyPrice}/mon`}
          </h2>

          <p className="pricing-p">
            {plan.name === "Basic"
              ? "Get your business up and running"
              : "Take your business to the next level with additional features"}
          </p>
          <Link to="/contactus">
            <button
              className={`btn-Start-free ${
                plan.name === "Standard" && activePlan === "monthly"
                  ? "green-background"
                  : ""
              } ${plan.name === "Standard" ? "btn-Start-free1" : ""}`}
            >
              Call Us
            </button>
          </Link>
          <p className="pricing-features">Features</p>
          <div className="features-con">
            {plan.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="items-list">
                <img
                  src={feature.icon}
                  alt={feature.name}
                  className={
                    feature.icon === greenTickImage
                      ? "green-tick"
                      : "wrong-tick"
                  }
                />

                <p className="p-h1">{feature.name}</p>
              </div>
            ))}
            <p className="applicable">*+ applicable taxes</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div>
        <Header />
        <Carousel autoPlay infiniteLoop showArrows showStatus>
          {sliderImages.map((image, index) => (
            <div key={index} className="slider-item">
              <div className="image-wrapper">
                <img src={image.src} alt={image.alt} className="slider-image" />
              </div>
              <div className="image-overlay">
                <div className="contact-text">Your Pricing !</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="main-pricing">
        <div className="header-section">
          <Slide direction="left" delay={1}>
            <h1 className="header-pricing">
              Pricing plans that
              <br />
              <span className="span-pricing">grow with you</span>
            </h1>
            <p className="p-pricing">
              Choose a plan that fits your budget and business goals.
            </p>
          </Slide>
          <Slide direction="left" delay={1}>
            <div className="save-p1">
              <div className="save-p">
                <button
                  className={`btn-save20 ${
                    activePlan === "annual" ? "active" : ""
                  }`}
                  onClick={handleAnnualClick}
                >
                  Annually (Save 20%)
                </button>
                <button
                  className={`btn-monthly ${
                    activePlan === "monthly" ? "active" : ""
                  }`}
                  onClick={handleMonthlyClick}
                >
                  Monthly
                </button>
              </div>
            </div>
          </Slide>
        </div>

        <div className="dd">{renderPricingCards()}</div>

        <Slide direction="up" delay={1}>
          <div className="need-more-con">
            <div className="need-more">
              <h1 className="need-h1">Need More?</h1>
              <p className="need-p">
                Looking for limits that scale with your audience ? Our sales
                team is here to help
              </p>
              <button className="btn-sales">Talk to sales</button>
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
        </Slide>
      </div>
      <div className="foot-pricing">
        <Footer />
      </div>
    </>
  );
}

export default Pricing;
