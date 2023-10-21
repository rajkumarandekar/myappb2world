import React from "react";
import Header from "../Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
import WeOffer from "../WeOffer";

import ServiceCard from "../ServiceCard";
import HowWeWork from "../HowWeWork";
import OurStatsSection from "../OurStatsSection";

import Footer from "../Footer";

import Faq from "../Faq";
import ClientIcons from "../ClientIcons";
import Testimonials from "../Testimonials";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      words: ["Creative", "Ambitious", "web developers"],
      wordIndex: 0,
      letterIndex: 0,
      displayText: "",
      textColorTransition: false,
    };

    this.slideDurations = [9000, 10000, 10000];
  }

  componentDidMount() {
    this.displayNextLetter();

    this.carouselInterval = setInterval(() => {
      this.setState((prevState) => ({
        currentSlide: (prevState.currentSlide + 1) % 3,
      }));

      this.updateDynamicText();
    }, this.slideDurations[this.state.currentSlide]);
  }

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  displayNextLetter = () => {
    const { words, wordIndex, letterIndex } = this.state;
    const word = words[wordIndex];
    if (letterIndex < word.length) {
      this.setState((prevState) => ({
        displayText: prevState.displayText + word[letterIndex],
        letterIndex: prevState.letterIndex + 1,
      }));
      setTimeout(this.displayNextLetter, 150);
    } else {
      setTimeout(this.hideWord, 1000);
    }
  };

  hideWord = () => {
    this.setState((prevState) => ({
      displayText: "",
      letterIndex: 0,
      wordIndex: (prevState.wordIndex + 1) % prevState.words.length,
    }));
    setTimeout(this.displayNextLetter, 1000);
  };

  toggleTextColor = () => {
    this.setState((prevState) => ({
      textColorTransition: !prevState.textColorTransition,
    }));
  };

  updateDynamicText = () => {
    const nextDynamicTextIndex = (this.state.dynamicTextIndex + 1) % 3;
    this.setState({
      dynamicTextIndex: nextDynamicTextIndex,
      currentLetterIndex: 0,
    });

    setTimeout(this.displayLettersOneByOne, 2000);
  };

  render() {
    const sliderImages = [
      {
        src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1695464341/marvin-meyer-SYTO3xs06fU-unsplash_gvg3sw.jpg",
        alt: "Image1",
      },
      {
        src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1695465058/pexels-fauxels-3184428_a0moki.jpg",
        alt: "Image2",
      },
      {
        src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1695482267/pexels-kindel-media-7688454_rgkxln.jpg",
        alt: "Image3",
      },
    ];

    const currentWord = this.state.words[this.state.wordIndex];
    const displayedText = currentWord.slice(0, this.state.letterIndex);

    return (
      <>
        <Header />
        <div className="full-main-page-con">
          <div className="slider-container1">
            <Carousel
              selectedItem={this.state.currentSlide}
              autoPlay
              interval={this.slideDurations[this.state.currentSlide]}
              infiniteLoop
              showArrows={true}
              showStatus={true}
            >
              {sliderImages.map((image, index) => (
                <div key={index} className="slider-item">
                  <div className="image-wrapper1">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="slider-image"
                    />
                  </div>
                  <div className="image-overlay"></div>
                  <div className="description-overlay">
                    <h1>
                      "We are"
                      <span id="text" className="dynamic-text1">
                        {displayedText}
                      </span>
                      <span className="typed-cursor">|</span>
                    </h1>
                    <p className="home-p">
                      At B2World, We Are Passionate About Technology And Its
                      Potential To Transform Businesses.
                    </p>
                    <a href="/aboutPage" className="ppo" alt="j">
                      <button className="about-h1">Learn More</button>
                    </a>
                    <a href="/contactus" className="ppo" alt="j">
                      <button className="contact-h">Contact Us</button>
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <WeOffer />
          <div className="services">
            <h2 className="our-service-head">Our Services</h2>

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
          <OurStatsSection />
          <HowWeWork />
          <ClientIcons />
          <Faq />

          <Testimonials />
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
