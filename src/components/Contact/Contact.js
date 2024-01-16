import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import emailjs from "emailjs-com";
import { FaPhone, FaInstagram } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sentMessageSuccess, setsentMessageSuccess] = useState("");

  const googleMapsUrl =
    "https://www.google.com/maps/place/%C5%A0kola+stranih+jezika+Smiley/@44.7982274,20.3775605,16z/data=!4m6!3m5!1s0x475a6f0df25cf4fd:0xb28ed4746647bcd7!8m2!3d44.7983818!4d20.3741588!16s%2Fg%2F11ckg13k5w?entry=ttu";

  useEffect(() => {
    const section__content = document.querySelectorAll(".contact-card ");
    const showOptions = {
      rootMargin: "0px",
      threshold: 0.1,
      once: true,
    };

    const observer = new IntersectionObserver((entries, showOnScroll) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showContact");
        } else {
          entry.target.classList.remove("showContact");
        }
      });
    }, showOptions);

    section__content.forEach((el) => observer.observe(el));

    return () => {
      section__content.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0773kwm",
        "template_4qqb7rd",
        { from_name: name, from_email: email, message },
        "eXb81EXAsWVNMLK9y"
      )
      .then(
        (result) => {
          console.log(result.text);
          setsentMessageSuccess("Message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setsentMessageSuccess("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setsentMessageSuccess("");
        }, 3000);
      });
  };

  return (
    <section>
      <Container fluid className="contact-section" id="contact">
        <div className="cloudd cloudd1">
          <div className="light"></div>
          <img
            className="airplane-flying-animation"
            alt="airplane-flying-animation"
            src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png"
          />
        </div>
        <div className="cloud-wrapper">
          <div className="cloud1"></div>
          <div className="cloud2"></div>
          <div className="cloud3"></div>
        </div>
        <h1 className="page-title">Contact us</h1>
        <div className="contact-buttons-container-desktop">
          <a
            href="tel:+381642360165"
            rel="noreferrer"
            target="_blank"
            className="contact-button-style"
          >
            <FaPhone />
          </a>
          <a
            href="https://www.instagram.com/skola_smiley/?hl=en"
            rel="noreferrer"
            target="_blank"
            className="contact-button-style"
          >
            <FaInstagram style={{ fontSize: "30px" }} />
          </a>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-button-style"
          >
            <GrLocation style={{ fontSize: "30px" }} />
          </a>
        </div>
        <Card className="about-us-card contact-card">
          <form onSubmit={handleSubmit}>
            <TextField
              className="textfield"
              id="name"
              label="Name"
              variant="standard"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              className="textfield"
              id="email"
              label="Email"
              variant="standard"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <label>Message</label>
              <textarea
                label="message"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="contact-button">
                Send
              </button>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                {sentMessageSuccess && <div>{sentMessageSuccess}</div>}
              </div>
            </div>
          </form>
        </Card>
      </Container>
    </section>
  );
}

export default Contact;
