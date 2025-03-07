import React from 'react';
import { Leaf, UtensilsCrossed, Rocket } from 'lucide-react';

const Serve = () => {
  return (
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
  );
}

export default Serve;
