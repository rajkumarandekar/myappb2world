import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Header from "../Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
import Footer from "../Footer";
import { Slide } from "react-awesome-reveal";
import axios from "axios";

const sliderImages = [
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697481142/pexels-tranmautritam-68761_owzgq5.jpg",
    alt: "Image1",
  },
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697480751/pexels-fauxels-3184465_mhtu75.jpg",
    alt: "Image2",
  },
  {
    src: "https://res.cloudinary.com/dofzu13gt/image/upload/v1697480189/pexels-kindel-media-7688159_xlpoui.jpg",
    alt: "Image3",
  },
];

function Career() {
  const jobListings = [
    {
      title: "WordPress Developer",
      description: `
              - Develop and maintain WordPress-based websites.
              - Customize WordPress themes and plugins.
              - Troubleshoot and debug issues with WordPress sites.
              - Collaborate with designers and content creators to deliver high-quality websites.
              - Stay updated with the latest WordPress trends and best practices.

              Job Details:

              How to Apply: If you are passionate about WordPress development and want to join our team, please send your CV to hr@example.com along with a cover letter detailing your experience and why you'd be a great fit.

              1. Salary: Competitive.
              2. Role Category: Web Development.
              3. Role: WordPress Developer.
              4. Employment Type: Permanent and Full-Time.
              5. Education: Any relevant degree or certification.
              6. Experience: 2+ years.
              7. Vacancies: Multiple.
            `,
    },
    {
      title: "Node JS Developer",
      description: `
              - Work with Node.js to build scalable and high-performance applications.
              - Collaborate with front-end developers to integrate user-facing elements.
              - Deploy applications and perform regular monitoring and debugging.
              - Contribute to the development of RESTful APIs.
              - Stay updated with Node.js and server-side JavaScript trends.

              Job Details:

              How to Apply: If you have a strong Node.js background and are interested in this role, please send your CV to hr@example.com along with a cover letter explaining your qualifications and why you want to join us.

              1. Salary: Competitive.
              2. Role Category: Web Development.
              3. Role: Node JS Developer.
              4. Employment Type: Permanent and Full-Time.
              5. Education: Any relevant degree or certification.
              6. Experience: 2+ years.
              7. Vacancies: Multiple.
            `,
    },
    {
      title: "iOS Developer",
      description: `
              - Develop and maintain iOS applications using Swift or Objective-C.
              - Collaborate with cross-functional teams to design, build, and ship new features.
              - Ensure the performance, quality, and responsiveness of applications.
              - Identify and fix bugs, as well as improve application performance.
              - Stay updated with the latest iOS development trends and technologies.

              Job Details:

              How to Apply: If you are passionate about iOS development, please send your CV to hr@example.com along with a cover letter detailing your experience and interest in this role.

              1. Salary: Competitive.
              2. Role Category: Mobile App Development.
              3. Role: iOS Developer.
              4. Employment Type: Permanent and Full-Time.
              5. Education: Any relevant degree or certification.
              6. Experience: 3+ years.
              7. Vacancies: Multiple.
            `,
    },
    {
      title: "PHP Developer",
      description: `
              - Develop, test, and maintain PHP-based web applications.
              - Collaborate with front-end developers to integrate user-facing elements.
              - Troubleshoot and debug issues with web applications.
              - Optimize application performance and ensure scalability.
              - Stay updated with PHP and web development trends.

              Job Details:

              How to Apply: If you are a PHP enthusiast and want to be part of our team, please send your CV to hr@example.com along with a cover letter explaining your qualifications and why you'd be a great fit.

              1. Salary: Competitive.
              2. Role Category: Web Development.
              3. Role: PHP Developer.
              4. Employment Type: Permanent and Full-Time.
              5. Education: Any relevant degree or certification.
              6. Experience: 2+ years.
              7. Vacancies: Multiple.
            `,
    },
    {
      title: "React Native Developer",
      description: `
              - Develop cross-platform mobile applications using React Native.
              - Collaborate with designers and front-end developers to deliver mobile app features.
              - Optimize app performance for both iOS and Android.
              - Identify and fix bugs, as well as improve application performance.
              - Stay updated with React Native and mobile app development trends.

              Job Details:

              How to Apply: If you are passionate about React Native development, please send your CV to hr@example.com along with a cover letter detailing your experience and interest in this role.

              1. Salary: Competitive.
              2. Role Category: Mobile App Development.
              3. Role: React Native Developer.
              4. Employment Type: Permanent and Full-Time.
              5. Education: Any relevant degree or certification.
              6. Experience: 2+ years.
              7. Vacancies: Multiple.
            `,
    },
    {
      title: "Android Developer",
      description: `
              - Develop and maintain Android applications using Java or Kotlin.
              - Collaborate with cross-functional teams to design, build, and deploy mobile app features.
              - Ensure the performance, quality, and responsiveness of Android apps.
              - Identify and resolve bugs and issues.
              - Stay updated with Android app development trends and technologies.

              Job Details:

              How to Apply: If you are passionate about Android development, please send your CV to hr@example.com along with a cover letter detailing your experience and interest in this role.

              1. Salary: Competitive.
              2. Role Category: Mobile App Development.
              3. Role: Android Developer.
              4. Employment Type: Permanent and Full-Time.
              5. Education: Any relevant degree or certification.
              6. Experience: 2+ years.
              7. Vacancies: Multiple.
            `,
    },
    {
      title: "MERN Stack Developer",
      description: `
              - Develop and maintain web applications using the MERN stack (MongoDB, Express.js, React, Node.js).
              - Collaborate with front-end developers to design and implement user interfaces.
              - Create and maintain RESTful APIs for seamless data interaction.
              - Optimize web application performance for scalability and responsiveness.
              - Troubleshoot and debug issues as they arise.
              - Stay updated with the latest trends and technologies in web development, particularly the MERN stack.

              Job Details:

              How to Apply: If you are enthusiastic about MERN stack development and would like to join our team, please send your CV to hr@example.com along with a cover letter detailing your experience and why you're a great fit for this role.

              1. Salary: Competitive.
              2. Role Category: Web Development.
              3. Role: MERN Stack Developer.
              4. Employment Type: Permanent and Full-Time.
              5. Education: Any relevant degree or certification.
              6. Experience: 2+ years.
              7. Vacancies: Multiple.
            `,
    },
    {
      title: "React Developer",
      description: `
            - Develop interactive and user-friendly web applications using React.js.
            - Collaborate with UI/UX designers to implement responsive web designs.
            - Ensure the performance and reliability of web applications.
            - Identify and resolve issues and bugs in a timely manner.
            - Stay updated with the latest React.js and front-end development trends.

            Job Details:

            How to Apply: If you are passionate about React.js development and want to join our team, please send your CV to hr@example.com along with a cover letter explaining your qualifications and interest in this role.

            1. Salary: Competitive.
            2. Role Category: Web Development.
            3. Role: React Developer.
            4. Employment Type: Permanent and Full-Time.
            5. Education: Any relevant degree or certification.
            6. Experience: 2+ years.
            7. Vacancies: Multiple.
          `,
    },
    {
      title: "UI/UX Designer",
      description: `
            - Create visually appealing and user-friendly website designs and interfaces.
            - Collaborate with development teams to ensure design implementation.
            - Conduct user research and usability testing to refine designs.
            - Stay updated with design tools and industry trends.
            - Work on various design projects to meet client needs.

            Job Details:

            How to Apply: If you are a creative UI/UX designer looking to make an impact, please send your CV to hr@example.com along with a cover letter detailing your design experience and why you'd be a valuable addition to our team.

            1. Salary: Competitive.
            2. Role Category: UI/UX Design.
            3. Role: UI/UX Designer.
            4. Employment Type: Permanent and Full-Time.
            5. Education: Any relevant degree or certification.
            6. Experience: 3+ years.
            7. Vacancies: Multiple.
          `,
    },
  ];

  const [openJobs, setOpenJobs] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Define isPopupOpen state
  const [isBlurred, setIsBlurred] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsBlurred(false);
    setIsPopupOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");
    setIsBlurred(true);
    openPopup();

    try {
      const formData1 = new FormData();
      formData1.append("name1", formData.name);
      formData1.append("email1", formData.email);
      formData1.append("role1", formData.subject);
      formData1.append("requirement1", formData.message);
      formData1.append("pdf1", formData.resume);

      // Make a POST request to the '/submitresume' endpoint for form data
      await axios.post("http://localhost:4001/submitresume", formData1);
      setIsBlurred(true);
      openPopup();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleJob = (index) => {
    setOpenJobs((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    resume: null,
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      resume: e.target.files[0],
    }));
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
                <div className="contact-text">Career Page</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className={`main-career ${isBlurred ? "blur-background" : ""}`}>
        <Slide direction="down" delay={1}>
          <h1 className="start-j">Start Your Journey with Us!</h1>
        </Slide>
        <div className="main-below-career">
          <img
            src="https://res.cloudinary.com/dofzu13gt/image/upload/v1697372513/NA_October_10_rzwarx.jpg"
            alt="ds"
            className="img-car"
          />
          <p className="career-p">
            At B2World company, we believe in fostering a culture of innovation,
            growth, and collaboration. We're constantly on the lookout for
            talented individuals who are passionate about their work and are
            eager to make a meaningful impact in their careers.
          </p>
        </div>

        <hr />
        <div className="job-list-con">
          <Slide direction="left" delay={1}>
            <div className="job-list">
              {jobListings.map((job, index) => (
                <div key={index} className="job-listing">
                  <div className="job-title" onClick={() => toggleJob(index)}>
                    {job.title}{" "}
                    <img
                      src="https://res.cloudinary.com/dofzu13gt/image/upload/v1696508598/down_cuojhi.png"
                      alt="img1"
                      className="img-drop"
                    />
                    <hr />
                  </div>
                  {openJobs[index] && (
                    <div className="job-description">
                      <ReactMarkdown>{job.description}</ReactMarkdown>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Slide>

          <div className="con-carrer">
            <Slide direction="right" delay={1}>
              <div className="form-container">
                <form className="career-form" onSubmit={handleSubmit}>
                  <h2 className="send-re">SEND YOUR RESUME</h2>
                  <div className="form-group">
                    <label>Name </label>
                    <input
                      type="text"
                      name="name"
                      className="input-career"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Role</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Write your message here</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group1">
                    <label>Resume (optional)</label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                    />
                  </div>
                  <button className="btn-submit-career" type="submit">
                    SUBMIT
                  </button>
                </form>
              </div>
            </Slide>
            <Slide direction="right" delay={1}>
              <div className="need-more1">
                <h1 className="need-h2">Contact Support</h1>
                <p className="need-p2">
                  Need help choosing the right plan for your business? Chat with
                  support today!
                </p>
                <button className="btn-sales1">Contact Us</button>
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <div className="footer-career">
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

export default Career;
