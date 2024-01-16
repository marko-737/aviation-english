import React from "react";
import { Container } from "react-bootstrap";
import CoursesCard from "./CoursesCard";
import Particle from "../Particle";

function Courses() {
  return (
    <section>
      <Container fluid className="courses-section" id="courses">
        <Particle />
        <h1 className="page-title">Courses</h1>
        <CoursesCard style={{ marginLeft: "40px" }} />
      </Container>
    </section>
  );
}

export default Courses;
