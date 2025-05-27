import React from "react";

const services = [
  {
    title: "UI/UX Design",
    description:
      "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          d="M19 11H5M12 4v16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "IT Consultancy",
    description: "Professional IT consultancy for your business.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          d="M12 19V5m7 7H5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Technology Prof.",
    description: "Expert technology professionals at your service.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description: "Modern and responsive web development services.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description: "Custom web development for your needs.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Game Design",
    description: "Creative and engaging game design solutions.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2v20m10-10H2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const ServicesComponentNew = () => (
  <div className="py-16 px-4 bg-white min-h-screen">
    <section className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden shadow-lg bg-white transition-all duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover object-center"
              loading="lazy"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-blue-700/80 via-blue-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
              <div className="bg-blue-600 rounded-md p-2 inline-flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <span className="text-white text-2xl font-bold mb-2">
                {service.title}
              </span>
              <p className="text-white text-base">
                {service.description}
              </p>
            </div>
            {/* Always show title at bottom if not hovered */}
            <div className="absolute bottom-0 left-0 right-0 bg-blue-900/80 text-white px-6 py-4 group-hover:opacity-0 transition-opacity duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 rounded-md p-2 inline-flex items-center justify-center">
                  {service.icon}
                </div>
                <span className="text-lg font-bold">{service.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default ServicesComponentNew;