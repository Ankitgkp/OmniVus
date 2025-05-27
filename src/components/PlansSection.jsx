import React, { useState } from "react";

const plans = [
    {
        name: "Early Birds",
        price: 9,
        period: "Per Month",
        description:
            "The functional goal of technical content is to help people use a product successfully.",
    },
    {
        name: "Team",
        price: 32,
        period: "Per Month",
        description:
            "The functional goal of technical content is to help people use a product successfully.",
    },
    {
        name: "Personal",
        price: 69,
        period: "Per Month",
        description:
            "The functional goal of technical content is to help people use a product successfully.",
    },
    {
        name: "Plutinum",
        price: 99,
        period: "Per Month",
        description:
            "The functional goal of technical content is to help people use a product successfully.",
    },
];

const PlansSection = () => {
    const [activeTab, setActiveTab] = useState("Monthly");

    return (
        <section className="bg-[#f6fbfe] min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <span className="text-blue-700 font-bold text-lg">Plans</span>
                            <div className="h-1 w-16 bg-blue-700 inline-block ml-2 align-middle
                            "></div>
                        </div>
                        <div className="mt-6 sm:mt-0 flex bg-white shadow overflow-hidden w-fit mx-auto sm:mx-0">
                            <button
                                className={`px-8 py-3 font-semibold text-lg transition ${activeTab === "Monthly"
                                    ? "bg-blue-700 text-white"
                                    : "text-blue-700 hover:bg-blue-100"
                                    }`}
                                onClick={() => setActiveTab("Monthly")}
                            >
                                Monthly
                            </button>
                            <button
                                className={`px-8 py-3 font-semibold text-lg transition ${activeTab === "Yearly"
                                    ? "bg-blue-700 text-white"
                                    : "text-blue-700 hover:bg-blue-100"
                                    }`}
                                onClick={() => setActiveTab("Yearly")}
                            >
                                Yearly
                            </button>
                        </div>
                    </div>
                    <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-blue-900">Here is plans</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className="bg-white group åshadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl cursor-pointer"
                        >
                            <div className="text-blue-700 group-hover:text-white font-bold mb-2">{plan.name}</div>
                            <div className="flex items-end justify-center mb-2">
                                <span className="text-5xl font-extrabold text-blue-900 group-hover:text-white">${plan.price}</span>
                            </div>
                            <div className="text-gray-400 group-hover:text-blue-100 mb-4">{plan.period}</div>
                            <div className="w-12 h-1 bg-blue-100 mx-auto mb-4"></div>
                            <div className="text-blue-400 group-hover:text-blue-100 mb-8">{plan.description}</div>
                            <button className="mt-auto border-2 border-blue-700 group-hover:border-white text-blue-700 group-hover:text-blue-700 bg-white group-hover:bg-white font-semibold px-8 py-3 transition">
                                Purchase Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlansSection;