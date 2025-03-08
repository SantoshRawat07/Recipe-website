import React, { useState } from "react";
import { Clock } from "lucide-react";
import momo from "../assets/Momo.jpeg";
import dalBhat from "../assets/Dalbhat.jpeg";
import selRoti from "../assets/selroti.jpeg";
import gundruk from "../assets/Gundruk.jpeg";
import yomari from "../assets/Yomari.jpeg";
import chatamari from "../assets/Chatamari.jpeg";
import sukuti from "../assets/Sukuti.jpeg";
import kwati from "../assets/Kwati.jpeg";
import samosa from "../assets/Samosa.jpeg";

const foodItems = [
  {
    id: 1,
    name: "Momo",
    image: momo,
    description: "Steamed dumplings filled with minced meat or vegetables.",
    ingredients: ["Flour", "Minced Meat", "Onions", "Spices"],
    recipe: "1. Prepare dough. 2. Prepare filling. 3. Roll dough into circles. 4. Place filling inside. 5. Fold and seal dumplings. 6. Prepare steamer. 7. Arrange dumplings in steamer. 8. Steam for 15 mins. 9. Prepare dipping sauce. 10. Serve hot with achar.",
    price: "Rs 250",
    cookingTime: "20 min",
  },
  {
    id: 2,
    name: "Dal Bhat",
    image: dalBhat,
    description: "Staple Nepali meal with rice, lentil soup, and curry.",
    ingredients: ["Rice", "Lentils", "Vegetables", "Spices"],
    recipe: "1. Wash rice. 2. Boil rice with water. 3. Prepare lentil soup. 4. Cook lentils until soft. 5. Add spices to lentils. 6. Prepare vegetable curry. 7. Cook vegetables until tender. 8. Fry some ghee with spices. 9. Mix everything together. 10. Serve hot with pickle.",
    price: "Rs 300",
    cookingTime: "30 min",
  },
  {
    id: 3,
    name: "Sel Roti",
    image: selRoti,
    description: "Sweet, crispy rice doughnut popular in festivals.",
    ingredients: ["Rice Flour", "Sugar", "Milk", "Ghee"],
    recipe: "1. Soak rice overnight. 2. Grind into a smooth batter. 3. Add sugar and milk. 4. Mix well. 5. Heat oil in a deep pan. 6. Pour batter in circular shape. 7. Fry until golden brown. 8. Flip and cook evenly. 9. Drain excess oil. 10. Serve warm.",
    price: "Rs 150",
    cookingTime: "20 min",
  },
  {
    id: 4,
    name: "Gundruk",
    image: gundruk,
    description: "Fermented leafy greens with a tangy flavor.",
    ingredients: ["Mustard Leaves", "Salt", "Spices"],
    recipe: "1. Wash mustard leaves. 2. Dry in the sun. 3. Place in airtight container. 4. Let it ferment for days. 5. Take out and dry again. 6. Store for later use. 7. Cook with spices. 8. Add tomato and chili. 9. Simmer for a few minutes. 10. Serve as a side dish.",
    price: "Rs 200",
    cookingTime: "25 min",
  },
  {
    id: 5,
    name: "Yomari",
    image: yomari,
    description: "Sweet steamed dumpling filled with molasses and sesame seeds.",
    ingredients: ["Rice Flour", "Molasses", "Sesame Seeds"],
    recipe: "1. Make rice flour dough. 2. Prepare molasses mixture. 3. Shape dough into small cups. 4. Fill with molasses. 5. Seal edges properly. 6. Heat steamer. 7. Steam for 20 minutes. 8. Check if fully cooked. 9. Let cool slightly. 10. Serve warm.",
    price: "Rs 180",
    cookingTime: "30 min",
  },
    {id: 6,
        name: "Sukuti",
        image: sukuti,
        description: "Dried and spiced meat, a popular Nepali delicacy.",
        ingredients: ["Buffalo Meat", "Garlic", "Ginger", "Cumin", "Chili Powder"],
        recipe: "1. Cut meat into thin strips. 2. Wash and pat dry the meat completely. 3. Marinate with garlic, ginger, cumin, chili powder, and salt. 4. Let the meat absorb flavors for at least 3 hours. 5. Hang or spread the meat under the sun to dry. 6. Dry for several days until fully dehydrated. 7. Store in an airtight container for future use. 8. Before serving, roast or fry the sukuti for better taste. 9. Cut into bite-sized pieces and mix with onions, tomatoes, and green chili. 10. Serve hot with beaten rice or as a snack.",
        price: "Rs 250",
        cookingTime: "45 min",
    },
    {
        id: 7,
        name: "Kwati",
        image: kwati,
        description: "A traditional mixed bean soup, popular during festivals.",
        ingredients: ["Mixed Beans", "Garlic", "Ginger", "Turmeric", "Salt", "Ghee"],
        recipe: "1. Rinse and soak mixed beans overnight. 2. Drain the beans and set aside. 3. Boil the beans in a pressure cooker until soft. 4. Heat ghee in a pan and add chopped garlic and ginger. 5. Sauté until golden brown, then add turmeric, salt, and other spices. 6. Add the boiled beans and mix well. 7. Pour in water and let it simmer for 15 minutes. 8. Stir occasionally to enhance flavors. 9. Garnish with fresh coriander before serving. 10. Serve hot with rice or roti.",
        price: "Rs 200",
        cookingTime: "1 hr",
    },
    {   id: 8,
        name: "Samosa",
        image: samosa,
        description: "Deep-fried pastry filled with spiced potatoes and peas.",
        ingredients: ["Flour", "Potatoes", "Green Peas", "Cumin", "Coriander", "Oil"],
        recipe: "1. Prepare a dough using flour, water, and oil. 2. Knead well and let it rest for 30 minutes. 3. Boil potatoes until soft, then mash them. 4. Mix mashed potatoes with green peas, cumin, coriander, salt, and spices. 5. Roll out the dough into small circles. 6. Cut each circle in half and fold into a cone shape. 7. Fill the cone with potato mixture and seal edges with water. 8. Heat oil in a pan for deep frying. 9. Fry samosas in hot oil until golden brown and crispy. 10. Serve hot with mint or tamarind chutney.",
        price: "Rs 100",
        cookingTime: "40 min",
    },
    {id: 9,
        name: "Chatamari",
        image: chatamari,
        description: "A Newari rice flour crepe with various toppings.",
        ingredients: ["Rice Flour", "Eggs", "Minced Meat", "Tomato", "Green Chili"],
        recipe: "1. Mix rice flour with water to form a smooth batter. 2. Heat a non-stick pan on medium heat. 3. Pour a ladle of batter and spread evenly in a circular shape. 4. Let it cook for a minute before adding toppings. 5. Crack an egg on top and spread minced meat evenly. 6. Sprinkle chopped tomatoes and green chilies for extra flavor. 7. Cover and cook until the edges become crispy. 8. Check if the egg and meat are fully cooked before removing. 9. Carefully take the chatamari off the pan. 10. Serve hot with chutney or achar.",
        price: "Rs 150",
        cookingTime: "30 min",
        
    }
];

const NepaliFoodCard = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  return (
    <div className="container mx-auto p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Traditional Nepali Foods</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((food) => (
          <div
            key={food.id}
            className="p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform"
          >
            <img src={food.image} alt={food.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-3">{food.name}</h3>
            <p className="text-gray-600">{food.description}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="flex items-center text-gray-600">
                <Clock size={18} className="mr-1" /> {food.cookingTime}
              </span>
              <span className="text-lg font-bold text-green-600">{food.price}</span>
            </div>
            <button
              className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md w-full"
              onClick={() => setSelectedFood(food)}
            >
              View Recipe
            </button>
          </div>
        ))}
      </div>
      {selectedFood && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold">{selectedFood.name}</h3>
            <img src={selectedFood.image} alt={selectedFood.name} className="w-full h-40 object-cover rounded-md mt-3" />
            <h4 className="font-bold mt-4">Ingredients:</h4>
            <ul className="list-disc pl-5">{selectedFood.ingredients.map((item, index) => (<li key={index}>{item}</li>))}</ul>
            <h4 className="font-bold mt-4">Recipe:</h4>
            <p className="text-gray-600">{selectedFood.recipe}</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md w-full" onClick={() => setSelectedFood(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NepaliFoodCard;
