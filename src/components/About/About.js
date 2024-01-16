import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";

function About() {
  return (
    <section>
      <Container fluid id="about" className="about-section right ">
        <Particle />
        <h1 className="page-title">About us</h1>
        <Aboutcard className="about-card" />
      </Container>
    </section>
  );
}

export default About;
