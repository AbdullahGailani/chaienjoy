import React from "react";

export default function Detail() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-10 px-4 sm:px-6 lg:px-16">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          CHA i ENJOY
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Premium Drinks Made with Love
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Image Gallery */}
        <div className="flex-1">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
            <img
              src="mangosago.jpg"
              alt="Mango Sago"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-3 mt-4">
            {/* Thumbnails */}
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="w-20 h-20 rounded-lg overflow-hidden border hover:ring-2 ring-yellow-400"
              >
                <img
                  src="mangosago.jpg"
                  alt="thumb"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Mango Sago
          </h2>

          <div className="flex items-center gap-2">
            <div className="text-yellow-400 text-xl">
              ★★★★★
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              (238 reviews)
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300">
            Refreshing mango dessert drink made with real
            mango, chewy sago pearls, and creamy coconut
            milk. Served cold. A tropical favorite in every
            sip.
          </p>

          <div>
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              5,000 IQD
            </span>
            <span className="ml-2 text-sm text-gray-500 line-through">
              6,000 IQD
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-xl shadow-md transition">
              Dlivary
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition">
              Pick up
            </button>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
              Product Details
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
              <li>Size: 500ml</li>
              <li>Served Cold</li>
              <li>Made Fresh Daily</li>
              <li>No Artificial Sweeteners</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
