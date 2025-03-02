import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <Header theme= {theme} setTheme={setTheme}/>
      <CategoryMenu />
      <FoodItems />
      <Cart />  
      </div>
    </>
    
  );

};

export default Home;
