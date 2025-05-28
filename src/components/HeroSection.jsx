import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h4 className="text-gray-600 text-sm font-medium uppercase mb-4 tracking-wider">
            IT Business Consulting
          </h4>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Best IT <span className="text-blue-700">Solutions</span> <br />
            Provider Agency
          </h1>
          <p className="text-gray-600 mb-8 text-base max-w-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
          </p>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition duration-300">
            Our Services <span className="ml-2">&#8594;</span>
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/nLwFgs75/banner-img.webp"
            alt="Hero"
            className="w-full max-w-lg h-auto object-contain rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
