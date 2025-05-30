import React, { useRef } from "react";

const services = [
  {
    title: "IT Solutions",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="#E6F4F1" />
        <rect x="14" y="18" width="20" height="12" rx="2" stroke="#00B6B0" strokeWidth="2" />
        <rect x="18" y="22" width="12" height="4" rx="1" fill="#00B6B0" />
      </svg>
    ),
    description: "Sed ut perspiciatis unde omnis iste natus error volup",
  },
  {
    title: "Security System",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="#E6F0FB" />
        <path d="M24 32c4-4 4-8 0-12-4 4-4 8 0 12z" stroke="#2563eb" strokeWidth="2" />
        <circle cx="24" cy="24" r="3" fill="#2563eb" />
      </svg>
    ),
    description: "Sed ut perspiciatis unde omnis iste natus error volup",
  },
  {
    title: "Web Development",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="#E6EEFB" />
        <rect x="16" y="20" width="16" height="8" rx="2" stroke="#fbbf24" strokeWidth="2" />
        <rect x="20" y="24" width="8" height="2" rx="1" fill="#fbbf24" />
      </svg>
    ),
    description: "Sed ut perspiciatis unde omnis iste natus error volup",
  },
  {
    title: "Database Security",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="#FEEEEE" />
        <ellipse cx="24" cy="20" rx="8" ry="3" stroke="#f87171" strokeWidth="2" />
        <path d="M16 20v8c0 1.66 3.58 3 8 3s8-1.34 8-3v-8" stroke="#f87171" strokeWidth="2" />
      </svg>
    ),
    description: "Sed ut perspiciatis unde omnis iste natus error volup",
  },
];

const ServicesSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12 ">
        <h5 className="text-blue-600 font-semibold tracking-widest uppercase mb-2 text-l">
          Services
        </h5>
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">What We Do</h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md z-10 sm:hidden"
          aria-label="Scroll left"
        >
          &#8592;
        </button>
        <div
          ref={scrollRef}
          className="flex gap-10 space-x-6 overflow-x-auto no-scrollbar scroll-smooth sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:space-x-0 sm:overflow-visible"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group flex-shrink-0 bg-white rounded-xl shadow-lg flex flex-col items-center
                hover:bg-blue-600 hover:shadow-lg cursor-pointer
                h-64 w-56 sm:w-auto
                scroll-snap-align: start;
              "
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="mb-4 mt-8">{service.icon}</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-white">{service.title}</h3>
              <p className="text-sm text-center px-2 group-hover:text-white">{service.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md z-10 sm:hidden"
          aria-label="Scroll right"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
