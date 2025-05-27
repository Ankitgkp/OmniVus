import React from "react";

const ServicesComponent = () => (
    <div>
        {/* Header Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4">Services</h1>
            <div className="text-lg md:text-xl text-blue-600 font-semibold">
                Home <span className="mx-2 text-blue-400">|</span> <span className="text-blue-700">Services</span>
            </div>
        </section>
    </div>
);

export default ServicesComponent;