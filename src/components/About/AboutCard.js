import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { IoAirplaneOutline } from "react-icons/io5";

function AboutCard() {
  useEffect(() => {
    const section__content = document.querySelectorAll(".about-us-card ");
    const showOptions = {
      rootMargin: "0px",
      threshold: 0.1,
      once: true,
    };

    const observer = new IntersectionObserver((entries, showOnScroll) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-left");
        } else {
          entry.target.classList.remove("show-left");
        }
      });
    }, showOptions);

    section__content.forEach((el) => observer.observe(el));

    return () => {
      section__content.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Card className="about-us-card">
      <Card.Body>
        <div className="blockquote mb-0">
          <div style={{ textAlign: "left" }}>
            We are a private language school from Belgrade, Serbia specializing
            in{" "}
            <b className="blue" style={{ letterSpacing: "2px" }}>
              Aviation English
            </b>
            . Our school has been successfully delivering courses in this field
            for more than 15 years. We offer complete courses that teach you
            everything you need to know in order to obtain an English{" "}
            <b className="blue" style={{ letterSpacing: "2px" }}>
              ICAO
            </b>{" "}
            certificate.
            <br /> The teaching team comprises highly qualified staff who are
            eager to pass on their vast knowledge.
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              The method we apply is based on:
            </div>
            <p></p>
          </div>
          <ul className="ul-style">
            <li className="about-activity">
              <IoAirplaneOutline className="airplane-li" />
              <span>Communicative approach</span>
            </li>
            <li className="about-activity">
              <IoAirplaneOutline className="airplane-li" />
              <span>Development of listening comprehension skills</span>
            </li>
            <li className="about-activity">
              <IoAirplaneOutline className="airplane-li" />
              <span>Boosting speaking phraseology in aviation context</span>
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
