import React, { useState } from "react";
import "./index.css";
import { Slide } from "react-awesome-reveal";
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? "open" : "closed"}`}>
      <div className="faq-question" onClick={toggleOpen}>
        {question}
        <img
          src={
            isOpen
              ? "https://res.cloudinary.com/dofzu13gt/image/upload/v1697178124/minus_rypiuu.png"
              : "https://res.cloudinary.com/dofzu13gt/image/upload/v1697178089/plus_quwkjr.png"
          }
          alt={isOpen ? "-" : "+"}
          className="faq-icon"
        />
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "How Much Will It Cost?",
      answer:
        "To Get A Better Idea Of The Cost Of What You Want To Build, Give Us A Quick Phone Call. We’ll Ask You A Few Questions About The Nature Of The Site, What Sort Of Interactivity The Site Will Have, Your Graphic Design Needs, Etc. Then We’ll Be Able To Give You A Ballpark Figure. If You’re Still Interested, We’ll Come To Your Place Of Business And Come Up With A Firm Quote.",
    },
    {
      question: "How Long It Takes To Design?",
      answer:
        "The Time Limit Of Any Assignment Is Normally Dictated By The Client. If You Have Any Time Limit In Mind We Will Attempt To Assemble It For You. The Main General Delay In The Making Of A Website Is Waiting For The Content Of The Pages To Be Sent To Us By The Client.",
    },
    {
      question: "How Do I Associate With B2world?",
      answer:
        "The process begins when you contact us with your requirements. We analyze your requirements and respond to you...",
    },
    {
      question: "Can You Help My Current Site Look More Professional?",
      answer:
        "The Process Begins When You Contact Us With Your Requirements. We Analyze Your Requirements And Respond To You. On The Basis Of The Further Discussion, You Can Choose An Engagement Model That Suits You The Best. After That, We Begin The Process Of Development.Feel Free To Call Or Mail Any Time.",
    },
    {
      question: "When Do I Pay?",
      answer:
        "Yes. Give Us Your Requirements And We Have Experienced Expertise To Help You Give A New Professional Look That Really A Creative , Unique,Eco-Friendly, Wonders!",
    },
  ];

  return (
    <Slide direction="down" delay={1}>
      <div className="faq-container">
        <h2 className="faq-heading">FAQ</h2>

        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </Slide>
  );
};

export default FAQ;
