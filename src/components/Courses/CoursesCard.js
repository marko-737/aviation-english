import React, { useState, useEffect } from "react";
import { IoAirplaneOutline } from "react-icons/io5";
import Card from "react-bootstrap/Card";

function CoursesCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  useEffect(() => {
    const section__content = document.querySelectorAll(".container-flip-card ");
    const showOptions = {
      rootMargin: "0px",
      threshold: 0.1,
      once: true,
    };

    const observer = new IntersectionObserver((entries, showOnScroll) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, showOptions);

    section__content.forEach((el) => observer.observe(el));

    return () => {
      section__content.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Card
      className={`container-flip-card    ${isFlipped ? "frontActive" : ""}`}
    >
      <div className="front side">
        <div
          className={`content ${isFlipped ? "frontHidden" : "frontVisible"}`}
        >
          <div>
            <div style={{ textAlign: "justify" }}>
              Professionals involved in international aviation, such as pilots
              and air traffic controllers, are mandated to acquire a proficient
              command of the English language.{" "}
              <p className="paragraph-icao-level">
                This proficiency requirement is specified at minimum{" "}
                <b className="blue" style={{ letterSpacing: "2px" }}>
                  <span>ICAO level 4</span>.
                </b>{" "}
                Attaining this level of linguistic competence is essential to
                ensure effective communication and collaboration within the
                global aviation community.
              </p>
              <p className="six-areas-title">
                Our ICAO English training is designed to enhance proficiency in
                six key language areas, commonly referred to as language
                descriptors:
              </p>
            </div>
            <ul className="ul-style-front">
              <li className="about-activity-front">
                <IoAirplaneOutline className="airplane-li" />
                <span>Vocabulary</span>
              </li>
              <li className="about-activity-front">
                <IoAirplaneOutline className="airplane-li" />
                <span>Structure</span>
              </li>
              <li className="about-activity-front">
                <IoAirplaneOutline className="airplane-li" />
                <span>Comprehension </span>
              </li>
              <li className="about-activity-front">
                <IoAirplaneOutline className="airplane-li" />
                <span>Interaction</span>
              </li>
              <li className="about-activity-front">
                <IoAirplaneOutline className="airplane-li" />
                <span>Pronunciation</span>
              </li>
              <li className="about-activity-front">
                <IoAirplaneOutline className="airplane-li" />
                <span>Fluency</span>
              </li>
              <button onClick={flipCard} className="flip-button">
                See more...
              </button>
            </ul>
          </div>
        </div>
      </div>
      <div className="back side">
        <div
          className={`content ${isFlipped ? "frontVisible" : "frontHidden"}`}
        >
          <div>
            <div style={{ textAlign: "justify" }}>
              The ultimate goal of the course is to prepare candidates for the
              internationally recognized Test of English for Aviation (T.E.A.),
              which assesses speaking and listening skills according to ICAO
              standards. The material covered in the course is based on real
              work tasks and work environments, as well as emergency situations.
              The instruction utilizes recommended literature from official TEA
              exam centers, following ICAO standards. Prepare for this test in
              an efficient and thorough manner with the help of qualified
              instructors. Soar to Level 4 in ICAO!
            </div>
            <ul
              className="ul-style ul-second-page"
              style={{ marginTop: "10px" }}
            >
              <li className="about-activity-title">
                <span>✈️ Course Specifications:</span>
              </li>
              <li className="about-activity">
                <b style={{ color: "#27aae1" }}>Course Type:</b> Individual or
                group tutoring - Starting from B1
              </li>
              <li className="about-activity">
                <b style={{ color: "#27aae1" }}>Number of Hours:</b> 20 x 90
                minutes
              </li>
              <li className="about-activity">
                <b style={{ color: "#27aae1" }}>Price for Individual course:</b>{" "}
                400e
              </li>
              <li className="about-activity">
                <b style={{ color: "#27aae1" }}>Price for group course:</b> On
                request
              </li>
              <li className="about-activity">
                <span>
                  For students below B1 level the number of classes will be
                  higher.
                </span>
              </li>
              <button onClick={flipCard} className="flip-button go-back">
                Go back
              </button>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CoursesCard;
