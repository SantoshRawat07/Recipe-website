import React, { useState } from "react";
import { Clock } from "lucide-react"; 
import ppizza from "../assets/mpizza.jpeg";
import bburger from "../assets/bburger.jpeg";
import chickenwings from "../assets/cwings.jpeg";
import ppasta from "../assets/ppasta.jpeg";
import ssalad from "../assets/ssalad.jpeg";
import ddessert from "../assets/chococake.jpeg";

const foodItems = [
  {
    id: 1,
    name: "Cheesy Margherita Pizza",
    image: ppizza,
    description: "Freshly baked with premium ingredients.",
    ingredients: ["Flour", "Tomato Sauce", "Mozzarella Cheese", "Basil"],
    recipe:
      "1. Prepare dough & let it rise. 2. Spread tomato sauce. 3. Add cheese & basil. 4. Bake at 200°C for 15 mins.",
    price: "Rs 399",
    cookingTime: "20 min",
  },
  {
    id: 2,
    name: "Juicy BBQ Burger",
    image: bburger,
    description: "Grilled beef patty with smoky BBQ sauce.",
    ingredients: ["Beef Patty", "Burger Bun", "Lettuce", "BBQ Sauce"],
    recipe:
      "1. Grill beef patty. 2. Toast the bun. 3. Add lettuce & BBQ sauce. 4. Assemble and serve hot.",
    price: "Rs 199",
    cookingTime: "15 min",
  },
  {
    id: 3,
    name: "chickenwings",    
    image: chickenwings,
    description: "Crispy wings coated in spicy sauce.",
    ingredients: ["Chicken Wings", "Spices", "Hot Sauce", "Butter"],
    recipe:
      "1. Marinate wings in spices. 2. Fry until crispy. 3. Toss in hot sauce & butter. 4. Serve with dip.",
    price: "Rs 599",
    cookingTime: "25 min",
  },
  {
    id: 4,
    name: "Pasta Alfredo",
    image: ppasta,
    description: "Creamy pasta with parmesan cheese.",
    ingredients: ["Pasta", "Cream", "Garlic", "Parmesan Cheese"],
    recipe:
      "1. Boil pasta. 2. Prepare creamy garlic sauce. 3. Mix with pasta & cheese. 4. Serve warm.",
    price: "Rs 249",
    cookingTime: "30 min",
  },
  {
    id: 5,
    name: "Fresh Greek Salad",
    image: ssalad,
    description: "Healthy mix of fresh veggies and feta cheese.",
    ingredients: ["Cucumber", "Tomatoes", "Feta Cheese", "Olives"],
    recipe:
      "1. Chop veggies. 2. Add feta cheese & olives. 3. Drizzle with olive oil. 4. Toss and serve.",
    price: "Rs 150",
    cookingTime: "10 min",
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    image: ddessert,
    description: "Warm cake with melted chocolate center.",
    ingredients: ["Chocolate", "Flour", "Butter", "Eggs"],
    recipe:
      "1. Melt chocolate & butter. 2. Mix with eggs & flour. 3. Bake for 10 mins. 4. Serve warm.",
    price: "Rs 799",
    cookingTime: "30 min",
  },
];

const Recipecard = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  return (
    <div className="container mx-auto p-10">
      {/* Food Cards Grid */}
      <h2 className="text-3xl font-bold text-center mb-6">Our Special Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((food) => (
          <div
            key={food.id}
            className="p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-3">{food.name}</h3>
            <p className="text-gray-600">{food.description}</p>

            {/* Cooking Time & Price */}
            <div className="flex justify-between items-center mt-2">
              <span className="flex items-center text-gray-600">
                <Clock size={18} className="mr-1" /> {food.cookingTime}
              </span>
              <span className="text-lg font-bold text-green-600">{food.price}</span>
            </div>

            {/* View Recipe Button */}
            <button
              className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md w-full"
              onClick={() => setSelectedFood(food)}
            >
              View Recipe
            </button>
          </div>
        ))}
      </div>

      {/* Recipe Popup Modal */}
      {selectedFood && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold">{selectedFood.name}</h3>
            <img
              src={selectedFood.image}
              alt={selectedFood.name}
              className="w-full h-40 object-cover rounded-md mt-3"
            />

            {/* Cooking Time & Price in Modal */}
            <div className="flex justify-between items-center mt-3">
              <span className="flex items-center text-gray-600">
                <Clock size={18} className="mr-1" /> {selectedFood.cookingTime}
              </span>
              <span className="text-lg font-bold text-green-600">{selectedFood.price}</span>
            </div>

            <h4 className="font-bold mt-4">Ingredients:</h4>
            <ul className="list-disc pl-5">
              {selectedFood.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4 className="font-bold mt-4">Recipe:</h4>
            <p className="text-gray-600">{selectedFood.recipe}</p>

            {/* Close Button */}
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md w-full"
              onClick={() => setSelectedFood(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipecard;
