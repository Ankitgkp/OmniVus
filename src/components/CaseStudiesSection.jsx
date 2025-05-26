import React, { useState } from 'react';

const caseStudies = [
  {
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    category: "IT / Solutions",
    title: "How To Improve IT knowledge"
  },
  {
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    category: "IT / Solutions",
    title: "How To Improve IT knowledge"
  },
  {
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    category: "IT / Solutions",
    title: "How To Improve IT knowledge"
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="relative py-20 px-4 bg-blue-600 overflow-hidden">

      <img
        src="https://i.postimg.cc/C5CKyZ38/portfolio-shape.webp"
        alt="texture"
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-8">
          <h5 className="text-blue-200 font-semibold tracking-widest uppercase mb-2 text-sm">
            Latest Case Studies
          </h5>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Reads Our Recent <br /> Case Studies
          </h2>

          <div className="flex gap-3 mt-4">
            <button className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center shadow hover:bg-blue-700 transition">
              &#8592;
            </button>
            <button className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center shadow hover:bg-blue-200 transition">
              &#8594;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="relative group  overflow-hidden shadow-lg w-[320px] h-[400px] mx-auto"
              style={{ minWidth: 320, minHeight: 400 }}
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div className="absolute left-0 bottom-0 p-6 w-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-semibold mb-1">{study.category}</p>
                <h3 className="text-white text-2xl font-bold leading-tight mb-8">{study.title}</h3>
                <button className="absolute right-6 bottom-6 w-10 h-10 rounded bg-white flex items-center justify-center text-blue-600 text-xl font-bold shadow hover:bg-blue-100 transition">
                  &#8594;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;