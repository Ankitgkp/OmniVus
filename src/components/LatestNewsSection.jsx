import React from "react";

const blogPosts = [
    {
        image: "https://html.webtend.net/omnivus/assets/img/latest-news/01.jpg",
        author: "Admin",
        date: "05 Aug 2019",
        title: "Monthly Web Development Update Design Ethics & Clarity Over Solution",
        link: "#",
    },
    {
        image: "https://html.webtend.net/omnivus/assets/img/latest-news/02.jpg",
        author: "Admin",
        date: "05 Aug 2019",
        title: "Design System: What It And How To Create One Using Indigo Design Sence",
        link: "#",
    },
    {
        image: "https://html.webtend.net/omnivus/assets/img/latest-news/03.jpg",
        author: "Admin",
        date: "05 Aug 2019",
        title: "How We Used WebAssembly To Speed Up Our Web App By Omnivus",
        link: "#",
    },
];

const LatestNewsSection = () => (
    <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h5 className="text-blue-700 font-semibold tracking-widest uppercase text-sm mb-2">
                    Latest News
                </h5>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                    Read Our Latest <br /> News & Blog
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {blogPosts.map((post, idx) => (
                    <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                        <div className="p-6 flex flex-col h-full">
                            <div className="text-blue-700 text-sm font-medium mb-2">
                                By {post.author}, {post.date}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                {post.title}
                            </h3>
                            <a
                                href={post.link}
                                className="mt-auto inline-flex items-center text-blue-700 hover:underline font-medium"
                            >
                                Read More <span className="ml-1">&#8594;</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default LatestNewsSection;
