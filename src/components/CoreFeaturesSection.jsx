import React from 'react';

const CoreFeaturesSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div className="relative flex justify-center">
          <div className="w-[28rem] h-80 bg-white rounded shadow-lg overflow-hidden absolute left-24 top-0 z-10">
            <img
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
              alt="Office"
              className="w-full h-full object-cover border-[10px] border-white rounded-lg pointer-events-none shadow-lg"
            />
          </div>
          Bottom Image with blue left and bottom border
          <div className="w-[28rem] h-80 bg-white rounded shadow-lg overflow-hidden absolute left-0 top-32">
            <div className="absolute -left-4 -bottom-4 w-full h-full border-l-8 border-b-8 border-blue-600 rounded-bl-lg pointer-events-none"></div>
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="Team"
              className="w-full h-full object-cover relative z-10 rounded-lg pointer-events-none border-[10px] border-white shadow-lg"
            />
          </div>
          <div className="invisible md:visible h-96"></div>
        </div>

        <div className="mt-64 md:mt-0">
          <h5 className="text-blue-600 font-semibold tracking-widest uppercase mb-2 text-sm">Core Features</h5>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Get More Good <br /> Experience.
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
                <rect width="24" height="24" rx="4" fill="none"/>
                <path d="M9.5 8.5v7l6-3.5-6-3.5z" fill="#4B5563"/>
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