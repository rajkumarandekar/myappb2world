import { Slide } from "react-awesome-reveal";
import Footer from "../Footer";
import Header from "../Header";
import "./index.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const sliderImages = [
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697479050/still-life-business-roles-with-various-mechanism-pieces_ajic9v.jpg",
    alt: "Image1",
  },
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697479092/portrait-woman-customer-service-worker_vxgkbh.jpg",
    alt: "Image2",
  },
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697479099/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_r675iz.jpg",
    alt: "Image3",
  },
];

function AboutPage() {
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
                <div className="contact-text">About Us</div>
              </div>
            </div>
          ))}
        </Carousel>
        <Slide direction="up" delay={1}>
          <h2 className="PI">
            What Makes B2World Best in the Software Product Industry?
          </h2>
        </Slide>
        <Slide direction="up" delay={1}>
          <div className="boxes-about">
            <div className="real">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695796748/verified_1_se6uxv.png"
                className="real-img"
                alt="real"
              />
              <h2 className="real-h">Reliability</h2>
              <p className="para-p">
                At B2World, reliability is our cornerstone. We provide robust
                and dependable solutions, ensuring businesses experience minimal
                downtime.
              </p>
            </div>

            <div className="real">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695796858/target_nflpj8.png"
                className="real-img"
                alt="real"
              />
              <h2 className="real-h">Customer Focused</h2>
              <p className="para-p">
                Our unwavering commitment is to be customer-focused in all we
                do. We prioritize understanding our clients.
              </p>
            </div>
            <div className="real">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695805488/fast_dxweev.png"
                className="real-img"
                alt="real"
              />
              <h2 className="real-h">Scalability</h2>
              <p className="para-p">
                At B2World, scalability is key. Our cloud-based systems are
                designed to accommodate business growth without disruption.
              </p>
            </div>
            <div className="real">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695805563/analytic_fta0em.png"
                className="real-img"
                alt="real"
              />
              <h2 className="real-h">Innovative Features</h2>
              <p className="para-p">
                Our cloud-based system ensures businesses avoid hardware
                failures and maintenance downtimes by providing robust and
                reconcilable
              </p>
            </div>
          </div>
        </Slide>
        <div className="down-about">
          <h2 className="about-h1">'Who we are'</h2>
          <p className="about-p">
            "We Build Greater Futures Through Innovation And Creative Website Or
            Application!" We Are A Team Of Highly Skilled And Dedicated
            Professionals With Extensive Experience In The IT Industry.
          </p>
          <a href="/ourworks" className="ppo" alt="j">
            <button className="btn-s1">SEE OUR PROJECTS</button>
          </a>
        </div>

        <div className="vision-con">
          <div className="vision">
            <img
              src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695813270/business-strategy-success-target-goals_xai0cy.jpg"
              alt="vision"
              className="vision-img"
            />
            <div className="vision-h-p">
              <h2 className="vision-h">Our Vision</h2>
              <p className="vision-p">
                "At B2World, our vision is to lead the industry in providing
                value-added telecommunication services that empower businesses
                to strengthen customer relationships and drive growth. We
                specialize in web development, app development, and digital
                marketing, offering innovative solutions that enhance
                productivity and efficiency. Our commitment is to assist clients
                in transforming their customer interactions, bridging gaps, and
                expanding their reach. We make it our mission to ensure their
                businesses run seamlessly and thrive in a competitive digital
                landscape."
              </p>
            </div>
          </div>

          <div className="vision1">
            <div className="vision-h-p1">
              <h2 className="vision-h">Our Mission</h2>

              <p className="vision-p">
                "At B2World, our mission is to revolutionize the tech industry
                by pioneering cutting-edge telecommunication services. We strive
                to empower businesses with bespoke web development, app
                development, and digital marketing solutions that drive growth,
                foster efficiency, and create lasting impressions. Our
                unwavering commitment is to guide clients in redefining their
                customer interactions, bridging gaps, and reaching new horizons.
                We are dedicated to ensuring their operational excellence,
                making their journey towards success seamless and fulfilling."
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695805819/5857378_pem3s7.jpg"
              alt="vision"
              className="vision-img1"
            />
          </div>
          <div className="vision">
            <img
              src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695805906/5874782_mzbefa.jpg"
              alt="vision"
              className="vision-img"
            />
            <div className="vision-h-p">
              <h2 className="vision-h">Our Values</h2>
              <p className="vision-p">
                "At B2World, our values serve as the foundation of our
                organization. We prioritize integrity, transparency, and
                customer-centricity in everything we do. We are committed to
                delivering the highest quality of service, and our team is
                driven by innovation and continuous improvement. Collaboration
                and teamwork are at the heart of our culture, fostering an
                environment where creativity flourishes and our clients' needs
                are met with dedication and enthusiasm. We believe in
                adaptability and staying at the forefront of technological
                advancements to provide the best solutions for our clients. Our
                values guide us on our journey to help businesses thrive in the
                digital age."
              </p>
            </div>
          </div>
          <div className="vision1">
            <div className="vision-h-p1">
              <h2 className="vision-h">Our Culture</h2>

              <p className="vision-p">
                "At B2World, our culture is a vibrant reflection of our
                commitment to excellence and innovation. We foster a dynamic and
                inclusive environment where teamwork, creativity, and
                collaboration are celebrated. Our team members are passionate
                about technology and dedicated to staying at the forefront of
                industry trends. We embrace diversity and value each
                individual's unique perspectives and contributions. Honesty,
                integrity, and open communication are the cornerstones of our
                culture, ensuring that we build trust with our clients and
                partners. We encourage continuous learning and personal growth,
                empowering our team to deliver top-notch solutions and exceed
                client expectations. Our culture is the driving force behind our
                success, as we work together to make a positive impact in the
                digital world."
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695805988/28459_fiaodb.jpg"
              alt="vision"
              className="vision-img2"
            />
          </div>
        </div>
      </div>
      <div className="talk-m">
        <h1 className="talk-h">Talk to Us !</h1>
        <p className="p-talk">
          Talk to us. We will work with you collaboratively to identify and
          analyze your requirements, and will assist you in developing and
          implementing the right solution.
        </p>
        <button className="btn-s">GET IN TOUCH NOW</button>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default AboutPage;
