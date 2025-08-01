export default function Topsale() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-10/12 ">
      <h1 className="text-3xl w-full font-bold my-4 text-gray-800 dark:text-gray0-900">
        Top Sale
      </h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <Card key={idx} />
          ))}
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="w-full bg-gray-800 p-4 rounded-2xl shadow-lg transition hover:scale-105 duration-300">
      <img
        src="/mangosago.jpg"
        alt="Top Sale Item"
        className="w-full h-40 md:h-60 object-cover rounded-xl mb-3"
      />
      <h2 className="text-lg font-semibold text-white">
        Mango Pomelo Sago
      </h2>
      <p className="text-white text-sm mb-2">6,000 IQD</p>
      <a
        href="/mangopomelosago"
        className="text-white underline"
      >
        Details
      </a>
    </div>
  );
}
