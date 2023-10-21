 
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css"; // Import your custom styles here

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kailash Pati",
      description:
        "I had an exceptional experience with their services. They delivered a fast and optimized Android app as part of their web and mobile app development, showcasing their commitment to quality and efficiency.",
      designation: "Software Developer",
      img: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697547091/Kailash_20Pati_ojvzlv.jpg",
    },
    {
      name: "Sanjeev Kumar",
      description:
        "My interaction with their services was truly outstanding. They not only created web and mobile apps but also impressed me with a lightning-fast, top-quality Android app. Their dedication to excellence and speed was remarkable",
      designation: "Software Engineer",
      img: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697547064/Sanjeev_cjchxc.jpg",
    },
    {
      name: "Nidhi Gupta",
      description:
        "My journey with their services was unforgettable. They not only developed web and mobile apps but also crafted an incredibly fast and efficient Android app. Their focus on delivering top-notch quality was truly commendable.",
      designation: "Software Developer",
      img: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697547010/Nidhi_tpxsnv.jpg",
    },
    {
      name: "Gaurav Kumar",
      description:
        "I had an amazing experience with their services. They went beyond web and mobile app development, delivering a blazing-fast, perfectly optimized Android app. Their unwavering commitment to quality and speed was highly impressive.",
      designation: "Software Engineer",
      img: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697547005/Gaurav_qyunqj.jpg",
    },
    {
      name: "Akanksha",
      description:
        "Their services were nothing short of remarkable. Not only did they provide web and mobile app development, but they also gave me an incredibly swift and well-optimized Android app. Their dedication to quality and efficiency was truly exceptional.",
      designation: "Software Developer",
      img: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697546989/AKKA_20PIC_vzdg43.jpg",
    },
  ];

  const carouselProps = {
    showThumbs: false,
    showArrows: true,
    autoPlay: true,
    interval: 5000,
    infiniteLoop: true,
  };

  return (
    <div className="testimonials pt-70 pb-70">
      <h4 className="miniTitle text-center">TESTIMONIALS</h4>
      <hr />
      <div className="text-center">
        <h3 className="sectionTitle">What Our Clients are Saying?</h3>
        <br />
      </div>

      <Carousel {...carouselProps}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img src={testimonial.img} alt={testimonial.name} />
            <p>{testimonial.description}</p>
            <h5>{testimonial.name}</h5>
            <small>{testimonial.designation}</small>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
