import React from 'react'

const Playstore = () => {
  return (
//   play store
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
  )
}

export default Playstore