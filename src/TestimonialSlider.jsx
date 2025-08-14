import React, { useEffect, useState } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Nishant Parsai",
    text:
      "Naitik is a fantastic developer! He delivered my project on time and exceeded my expectations. Highly recommended.",
    photo: "/images/nishant.svg",
  },
  {
    name: "Abhishek Suman",
    text:
      "Working with Naitik was a breeze. He communicates well and his work is top-notch. Will hire again!",
    photo: "/images/contact.svg",
  },
  {
    name: "Nikhil Barnawal",
    text:
      "Creative, reliable, and skilled. Naitik brought my ideas to life with beautiful design and smooth functionality.",
    photo: "/images/naman.png",
  },
];

function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 400);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonial-slider">
      <div className={`testimonial-card${fade ? ' fade-in' : ' fade-out'}`}>
        <img
          src={testimonials[current].photo}
          alt={testimonials[current].name}
          className="testimonial-photo"
        />
        <div className="testimonial-content">
          <div className="testimonial-name">{testimonials[current].name}</div>
          <p className="testimonial-text">{testimonials[current].text}</p>
        </div>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={"testimonial-dot" + (idx === current ? " active" : "")}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setCurrent(idx);
                setFade(true);
              }, 400);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;
