import React from "react";
import Typewriter from "typewriter-effect";

function Type({ text, pause, delay = "natural" }) {
  return (
    <Typewriter
      options={{
        strings: [text],
        autoStart: true,
        loop: false,
        pauseFor: pause,
        deleteSpeed: 20,
        delay: delay,
      }}
    />
  );
}

export default Type;
