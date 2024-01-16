import React from "react";
import { Container } from "react-bootstrap";
import Slider from "../Slider/Slider";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <div>
          <Slider />
        </div>
        <div className="go-to go-to-next">
          <a href="#about" aria-label="go to about section">
            <span></span>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Home;
