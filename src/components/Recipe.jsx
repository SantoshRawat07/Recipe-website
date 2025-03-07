import React from 'react'
import slider from "../assets/recipeslider.jpeg";
import CategoryMenu from '../components/Recipemenu';
import Recipeitems from '../components/Recipeitems';
import Playstore from '../components/Playstore'
import Footer from '../components/Footer'
import Recipecard from './Recipecard';
import Nepalifood from '../components/Nepalifood';
const Recipe = () => {
 return(
    <div>
     <section
  className="relative bg-cover bg-center pt-24 pb-28 text-center text-white mb-5"
  style={{
    backgroundImage: `url(${slider})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center", 
    // top-260
  }}
>
  <h1 className="text-3xl md:text-4xl font-bold -mt-4">Recipe</h1>
  <nav className="flex justify-center space-x-2 md:space-x-4 mt-2">
    <a href="/" className="text-gray-300 hover:text-white text-sm md:text-base">
      Home
    </a>
    <span className="text-white text-sm md:text-base">/ Recipe</span>
  </nav>
</section>

             <CategoryMenu/>
             <Recipeitems/>
             <Nepalifood/>
             <Recipecard/>
          <Playstore/>
          <Footer/>
    </div>
  )
}

export default Recipe