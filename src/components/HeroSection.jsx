import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Text */}
        <div>
          <h4 className="text-gray-600 text-base font-medium uppercase mb-3 tracking-wide">
            IT Business Consulting
          </h4>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Best IT <span className="text-blue-700">Solutions</span> <br />
            Provider Agency
          </h1>
          <p className="text-gray-600 mb-8 text-base max-w-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
          </p>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition">
            Our Services <span className="ml-2">&#8594;</span>
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src="https://i.postimg.cc/nLwFgs75/banner-img.webp"
            alt="Hero"
            className="w-100 h-100 object-contain rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;