import React from "react";

const Footer = () => (
    <footer className="bg-[#0a2236] text-blue-100 pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <div className="text-3xl font-bold text-white mb-6">OmniVus.</div>
                <p className="mb-6 leading-relaxed text-blue-100/80">
                    The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has changed too, as have the things that we bring to our community — conferences, books, and our membership added to the online magazine.
                </p>
                <p className="leading-relaxed text-blue-100/80">
                    One thing that hasn’t changed is that we’re a small team — with most of us not working.
                </p>
            </div>

            <div className="flex flex-col md:items-center">
                <div className="text-2xl font-bold text-white mb-6">Pages</div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-blue-100/90 text-base">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span>&#8250;</span> Home
                        </div>
                        <div className="mb-2 flex items-center gap-2">
                            <span>&#8250;</span> Services
                        </div>
                        <div className="mb-2 flex items-center gap-2">
                            <span>&#8250;</span> About
                        </div>
                        <div className="mb-2 flex items-center gap-2">
                            <span>&#8250;</span> Career
                        </div>
                        <div className="mb-2 flex items-center gap-2">
                            <span>&#8250;</span> Refund
                        </div>
                        <div className="mb-2 flex items-center gap-2">
                            <span>&#8250;</span> Terms
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span>&#8250;</span> Details
                        </div>
                        <div className="mb-2 flex items-center gap-2">
                            <span>&#8250;</span> Contact
                        </div>
                        <div className="mb-2 flex items-center gap-2">
                            <span>&#8250;</span> Business
                        </div>
                        <div className="mb-2 flex items-center gap-2">
                            <span>&#8250;</span> Affiliate
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-xl font-bold text-white mb-6">Working Hours</div>
                <div className="mb-2 text-lg">Monday - Friday: 7:00 - 17:00</div>
                <div className="mb-2 text-lg">Saturday: 7:00 - 12:00</div>
                <div className="mb-2 text-lg">Sunday and holidays: 8:00 - 10:00</div>
                <div className="mt-4 mb-2 text-base">
                    <span className="font-bold text-white">For more than 30 years,</span> IT Service has been a reliable partner in the field of logistics and cargo forwarding.
                </div>
                <a href="#" className="text-blue-400 font-semibold hover:underline text-base">
                    &#8250; Discover More
                </a>
            </div>
        </div>
        <hr className="my-10 border-zinc-600 opacity-50" />
        <div className="text-center text-blue-100/80 text-base">
            Copyright By@ <span className="font-bold text-white">WebTend</span> - 2021
        </div>
    </footer>
);

export default Footer;
