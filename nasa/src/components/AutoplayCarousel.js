import React from "react";
import { logos as logoArray } from "../carousel.config.js";
import CarouselItem from "./CarouselItem";

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default function AutoplayCarousel() {
  const logos = shuffle([...logoArray]);
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {logos.map((logo, _) => {
          return (
            <CarouselItem
              imgUrl={logo}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}