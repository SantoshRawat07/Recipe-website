import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import std from "../assets/san.jpg";
import std1 from "../assets/biplove.jpg";  
import std2 from "../assets/std003.jpg";
import std3 from "../assets/std005.jpeg";
import std4 from "../assets/customer.jpg";
import std5 from "../assets/women.jpg";

const testimonials = [
  {
    id: 1,
    name: "Ishmarn Kc",
    image: std,
    feedback: "The food is absolutely delicious! Highly recommend this place.",
  },
  {
    id: 2,
    name: "Emma Smith",
    image: std5,
    feedback: "Fast service and amazing quality food. I love it!",
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: std1,
    feedback: "Great ambiance and fantastic taste. Will visit again!",
  },
  {
    id: 4,
    name: "Binayak Karki",
    image: std3,
    feedback: "Everything was fresh and tasty. 10/10 experience!",
  },
  {
    id: 5,
    name: "James Brown",
    image: std4,
    feedback: "Affordable and tasty meals. Highly satisfied.",
  },
  {
    id: 6,
    name: "Ishwor Neupane",
    image: std2,
    feedback: "Best restaurant in town! The food is just amazing.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center py-10 bg-gray-100">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Testimonials</h1>

      {/* Testimonial Card */}
      <div className="relative w-screen h-96 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">

        {/* Customer Image */}
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-44 h-44 rounded-full object-cover border-4 mt-8"
        />

        {/* Name & Feedback */}
        <h3 className="text-xl font-bold mt-4">{testimonials[currentIndex].name}</h3>
        <p className="text-gray-600 mt-2 max-w-xl">{testimonials[currentIndex].feedback}</p>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
