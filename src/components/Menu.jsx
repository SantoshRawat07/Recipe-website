import React, { useState, useEffect } from "react";
import { Leaf, UtensilsCrossed, Rocket } from "lucide-react";
import { Card } from "./Card";
import "../components/Menu.css"
import Footer from "../components/Footer";
import foodimg from "../assets/food-rec.jpeg";
import food from "../assets/foody.jpeg";
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
    { name: "Salad", img: salad },
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
      <div className="counter-box">
      <p className="count">{count}+</p>
      <p className="label">{label}</p>
    </div>
    
    );
  };

  return (
    <div className="container mx-auto relative">
      {/* Page Banner */}
      <section
  className="relative bg-cover pt-24 pb-28 text-center text-white mb-5 bg-center md:bg-center lg:[background-position:top_-270px]"
  style={{
    backgroundImage: `url(${food})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  <h1 className="text-3xl md:text-4xl font-bold -mt-4 md:-mt-8 lg:mt-4">Menu</h1>
  <nav className="flex flex-wrap justify-center gap-2 mt-2">
    <a href="/" className="text-gray-300 hover:text-white">Home</a>
    <span className="text-white">/ Menu</span>
  </nav>
</section>


      {/* Healthy and Tasty Food Section */}
  <section className="bg-gray-100 py-14 md:py-20">
          <div className="container mx-auto flex flex-col lg:flex-row items-center -mt-20 md:-mt-64 px-4 sm:px-6">
            {/* Left Side: Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left px-4 md:px-6 lg:ms-20">
              <h1 className="text-xl md:text-2xl mt-10 font-bold text-orange-800">
                Healthy and Tasty Food
              </h1>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                Delicious food at low cost
              </h1>
              <p className="text-gray-600 mt-2 md:mt-4">
                Experience the best quality and taste at affordable prices.
              </p>
              <button className="mt-4 md:mt-6 bg-orange-500 text-white px-5 md:px-6 py-2 md:py-3 rounded-lg hover:bg-orange-600">
                Order Now
              </button>
  
              {/* Counter Section */}
              <div className="counter-container">
               <div className="counter-box">
              <Counter label="Foods" target={1550} />
              </div>
             <div className="counter-box">
             <Counter label="Delivery" target={1200} />
             </div>
            <div className="counter-box">
            <Counter label="Recipes" target={1950} />
           </div>
          <div className="counter-box">
          <Counter label="Customers" target={2100} />
         </div>
        </div>
      </div>
  
            {/* Right Side: Image */}
            <div className="lg:w-1/2 mt-6 md:mt-24 flex justify-center lg:justify-end px-4 md:px-2 lg:me-20 ">
              <img
                src={foodimg}
                alt="Delicious Food"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md -mb:5 lg:max-w-lg rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

      {/* What's on Your Mind? */}
      <div className="menu">
      <h2 className="heading">
         What's on Your Mind?
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {foodItems.slice(0, 4).map((item, index) => (
          <Card
            key={index}
            className="p-3 md:p-4 flex flex-col items-center mx-5 md:mx-10 mt-4 md:mt-5 md:ms-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={item.img}
              alt={item.name}
              className="rounded-md w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] object-cover"
            />
            <p className="mt-2 text-sm md:text-base font-semibold">{item.name}</p>
          </Card>
        ))}
      </div>
     </div>
      {/* Popular Recipes */}
      <h2 className="text-2xl font-bold mb-4 text-center">Explore Our Delicious Menu</h2>
<div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-5 gap-4 mb-20">
  {foodItems.slice(0, 10).reverse().map((item, index) => (
    <Card
      key={index}
      className="p-4 flex flex-col items-center ms-10 me-10 mt-8 
      h-[calc(100%-20px)] md:h-[calc(100%-80px)] lg:h-[calc(100%-60px)]"
    >
      <img
        src={item.img}
        alt={item.name}
        className="rounded-md w-full h-[100px] md:h-[100px] lg:h-[200px] object-cover
         transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      />
      <p className="mt-2 font-semibold">{item.name}</p>
    </Card>
  ))}
</div>


      {/* We Serve Best Food */}
      <section className="bg-gray-50 -mt-16 mb-5 px-6 py-12 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">We Serve Best Quality Food</h2>
        </div>

        {/* Responsive Card Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Healthy Food */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg w-full max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Leaf className="w-14 h-14 text-green-500 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Healthy Food</h3>
            <p className="text-gray-600 mt-2">We use fresh ingredients to keep your meals nutritious.</p>
          </div>

          {/* Super Tasty */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg w-full max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <UtensilsCrossed className="w-14 h-14 text-orange-500 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Super Tasty</h3>
            <p className="text-gray-600 mt-2">Delight your taste buds with our specially crafted recipes.</p>
          </div>

          {/* Fast Service */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg w-full max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Rocket className="w-14 h-14 text-blue-500 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Fast Service</h3>
            <p className="text-gray-600 mt-2">We ensure quick delivery to satisfy your hunger.</p>
          </div>
        </div>
      </section>

      {/* Play Store Section */}
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