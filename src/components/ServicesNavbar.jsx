import React from "react";

const ServicesNavbar = () => (
    <header className="bg-gradient-to-b from-blue-100 to-white shadow-sm">
        <div className="flex justify-between items-center px-8 py-3 border-b border-blue-200 text-sm">
            <div className="flex items-center gap-6">
                <span className="flex items-center gap-1 text-blue-900">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" /><path d="M16 2v4H8V2" /></svg>
                    info@webmail.com
                </span>
                <span className="flex items-center gap-1 text-blue-900">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2A19.72 19.72 0 0 1 3 5a2 2 0 0 1 2-2h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z" /></svg>
                    786 875 864 75 7
                </span>
            </div>
            <div className="flex items-center gap-4 text-blue-900">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                <a href="#" aria-label="Behance"><i className="fab fa-behance" /></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a>
            </div>
        </div>
        <div className="flex justify-between items-center px-8 py-6">
            <div>
                <div className="text-3xl font-bold text-blue-900">OmniVus.<span className="text-black"> </span></div>
                <div className="text-gray-400 text-sm">IT Service &amp; Technology</div>
            </div>
            <nav className="flex-1 flex justify-center items-center gap-10 font-semibold text-lg">
                <a href="#" className="text-blue-900 hover:text-blue-700">HOME <span className="text-blue-400">+</span></a>
                <a href="#" className="text-blue-900 hover:text-blue-700">ABOUT <span className="text-blue-400">+</span></a>
                <a href="#" className="text-blue-700 font-bold">SERVICES <span className="text-blue-400">+</span></a>
                <a href="#" className="text-blue-900 hover:text-blue-700">PAGES <span className="text-blue-400">+</span></a>
                <a href="#" className="text-blue-900 hover:text-blue-700">BLOG <span className="text-blue-400">+</span></a>
                <a href="#" className="text-blue-900 hover:text-blue-700">CONTACT</a>
            </nav>
            <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-md text-lg shadow hover:bg-blue-700 transition">
                Get A Quote
            </button>
        </div>
    </header>
);

export default ServicesNavbar;