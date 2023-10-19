import React from "react";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";

import "./index.css";

function TopSection() {
  return (
    <div className="top-section">
      <div className="top-contact">
        <div className="contact-info">
          <p>
            <span>
              <Icons.FaPhone /> +91-7482909107
            </span>
            <span>|</span>
            <span>
              <Icons.FaPhone /> +91-8306755581
            </span>
            <span>|</span>
            <span>
              <Icons.FaEnvelope /> b2worldcompany@gmail.com
            </span>
          </p>
        </div>
        <div className="social-media">
          <div className="div-box-icon">
            <a href="https://whatsapp.com">
              <Icons.FaWhatsapp className="face-icon" />
            </a>
          </div>
          <div className="div-box-icon">
            <a href="https://linkedin.com">
              <Icons.FaLinkedin className="face-icon" />
            </a>
          </div>
          <div className="div-box-icon">
            <a href="https://twitter.com">
              <Icons.FaTwitter className="face-icon" />
            </a>
          </div>
          <div className="div-box-icon">
            <a href="https://instagram.com">
              <Icons.FaInstagram className="face-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="consultancy-button">
        <Link to="/contactus">
          <button>Get a free consultancy</button>
        </Link>
      </div>
    </div>
  );
}

export default TopSection;
