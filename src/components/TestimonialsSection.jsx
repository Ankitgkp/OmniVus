import React from "react";

const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
        name: "Eugene Freeman",
        role: "Tincidunt",
        image: "https://html.webtend.net/omnivus/assets/img/testimonials/01.png",
        border: "border-t-2 border-blue-600"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
        name: "Kelly Coleman",
        role: "Nulla nec",
        image: "https://html.webtend.net/omnivus/assets/img/testimonials/02.png",
        border: "border-t-2 border-teal-400"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
        name: "Philip Mendez",
        role: "Consectetur",
        image: "https://html.webtend.net/omnivus/assets/img/testimonials/03.png",
        border: "border-t-2 border-red-500"
    }
];

const TestimonialsSection = () => (
    <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h5 className="text-blue-700 font-semibold tracking-widest uppercase mb-2 text-sm">
                    Client Testimonials
                </h5>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-8">
                    What our clients say
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {testimonials.map((item, idx) => (
                    <div
                        key={idx}
                        className={`bg-white p-8 shadow-sm ${item.border} transition`}
                    >
                        <p className="text-gray-600 text-base">{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                {testimonials.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-full border-2 border-white shadow"
                        />
                        <div>
                            <div className="font-bold text-gray-900 text-lg">{item.name}</div>
                            <div className="text-gray-500 text-base">{item.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default TestimonialsSection;
