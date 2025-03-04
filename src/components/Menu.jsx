import React from "react";
import { useState, useEffect } from "react";
import { Leaf, UtensilsCrossed, Rocket } from "lucide-react";
import { Card } from "./Card";
import Footer from "../components/Footer"
import "../components/Menu.css"
import foodimg from "../assets/food-rec.jpeg"; 
import food from "../assets/food-contact.jpg";
import burger from "../assets/burger.jpeg";
import pasta from "../assets/pasta.jpeg";
import pizza from "../assets/pizza.jpeg";
import salad from "../assets/salad.jpeg";
import sushi from "../assets/sushi.jpeg";
import tacos from "../assets/tacos.jpeg";
import steak from "../assets/steak.jpeg";
import cake from "../assets/cake.jpeg";
import soup from "../assets/soup.jpeg";
import pancake from "../assets/pancake.jpeg";
const MenuPage = () => {
  const foodItems = [
    { name: "Pasta", img: pasta },
    { name: "Burger", img: burger },
    { name: "Pizza", img: pizza },
    { name: "Salad", img: salad},
    { name: "Sushi", img: sushi },
    { name: "Tacos", img: tacos },
    { name: "Steak", img: steak },
    { name: "Cake", img: cake },
    { name: "Soup", img: soup },
    { name: "Pancakes", img: pancake },
  ];

const Counter = ({ label, target }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + 1;
      });
    }, 1); // Speed of counting

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center w-40">
      <p className="text-3xl font-bold text-orange-600">{count}+</p>
      <p className="text-lg font-semibold text-gray-800 mt-2">{label}</p>
    </div>
  
  );
};

  return (
    <div className=" container mx-auto relative"> 
   {/* page banner */}
     <section
           className="relative bg-cover pt-24 pb-28 text-center text-white mb-5"
           style={{ backgroundImage: `url(${food})`,  backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPositionY: '-450px'  }}
         >
           <h1 className="text-4xl font-bold -mt-8">Menu</h1>
           <nav className="flex justify-center space-x-4 mt-2">
             <a href="/" className="text-gray-300 hover:text-white">Home</a>
             <span className="text-white">/ Menu</span>
           </nav>
         </section>


    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center -mt-64">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-6 ms-20">
        <h1 className="text-2xl font-bold text-orange-800">
          Healthy and Tasty Food
          </h1>
          <h1 className="text-4xl font-bold text-gray-800">
            Delicious food at low cost
          </h1>
          <p className="text-gray-600 mt-4">
            Experience the best quality and taste at affordable prices.
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
            Order Now
          </button>
          {/* COUNTER JS */}
          <div className="mt-5 flex gap-[8px] justify-center lg:justify-start">
            <Counter label="Foods" target={1550} />
            <Counter label="Delivery" target={1200} />
            <Counter label="Recipes" target={1950} />
            <Counter label="Customers" target={2100} />
          </div>
          
        </div>
        {/* Right Side: Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-10 flex justify-center lg:justify-end px-6 me-20">
          <img
            src= {foodimg}
            alt="Delicious Food"
            className="w-full h-auto max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
      {/* What's on Your Mind? */}
      <h2 className="text-2xl font-bold mb-4 text-center -mt-60 pt-10">What's on Your Mind?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {foodItems.slice(0, 4).map((item, index) => (
          <Card key={index} className="p-4 flex flex-col items-center ms-10 me-10 mt-5 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img src={item.img} alt={item.name} className="rounded-md w-25 h-40 object-cover" />
            <p className="mt-2 font-semibold">{item.name}</p>
          </Card>
        ))}
      </div>

      {/* Popular Recipes */}
      <h2 className="text-2xl font-bold mb-4 text-center">Explore Our Delicious Menu</h2>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
  {foodItems.slice(0, 10).reverse().map((item, index) => (
     <Card
     key={index}
     className="p-4 flex flex-col items-center ms-10 me-10 mt-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
   >
      <img
        src={item.img}
        alt={item.name}
        className="rounded-md w-25 h-40 object-cover"
      />
      <p className="mt-2 font-semibold">{item.name}</p>
    </Card>
  ))}
</div>

<section className="py-20 bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">We serve best quality food</h2>
      </div>
      <div className="flex justify-center space-x-10 mt-10">
        
        {/* Healthy Food */}
        <div className="text-center p-5 bg-white shadow-lg rounded-lg w-60 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <Leaf className="w-12 h-12 text-green-500 mx-auto" />
          <h3 className="text-xl font-bold text-gray-800 mt-4">Healthy Food</h3>
          <p className="text-gray-600">We use fresh ingredients to keep your meals nutritious.</p>
        </div>

        {/* Super Tasty */}
        <div className="text-center p-5 bg-white shadow-lg rounded-lg w-60 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <UtensilsCrossed className="w-12 h-12 text-orange-500 mx-auto" />
          <h3 className="text-xl font-bold text-gray-800 mt-4">Super Tasty</h3>
          <p className="text-gray-600">Delight your taste buds with our specially crafted recipes.</p>
        </div>

        {/* Fast Service */}
        <div className="text-center p-5 bg-white shadow-lg rounded-lg w-60 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <Rocket className="w-12 h-12 text-blue-500 mx-auto" />
          <h3 className="text-xl font-bold text-gray-800 mt-4">Fast Service</h3>
          <p className="text-gray-600">We ensure quick delivery to satisfy your hunger.</p>
        </div>

      </div>
    </section>
    <div className="w-screen bg-gradient-to-r from-orange-500 to-red-500 text-white py-10 flex flex-col items-center mb-5">
      <h1 className="text-3xl md:text-4xl font-bold text-center max-w-2xl">
        Download the <span className="text-yellow-300">Foodland Recipe App</span> from Play Store & App Store for Recipes and Food Orders
      </h1>
      <div className="flex space-x-4 mt-6">
        {/* Google Play Store */}
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="w-40"
          />
        </a>

        {/* Apple App Store */}
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="w-40"
          />
        </a>
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default MenuPage;
