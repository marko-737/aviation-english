import React, { useState, useRef, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/plane.webp";
import gsap from "gsap";
import { IoPlayOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";

import mp3 from "./Player/atc-sound.mp3";

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();

  const startAudio = () => {
    myRef.current.play();

    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    myRef.current.pause();
    changeAudioStatus(false);
  };

  const handleAudioEnd = () => {
    changeAudioStatus(false);
  };

  useEffect(() => {
    myRef.current.addEventListener("ended", handleAudioEnd);
    return () => {
      myRef.current.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.set(".container-nav *", { autoAlpha: 0, x: "-50%" });

    const animateVisible = (block, ratio, isIntersecting) => {
      if (ratio > 0 && isIntersecting) {
        // Animate visible elements
        gsap.to(block.querySelectorAll("*"), {
          duration: 0.4,
          autoAlpha: 1,
          x: "0%",
          stagger: 0.1,
          ease: "power4.inOut",
        });
      }
      //  else {
      //   // Set styles for elements that are not visible
      //   gsap.set(block.querySelectorAll(".container-nav"), {
      //     autoAlpha: 0,
      //     x: "-50%",
      //   });
      // }
    };

    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((event) => {
          const { target, intersectionRatio, isIntersecting } = event;
          animateVisible(target, intersectionRatio, isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    aboutObserver.observe(aboutRef.current);

    return () => {
      aboutObserver.disconnect();
    };
  }, []);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className="sticky">
      <Container className="container-nav" ref={aboutRef}>
        <Navbar.Brand className="d-flex align-items-center">
          <a className="logo-aviation" href="#home">
            <p
              style={{
                margin: 0,
                textShadow: "2px 2px 4px #100404",
                color: "#27aae1",
                fontWeight: "bold",
                marginRight: "9px",
              }}
            >
              Aviation English
            </p>
            <img src={logo} className="logo" alt="brand" />
          </a>

          <audio ref={myRef} src={mp3} />
          {audioStatus ? (
            <div className="play-pause-button" onClick={pauseAudio}>
              <CiPause1 style={{ fontSize: "25px" }} />
            </div>
          ) : (
            <div
              className="play-pause-button"
              onClick={startAudio}
              style={{ paddingLeft: "1px" }}
            >
              <IoPlayOutline style={{ fontSize: "25px" }} />
            </div>
          )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                href="#home"
                onClick={() => updateExpanded(false)}
                style={{ textShadow: "1px 1px 4px black" }}
              >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#about"
                onClick={() => updateExpanded(false)}
                style={{ textShadow: "1px 1px 4px black" }}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#courses"
                onClick={() => updateExpanded(false)}
                style={{ textShadow: "1px 1px 4px black" }}
              >
                Courses
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#contact"
                onClick={() => updateExpanded(false)}
                style={{ textShadow: "1px 1px 4px black" }}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
