/*import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import TopSection from "../TopSection";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    cName: "nav-item",
    active: true,
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
    cName: "nav-item",
  },
  {
    id: 3,
    title: "About Us",
    path: "/aboutPage",
    cName: "nav-item",
  },
  {
    id: 4,
    title: "Team",
    path: "/team",
    cName: "nav-item",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contactus",
    cName: "nav-item",
  },
  {
    id: 6,
    title: "Pricing",
    path: "/pricing",
    cName: "nav-item",
  },
];
export const serviceDropdown = [
  {
    id: 1,
    title: "Web Development",
    path: "/webapp",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Mobile App Development",
    path: "/mobileapp",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "AI/ML",
    path: "/Aiml",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "SEO Optimization",
    path: "/seooptimize",
    cName: "submenu-item",
  },
  {
    id: 5,
    title: "Digital Marketing",
    path: "/digital",
    cName: "submenu-item",
  },
  {
    id: 6,
    title: "Design & Branding",
    path: "/design",
    cName: "submenu-item",
  },
];

export const contactDropdown = [
  {
    id: 1,
    title: "Career",
    path: "/career",
    cName: "submenu-item",
  },
];

function Dropdown({ items }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

/*
function Header() {
  const [clicked, setClicked] = useState(false);
  const [serviceDropdownVisible, setServiceDropdownVisible] = useState(false);
  const [contactDropdownVisible, setContactDropdownVisible] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {window.innerWidth >= 768 && <TopSection />}

      <nav className={`navbar ${isHeaderFixed ? "fixed" : ""}`}>
        <div className="mobile-menu-toggle" onClick={handleClicked}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <Link to="/" className="navbar-logo">
          <img
            src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695396386/Company_20Logo.png_lv3klc.png"
            alt="img"
            className="img1"
          />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setServiceDropdownVisible(true)}
                  onMouseLeave={() => setServiceDropdownVisible(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {serviceDropdownVisible && (
                    <Dropdown items={serviceDropdown} />
                  )}
                </li>
              );
            } else if (item.title === "Contact Us") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setContactDropdownVisible(true)}
                  onMouseLeave={() => setContactDropdownVisible(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {contactDropdownVisible && (
                    <Dropdown items={contactDropdown} />
                  )}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {mobileMenuVisible && (
        <div id="navbar" className={clicked ? "active" : ""}>
          <ul id="navbar-list">
            {navItems.map((item) => (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;


function Header() {
  const [clicked, setClicked] = useState(false);
  const [serviceDropdownVisible, setServiceDropdownVisible] = useState(false);
  const [contactDropdownVisible, setContactDropdownVisible] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <TopSection />
      <nav className={`navbar ${isHeaderFixed ? "fixed" : ""}`}>
        <Link to="/" className="navbar-logo">
          <img
            src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695396386/Company_20Logo.png_lv3klc.png"
            alt="img"
            className="img1"
          />
        </Link>
        <ul id="nav-items" className={clicked ? "#navbar active" : "navbar"}>
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setServiceDropdownVisible(true)}
                  onMouseLeave={() => setServiceDropdownVisible(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {serviceDropdownVisible && (
                    <Dropdown items={serviceDropdown} />
                  )}
                </li>
              );
            } else if (item.title === "Contact Us") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setContactDropdownVisible(true)}
                  onMouseLeave={() => setContactDropdownVisible(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {contactDropdownVisible && (
                    <Dropdown items={contactDropdown} />
                  )}
                </li>
              );
            }
            return (
              <>
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                  <button className="hamburger-button" onClick={handleClicked}>
                    <i
                      id="bar"
                      className={clicked ? "fas fa-times" : "fas fa-bars"}
                    ></i>
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Header;
/*

import "./index.css";
import { useState } from "react";
function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav>
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "navbar"}>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Home1</a>
            </li>
            <li>
              <a href="index.html">Home2</a>
            </li>
            <li>
              <a href="index.html">Home3</a>
            </li>
            <li>
              <a href="index.html">Home4</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Header;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import TopSection from "../TopSection";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    cName: "nav-item",
    active: true,
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
    cName: "nav-item",
  },
  {
    id: 3,
    title: "About Us",
    path: "/aboutPage",
    cName: "nav-item",
  },
  {
    id: 4,
    title: "Team",
    path: "/team",
    cName: "nav-item",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contactus",
    cName: "nav-item",
  },
  {
    id: 6,
    title: "Pricing",
    path: "/pricing",
    cName: "nav-item",
  },
];
export const serviceDropdown = [
  {
    id: 1,
    title: "Web Development",
    path: "/webapp",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Mobile App Development",
    path: "/mobileapp",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "AI/ML",
    path: "/Aiml",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "SEO Optimization",
    path: "/seooptimize",
    cName: "submenu-item",
  },
  {
    id: 5,
    title: "Digital Marketing",
    path: "/digital",
    cName: "submenu-item",
  },
  {
    id: 6,
    title: "Design & Branding",
    path: "/design",
    cName: "submenu-item",
  },
];

export const contactDropdown = [
  {
    id: 1,
    title: "Career",
    path: "/career",
    cName: "submenu-item",
  },
];

function Dropdown({ items }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Header() {
  const [serviceDropdownVisible, setServiceDropdownVisible] = useState(false);
  const [contactDropdownVisible, setContactDropdownVisible] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false); // Add this state variable

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <TopSection />
      <nav className={`navbar ${isHeaderFixed ? "fixed" : ""}`}>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}></div>
        <Link to="/" className="navbar-logo">
          <img
            src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695396386/Company_20Logo.png_lv3klc.png"
            alt="img"
            className="img1"
          />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setServiceDropdownVisible(true)}
                  onMouseLeave={() => setServiceDropdownVisible(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {serviceDropdownVisible && (
                    <Dropdown items={serviceDropdown} />
                  )}
                </li>
              );
            } else if (item.title === "Contact Us") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setContactDropdownVisible(true)}
                  onMouseLeave={() => setContactDropdownVisible(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {contactDropdownVisible && (
                    <Dropdown items={contactDropdown} />
                  )}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Header;
*/

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import TopSection from "../TopSection";
import { FaBars, FaTimes } from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    cName: "nav-item",
    active: true,
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
    cName: "nav-item",
  },
  {
    id: 3,
    title: "About Us",
    path: "/aboutPage",
    cName: "nav-item",
  },
  {
    id: 4,
    title: "Team",
    path: "/team",
    cName: "nav-item",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contactus",
    cName: "nav-item",
  },
  {
    id: 6,
    title: "Pricing",
    path: "/pricing",
    cName: "nav-item",
  },
];
export const serviceDropdown = [
  {
    id: 1,
    title: "Web Development",
    path: "/webapp",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Mobile App Development",
    path: "/mobileapp",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "AI/ML",
    path: "/Aiml",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "SEO Optimization",
    path: "/seooptimize",
    cName: "submenu-item",
  },
  {
    id: 5,
    title: "Digital Marketing",
    path: "/digital",
    cName: "submenu-item",
  },
  {
    id: 6,
    title: "Design & Branding",
    path: "/design",
    cName: "submenu-item",
  },
];

export const contactDropdown = [
  {
    id: 1,
    title: "Career",
    path: "/career",
    cName: "submenu-item",
  },
];

function Dropdown({ items }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Header() {
  const [serviceDropdownVisible, setServiceDropdownVisible] = useState(false);
  const [contactDropdownVisible, setContactDropdownVisible] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isMenuOpen ? null : <TopSection />}
      <header className="header">
        <div className="navbar-content">
          <nav className={`navbar ${isHeaderFixed ? "fixed" : ""}`}>
            <Link to="/" className="navbar-logo">
              <img
                src="https://res.cloudinary.com/dofzu13gt/image/upload/v1695396386/Company_20Logo.png_lv3klc.png"
                alt="img"
                className="img1"
              />
            </Link>

            <ul className={`nav-items ${isMenuOpen ? "open" : ""}`}>
              {navItems.map((item) => {
                if (item.title === "Services") {
                  return (
                    <li
                      key={item.id}
                      className={item.cName}
                      onMouseEnter={() => setServiceDropdownVisible(true)}
                      onMouseLeave={() => setServiceDropdownVisible(false)}
                    >
                      <Link to={item.path}>{item.title}</Link>
                      {serviceDropdownVisible && (
                        <Dropdown items={serviceDropdown} />
                      )}
                    </li>
                  );
                } else if (item.title === "Contact Us") {
                  return (
                    <li
                      key={item.id}
                      className={item.cName}
                      onMouseEnter={() => setContactDropdownVisible(true)}
                      onMouseLeave={() => setContactDropdownVisible(false)}
                    >
                      <Link to={item.path}>{item.title}</Link>
                      {contactDropdownVisible && (
                        <Dropdown items={contactDropdown} />
                      )}
                    </li>
                  );
                }
                return (
                  <li key={item.id} className={item.cName}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>
    </>
  );
}

export default Header;
