import React, { useState, useEffect, Suspense, lazy } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Courses = lazy(() => import("./components/Courses/Courses"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = document.querySelector(".sections");
    const wheelEventListener = (event) => {
      if (event.deltaY === 100 || event.deltaY === -100) {
        event.preventDefault();
        container.scrollBy({
          top: event.deltaY,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", wheelEventListener);
    return () => {
      container.removeEventListener("wheel", wheelEventListener);
    };
  }, []);

  const SuspenseFallback = () => {
    return <div></div>;
  };

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <div className="sections" id={load ? "no-scroll" : "scroll"}>
        <Loader load={load} />
        <Navbar />
        <Home />
        <About />
        <Courses />
        <Contact />
      </div>
    </Suspense>
  );
}

export default App;
