import React, { useState } from "react";
import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";
import "./index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const sliderImages = [
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697266183/top-view-chat-bubbles-with-telephone-receiver-copy-space_gvqp84.jpg",
    alt: "Image1",
  },
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697266214/audio-headset-used-by-call-center-agents-help-clients-telecommunication-with-technology-empty-customer-service-workstation-with-headphones-computers-modern-gadgets_d73oqv.jpg",
    alt: "Image2",
  },
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697283478/6340_f1onjy.jpg",
    alt: "Image3",
  },
];

function Contact() {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [servicesInterested, setServicesInterested] = useState([]);
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsBlurred(false);
    setIsPopupOpen(false);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setServicesInterested((prevServices) => [...prevServices, value]);
    } else {
      setServicesInterested((prevServices) =>
        prevServices.filter((service) => service !== value)
      );
    }
  };

  const handleSubmit = async (event) => {
    openPopup();
    event.preventDefault();
    setIsBlurred(true);

    try {
      const formData = {
        name,
        contactNumber,
        email,
        servicesInterested,
        requirement,
      };

      await axios.post("http://localhost:4001/submit", formData);
    } catch (error) {
      console.error(error);
      alert("Error submitting the form");
    }
  };

  return (
    <>
      <div
        className={`slider-container1 ${isBlurred ? "blur-background" : ""}`}
      >
        <Header />

        <Carousel autoPlay infiniteLoop showArrows showStatus>
          {sliderImages.map((image, index) => (
            <div key={index} className="slider-item">
              <div className="image-wrapper">
                <img src={image.src} alt={image.alt} className="slider-image" />
              </div>
              <div className="image-overlay">
                <div className="contact-text">Contact Us</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className={`main-contact ${isBlurred ? "blur-background" : ""}`}>
        <div className="contact-d">
          <div className="contact-h-d">
            <h2 className="contact-h2-o">Our Vision</h2>
            <p className="contact-p">
              "At B2World, our vision is to lead the industry in providing
              value-added telecommunication services that empower businesses"
            </p>
          </div>
        </div>
      </div>
      <div className={`contact-main ${isBlurred ? "blur-background" : ""}`}>
        <div className="details-contact">
          <div className="contact-column">
            <div className="email">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695869345/gmail_bdza7x.png"
                alt="Em"
                className="email-img"
              />
              <h2 className="h-email">Email</h2>
              <p className="email-r">Info@B2world.Co</p>
            </div>
          </div>
          <div className="contact-column">
            <div className="phone-con">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695869358/telephone_ng0phx.png"
                alt="Em"
                className="phone-img"
              />
              <h2 className="h-phone">Phone No</h2>
              <p className="p-phone">7482909107</p>
            </div>
          </div>
          <div className="contact-column">
            <div className="location-con">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695869474/map_jevp31.png"
                alt="Em"
                className="locate-img"
              />
              <h2 className="h-locate">Address</h2>
              <p className="locate-r">123 Main St, City, Country</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h1 className="contact-head">We'd love to hear from you!</h1>
          <p className="para-form">
            Brief us your requirements below, and let's connect.
          </p>

          <h2 className="contact-us-conn">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Your name Your name <span className="name-s">*</span>
            </label>

            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="contactNumber">
              Contact Number<span className="name-s"> * </span>
            </label>
            <input
              type="tel"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />

            <label>
              Services that interest you <span className="name-s"> * </span>
            </label>
            <div className="checkboxes">
              <label>
                <input
                  type="checkbox"
                  value="web development"
                  checked={servicesInterested.includes("web development")}
                  onChange={handleCheckboxChange}
                />
                Web Development
              </label>

              <label>
                <input
                  type="checkbox"
                  value="app development"
                  checked={servicesInterested.includes("app development")}
                  onChange={handleCheckboxChange}
                />
                App Development
              </label>

              <label>
                <input
                  type="checkbox"
                  value="aiml development"
                  checked={servicesInterested.includes("aiml development")}
                  onChange={handleCheckboxChange}
                />
                AI/ML
              </label>

              <label>
                <input
                  type="checkbox"
                  value="seo optimization"
                  checked={servicesInterested.includes("seo optimization")}
                  onChange={handleCheckboxChange}
                />
                SEO Optimization
              </label>

              <label>
                <input
                  type="checkbox"
                  value="digital marketing"
                  checked={servicesInterested.includes("digital marketing")}
                  onChange={handleCheckboxChange}
                />
                Digital Marketing
              </label>

              <label>
                <input
                  type="checkbox"
                  value="design branding"
                  checked={servicesInterested.includes("design branding")}
                  onChange={handleCheckboxChange}
                />
                Design Branding
              </label>
            </div>

            <label htmlFor="email">
              Email
              <span className="name-s"> * </span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="requirement">
              Your requirement <span className="name-s"> * </span>
            </label>
            <textarea
              id="requirement"
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              required
            />

            <button className="btn-contact-form" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>

      {isPopupOpen && (
        <div className={`popup open-popup`}>
          <img
            src="https://res.cloudinary.com/dofzu13gt/image/upload/v1694007226/404-tick_oazj6y.png"
            alt="kk"
          />
          <h2>Thank You!</h2>
          <p>
            Your details have been successfully submitted. We will be back soon
            Thanks!
          </p>
          <button onClick={closePopup}>OK</button>
        </div>
      )}
    </>
  );
}

export default Contact;
