import React from 'react';
import { Leaf, UtensilsCrossed, Rocket } from 'lucide-react';

const Serve = () => {
  return (
    <div>
      <section className="bg-gray-50 -mt-16 mb-5 mt-10 p-10">
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
    </div>
  );
}

export default Serve;
