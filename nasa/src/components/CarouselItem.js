import React from "react";

export default function CarouselItem({ imgUrl }) {
  return (
    <div className="carousel-card">
      <img src={imgUrl}></img>
    </div>
  );
}