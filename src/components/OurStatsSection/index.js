import React, { useEffect, useState } from "react";
import "./index.css";
import { Slide } from "react-awesome-reveal";
const OurStatsSection = () => {
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    yearsOfExcellence: 0,
    teamSize: 0,
  });
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        clients: prevStats.clients < 20 ? prevStats.clients + 1 : 20,
        projects: prevStats.projects < 16 ? prevStats.projects + 1 : 16,
        yearsOfExcellence:
          prevStats.yearsOfExcellence < 3 ? prevStats.yearsOfExcellence + 1 : 3,
        teamSize: prevStats.teamSize < 25 ? prevStats.teamSize + 1 : 25,
      }));
      setSlide(true);
    }, 100); // Adjust the interval as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const statsElements = document.querySelectorAll(".stats");

    statsElements.forEach((element) => {
      const from = parseInt(element.getAttribute("data-from"), 10);
      const to = parseInt(element.getAttribute("data-to"), 10);
      const speed = parseInt(element.getAttribute("data-speed"), 10);
      const refreshInterval = parseInt(
        element.getAttribute("data-refresh-interval"),
        10
      );

      let current = from;
      const increment = to > from ? 1 : -1;

      const updateStats = () => {
        element.innerText = current.toLocaleString();
        current += increment;
        if (
          (increment === 1 && current <= to) ||
          (increment === -1 && current >= to)
        ) {
          setTimeout(updateStats, refreshInterval);
        }
      };

      setTimeout(updateStats, speed);
    });
  }, []);

  return (
    <section className="our-stats" id="five">
      <div className="container-1">
        <Slide direction="left" delay={1}>
          <h2 className="our-stats-h2">
            DELIVERING, NOT JUST <br /> MONITORING
          </h2>
        </Slide>

        <p className="service-pa1">
          "At our company, we take pride in delivering top-notch services that
          exceed your expectations. We are dedicated to providing innovative
          solutions that meet your specific needs and drive your success."
        </p>

        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="our-stats-box text-center">
              <div className="our-stat-icon">
                <span className="fa fa-ge"></span>
              </div>

              <div className="our-stat-info">
                <Slide
                  direction="up"
                  delay={1}
                  triggerOnce={false}
                  duration={1000}
                  when={slide}
                >
                  <span
                    className="stats"
                    data-from={0}
                    data-to={stats.teamSize}
                  >
                    {stats.teamSize}
                  </span>
                </Slide>
                <hr />
                <Slide direction="left" delay={1}>
                  <h5>Clients Worked With</h5>
                </Slide>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="our-stats-box text-center">
              <div className="our-stat-icon">
                <span className="fa fa-git-square"></span>
              </div>
              <div className="our-stat-info">
                <Slide direction="left" delay={1}>
                  <span
                    className="stats"
                    data-from={0}
                    data-to={16}
                    data-speed={3000}
                    data-refresh-interval={50}
                  ></span>
                </Slide>
                <hr />
                <Slide direction="left" delay={1}>
                  <h5>Projects Completed</h5>
                </Slide>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="our-stats-box text-center">
              <div className="our-stat-icon">
                <span className="fa fa-globe"></span>
              </div>
              <div className="our-stat-info">
                <Slide direction="left" delay={1}>
                  <span
                    className="stats"
                    data-from={0}
                    data-to={3}
                    data-speed={3000}
                    data-refresh-interval={50}
                  ></span>
                </Slide>
                <hr />
                <Slide direction="left" delay={1}>
                  <h5>Years Of Excellence</h5>
                </Slide>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="our-stats-box text-center">
              <div className="our-stat-icon">
                <span className="fa fa-gears"></span>
              </div>
              <div className="our-stat-info">
                <Slide direction="left" delay={1}>
                  <span
                    className="stats"
                    data-from={0}
                    data-to={25}
                    data-speed={3000}
                    data-refresh-interval={50}
                  ></span>
                </Slide>
                <hr />
                <Slide direction="left" delay={1}>
                  <h5>Team Size</h5>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStatsSection;
