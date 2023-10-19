/*import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosQuote } from "react-icons/io";
import "./index.css";

const GoldStar =
  "https://res.cloudinary.com/dofzu13gt/image/upload/v1697111801/star_g48c1i.png";

let clientsCon = [
  {
    name: "John Michel",
    position: "web developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 3,
    disc: `To get a better idea of the cost of what you want to build, give us a quick phone call. We’ll ask you a few questions about the nature of the site, what sort of interactivity the site will have, your graphic design needs, etc.
    Then we’ll be able to give you a ballpark figure.
    If you’re still interested, we’ll come to your place of business and come up with a firm quote.`,
  },
  {
    name: "John Michel",
    position: "web developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 4,
    disc: `The Time Limit Of Any Assignment Is Normally Dictated By The Client. If You Have Any Time Limit In Mind We Will Attempt To Assemble It For You. The Main General Delay In The Making Of A Website Is Waiting For The Content Of The Pages To Be Sent To Us By The Client.`,
  },
  {
    name: "John Michel",
    position: "web developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "John Michel",
    position: "web developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  console.log("Clients component is rendering."); // Add this line

  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clientsCon.map((item, i) => (
    <ClientSlider item={item} key={i} />
  ));

  return (
    <div className="container-client" id="client">
      <h1 className="green">Testimonials</h1>

      <h1 className="what-c">what clients say</h1>

      <div className="testimonials-client">
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
      </div>
    </div>
  );
};

const ClientSlider = (props) => {
  const { name, position, img_url, stars, disc } = props.item;

  return (
    <>
      <div className="container-cl">
        <div className="header-cl">
          <div className="cl-invite">
            <span className="quote-cl">
              <IoIosQuote />
            </span>

            <div className="stars">
              {Array(stars)
                .fill()
                .map((_, i) => (
                  <span className="star" key={i}>
                    <img src={GoldStar} alt="GoldStar" className="gold-star" />
                  </span>
                ))}
            </div>
          </div>
        </div>
        <p className="body-client">{disc}</p>
        <div className="footer-client">
          <img src={img_url} className="img-client-cl" alt={name} />
          <div className="details">
            <h1 className="name-client-1">{name}</h1>
            <p className="position-client">{position}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;

import OwlCarousel from "react-owl-carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, address, description } = testiMonialDetail;
  console.log("testiMonialDetail" + testiMonialDetail);
  return (
    <div class="item">
      <div class="shadow-effect">
        <img class="img-circle" src="k" alt="k" />
        <p>{description}</p>
      </div>
      <div class="testimonial-name">
        <h5>{name}</h5>
        <small>{address}</small>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testiMonials = [
    {
      name: "Rekob Ramya",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg",
    },
    {
      name: "Brandon Savage",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/z7Kp6yr/np-file-33188.jpg",
    },
    {
      name: "Steve Burns",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
    },
    {
      name: "Kevin Canlas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg",
    },
  ];

  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="testimonial" className="testimonials pt-70 pb-70">
      <div className="container mt-5">
        <h4 className="miniTitle text-center">TESTIMONIALS</h4>
        <div className="text-center ">
          <h3 className="sectionTitle">What Our Clients are Saying?</h3>
        </div>
        <p className="text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
            >
              {testiMonials.length === 0 ? (
                <div class="item">
                  <div class="shadow-effect">
                    <img class="img-circle" src="s" alt="k" />

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                  <div class="testimonial-name">
                    <h5>Rajon Rony</h5>
                    <small>ITALY</small>
                  </div>
                </div>
              ) : (
                testiMonials.map((testiMonialDetail, index) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={index}
                    />
                  );
                })
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
*/

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
