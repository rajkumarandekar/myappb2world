import React from "react";
import "./index.css";
import { Slide } from "react-awesome-reveal";
import Header from "../Header";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ServiceCard from "../ServiceCard";
import Footer from "../Footer";
const sliderImages = [
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697479045/hands-holding-credit-card-typing-laptop_z1xvsa.jpg",
    alt: "Image1",
  },
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697479042/businessmen-businesswomen-meeting-brainstorming-ideas_yi6fzq.jpg",
    alt: "Image2",
  },
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697479001/businesswoman-working-office-with-smile-while-sitting_d55l9l.jpg",
    alt: "Image3",
  },
];
const Services = () => {
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
              <div className="contact-text">Services</div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="services">
        <Slide direction="up" delay={1}>
          <h2 className="our-service-head">Our Services</h2>
        </Slide>
        <Slide direction="up" delay={1}>
          <p className="service-pa1">
            "At our company, we take pride in delivering top-notch services that
            exceed your expectations. We are dedicated to providing innovative
            solutions that meet your specific needs and drive your success."
          </p>
        </Slide>
        <div className="service-cards">
          <ServiceCard
            icon={
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695636677/web_yblze0.png"
                alt="Web Development"
                className="web-icon"
              />
            }
            title="Web Development"
            description="We create stunning websites tailored to your needs."
            className="service-card-space"
          />
          <ServiceCard
            icon={
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695637060/app-development_c5y3ld.png"
                alt="Web Development"
                className="web-icon"
              />
            }
            title="App Development"
            description="We build mobile apps for both iOS and Android platforms."
          />
          <ServiceCard
            icon={
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695637384/business_ykhuhk.png"
                alt="Web Development"
                className="web-icon"
              />
            }
            title="Digital Marketing"
            description="We promote your brand and drive growth online."
          />
          <ServiceCard
            icon={
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697192603/illustrator_c0edlx.png"
                alt="Web Development"
                className="web-icon"
              />
            }
            title="AI/ML"
            description="We build mobile apps for both iOS and Android platforms."
          />
          <ServiceCard
            icon={
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697192779/seo_i7y0sn.png"
                alt="Web Development"
                className="web-icon"
              />
            }
            title="SEO Optimization"
            description="We build mobile apps for both iOS and Android platforms."
          />
          <ServiceCard
            icon={
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697192895/web-design_c3hw8y.png"
                alt="Web Development"
                className="web-icon"
              />
            }
            title="Design & Branding"
            description="We build mobile apps for both iOS and Android platforms."
          />
        </div>
      </div>
      <div className="widget-categories-thumb">
        <div className="widget-categories-content text-center">
          <div className="logo-thumb">
            <a href="/home">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695396386/Company_20Logo.png_lv3klc.png"
                alt="aa"
              />
            </a>
          </div>
          <div className="widget-title2">
            <h3 className="widget-he3">Need Service?</h3>
          </div>
          <div className="widget-button">
            <a href="/contact">
              <i className="bi bi-envelope"></i> Contact Us
            </a>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
