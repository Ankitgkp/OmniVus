import React from 'react';

const CoreFeaturesSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="relative flex justify-center md:justify-start h-[28rem] sm:h-[32rem] md:h-[36rem]">
          <div className="absolute left-12 top-0 z-10 w-64 sm:w-72 h-64 sm:h-80 bg-white rounded shadow-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
              alt="Office"
              className="w-full h-full object-cover border-8 border-white rounded-lg pointer-events-none shadow-lg"
            />
          </div>

          <div className="absolute left-0 top-24 sm:top-28 w-64 sm:w-72 h-64 sm:h-80 bg-white rounded shadow-lg overflow-hidden">
            <div className="absolute -left-4 -bottom-4 w-full h-full border-l-8 border-b-8 border-blue-600 rounded-bl-lg pointer-events-none"></div>
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="Team"
              className="w-full h-full object-cover relative z-10 rounded-lg pointer-events-none border-8 border-white shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12 md:mt-0 px-2 sm:px-0">
          <h5 className="text-blue-600 font-semibold tracking-widest uppercase mb-2 text-sm">Core Features</h5>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Get More Good <br className="hidden sm:block" /> Experience.
          </h2>
          <p className="text-blue-400 text-lg mb-4">
            Our knowledge of computers will help us
          </p>
          <p className="text-gray-500 mb-8 max-w-xl">
            Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It's a lot of meaningful content here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-700 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition">
              Learn More
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded font-semibold flex items-center gap-2 hover:bg-gray-300 transition">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M9.5 8.5v7l6-3.5-6-3.5z" fill="#4B5563" />
              </svg>
              Intro Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
