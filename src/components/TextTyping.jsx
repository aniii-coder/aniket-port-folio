import React, { useEffect, useState } from "react";

const TextTyping = ({
  textToDisplay,
  textToAnimate = [],
  time = 100,
  toLoop = false,
  isUnderLineVisible = false,
}) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let charIndex = 0;
    let wordIndex = 0;

    const isArray = Array.isArray(textToAnimate);

    const interval = setInterval(() => {
      if (isArray) {
        if (textToAnimate.length === 0) return;
        const currentWord = textToAnimate[wordIndex];

        setDisplay(currentWord.slice(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentWord.length) {
          charIndex = 0;
          wordIndex++;

          if (wordIndex === textToAnimate.length) {
            if (toLoop) {
              wordIndex = 0;
            } else {
              clearInterval(interval);
            }
          }
        }
      } else {
        if (textToAnimate.length < 0) return;
        setDisplay(textToAnimate.slice(0, charIndex + 1));
        charIndex++;

        if (charIndex === textToAnimate.length) {
          if (toLoop) {
            charIndex = 0;
          } else {
            clearInterval(interval);
          }
        }
      }
    }, time);

    return () => clearInterval(interval);
  }, [textToAnimate, time, toLoop]);

  return (
    <div>
      {textToDisplay}
      <span
        style={
          isUnderLineVisible && {
            textDecoration: "underline",
            textDecorationColor: "#0563bb",
            textUnderlineOffset: "5px",
          }
        }
      >
        {display}
      </span>
    </div>
  );
};

export default TextTyping;
