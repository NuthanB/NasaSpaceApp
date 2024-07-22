import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function TypingAnim({ words }) {
  const typingTextRef = useRef(null);
  const typingCursorRef = useRef(null);
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  const type = () => {
    const currentWord = words[wordIndexRef.current];

    if (!isDeletingRef.current) {
      if (charIndexRef.current < currentWord.length) {
        typingTextRef.current.innerHTML += currentWord.charAt(charIndexRef.current);
        charIndexRef.current++;
        setTimeout(type, 100);
      } else {
        setTimeout(() => {
          isDeletingRef.current = true;
          type();
        }, 1000); // Wait before starting to delete
      }
    } else {
      if (charIndexRef.current > 0) {
        typingTextRef.current.innerHTML = currentWord.substring(0, charIndexRef.current - 1);
        charIndexRef.current--;
        setTimeout(type, 50);
      } else {
        isDeletingRef.current = false;
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length; // Move to next word
        setTimeout(type, 500); // Wait before typing the next word
      }
    }
  };

  useEffect(() => {
    // Start the typing animation
    const typingTimeout = setTimeout(type, 500);

    // Cleanup function
    return () => {
      clearTimeout(typingTimeout);
      if (typingTextRef.current) {
        typingTextRef.current.innerHTML = "";
      }
      if (typingCursorRef.current) {
        typingCursorRef.current.style.display = "inline";
      }
      wordIndexRef.current = 0;
      charIndexRef.current = 0;
      isDeletingRef.current = false;
    };
  }, [words]);

  return (
    <div className="typing-container">
      <h1 className="typing-text" ref={typingTextRef}></h1>
      <span className="typing-cursor" ref={typingCursorRef}>|</span>
    </div>
  );
}

TypingAnim.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
};
