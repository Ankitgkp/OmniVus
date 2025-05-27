import React from "react";

const CallToActionSection = () => (
    <section className="relative bg-blue-700 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
            src="https://i.postimg.cc/HxrsnJ5F/cta-bg.webp"
            alt="Call to Action Background"
            className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none select-none"
            aria-hidden="true"
        />
        <div className="absolute inset-0 bg-blue-700/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white text-center lg:text-left">
                <h5 className="uppercase tracking-widest font-semibold mb-3 text-white/80 text-base sm:text-lg">
                    Call to Action
                </h5>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Let’s Discuss With Us <br className="hidden sm:block" /> Your Estimate.
                </h2>
            </div>
            <a
                href="#"
                className="bg-white text-blue-700 font-semibold flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg text-base hover:bg-blue-50 transition"
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Contact Us
            </a>
        </div>
    </section>
);

export default CallToActionSection;
