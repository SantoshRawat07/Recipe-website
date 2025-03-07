import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Playstore from "../components/Playstore";
import Recipecard from "../components/Recipecard";
 import Testimonial from "../components/Testomonial";
import Serve from "../components/Serve";
import Slider from "../components/Slider";
import Foodzone from "../components/Foodzone";

const Home = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ?
  current_theme :'light');


  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  },[theme])

  return (
    <>
    <div className= {`container ${theme}`}>
      {/* <Header theme= {theme} setTheme={setTheme}/>  */}
      <Slider/>
      <Foodzone/>
      <Serve />
      <CategoryMenu />
      <FoodItems />
      <Cart />
      {/* <Recipecard/> */}
      <Testimonial/>
      <Playstore/>
      <Footer />
      </div>
    </>
    
  );

};

export default Home;
