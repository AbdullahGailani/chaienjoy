import React from "react";

const items = [
  {
    name: "Mango Pomelo Sago",
    price: "6,000 IQD",
    image: "/mangosago.jpg",
    desc: "Refreshing mango dessert with pomelo and chewy sago pearls.",
    link: "/mangopomelosago",
  },
  {
    name: "Strawberry Milk Tea",
    price: "5,500 IQD",
    image: "/mangosago.jpg",
    desc: "Sweet strawberry blended with creamy milk tea base.",
    link: "/strawberrymilktea",
  },
  {
    name: "Matcha Latte",
    price: "5,000 IQD",
    image: "/mangosago.jpg",
    desc: "Premium Japanese matcha with smooth milk.",
    link: "/matchalatte",
  },
  {
    name: "Taro Milk",
    price: "5,000 IQD",
    image: "/mangosago.jpg",
    desc: "Classic taro drink with a creamy texture and rich flavor.",
    link: "/taromilk",
  },
  {
    name: "Passion Fruit Tea",
    price: "4,500 IQD",
    image: "/mangosago.jpg",
    desc: "Fruity iced tea with real passion fruit and citrus twist.",
    link: "/passionfruittea",
  },
  {
    name: "Brown Sugar Milk Tea",
    price: "5,000 IQD",
    image: "/mangosago.jpg",
    desc: "Rich brown sugar syrup blended into creamy milk tea.",
    link: "/brownsugarmilktea",
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-12 sm:px-8 lg:px-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          CHA i ENJOY Menu
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Handcrafted drinks made with real ingredients
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 text-white rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-white/90">
                {item.desc}
              </p>
              <div className="mt-3 text-lg font-semibold">
                {item.price}
              </div>
              <a
                href={item.link}
                className="inline-block mt-3 text-white underline underline-offset-4"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
