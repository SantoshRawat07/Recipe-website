import React from "react";

const ViewRecipe = ({ food, onClose }) => {
  if (!food) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded-lg w-[400px] shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
        >
          ✕
        </button>
        <img
          src={food.img}
          alt={food.name}
          className="w-200 h-[100px] object-cover rounded-lg mb-3 mx-auto"
        />
        <h2 className="text-xl font-bold mb-2">{food.name}</h2>
        <h3 className="font-semibold">Ingredients:</h3>
        <ul className="list-disc list-inside text-sm mb-3">
          {food.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="font-semibold">Recipe Steps:</h3>
        <ol className="list-decimal list-inside text-sm space-y-1">
          {food.recipe.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ViewRecipe;