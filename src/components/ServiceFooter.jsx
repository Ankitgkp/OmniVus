import React from 'react';

const ServiceFooter = () => {
    return (
        <footer className="bg-[#0a1f44] text-white pt-16 pb-6 relative overflow-hidden">
            <div className="absolute left-0 bottom-0 w-72 h-72 bg-blue-700 opacity-60 rounded-full -translate-x-1/2 translate-y-1/2 z-0"></div>
            <div className="absolute right-10 bottom-10 w-16 h-16 bg-cyan-400 rounded-full z-0"></div>
            <div className="absolute right-20 bottom-20 w-28 h-28 bg-blue-600 rounded-full z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Omni<span className="text-white">Vus.</span></h2>
                    <p className="text-gray-300 mb-4">
                        The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has changed too, as have the things that we bring to our community conferences, books, and our membership added to the online magazine.
                    </p>
                    <p className="text-gray-300">
                        One thing that hasn’t changed is that we’re a small team — with most of us not working
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Pages</h2>
                    <div className="grid grid-cols-2 gap-2 text-gray-300">
                        <p className="hover:underline cursor-pointer">Home</p>
                        <p className="hover:underline cursor-pointer">Details</p>
                        <p className="hover:underline cursor-pointer">Services</p>
                        <p className="hover:underline cursor-pointer">Contact</p>
                        <p className="hover:underline cursor-pointer">About</p>
                        <p className="hover:underline cursor-pointer">Business</p>
                        <p className="hover:underline cursor-pointer">Career</p>
                        <p className="hover:underline cursor-pointer">Affiliate</p>
                        <p className="hover:underline cursor-pointer">Refund</p>
                        <p className="hover:underline cursor-pointer">Terms</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Working Hours</h2>
                    <p className="text-gray-300">Monday - Friday: 7:00 - 17:00</p>
                    <p className="text-gray-300">Saturday: 7:00 - 12:00</p>
                    <p className="text-gray-300 mb-4">Sunday and holidays: 8:00 - 10:00</p>
                    <p className="text-gray-300">
                        <span className="font-semibold text-white">For more then 30 years,</span> IT Service has been a reliable partner in the field of logistics and cargo forwarding.
                    </p>
                    <p className="text-blue-400 mt-2 underline cursor-pointer">Discover More</p>
                </div>
            </div>

            <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-400 text-sm">
                Copyright © By <span className="text-white font-semibold">WebTrend</span> - 2021
            </div>

            <div className="fixed bottom-5 right-5 bg-blue-600 p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </div>
        </footer>
    );
};

export default ServiceFooter;
