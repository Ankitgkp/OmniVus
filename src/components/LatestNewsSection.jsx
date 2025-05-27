import React from "react";

const blogPosts = [
    {
        image: "https://html.webtend.net/omnivus/assets/img/latest-news/01.jpg",
        author: "Admin",
        date: "05 Aug 2019",
        title: "Monthly Web Development Update Design Ethics & Clarity Over Solution",
        link: "#"
    },
    {
        image: "https://html.webtend.net/omnivus/assets/img/latest-news/02.jpg",
        author: "Admin",
        date: "05 Aug 2019",
        title: "Design System: What It And How To Create One Using Indigo Design Sence",
        link: "#"
    },
    {
        image: "https://html.webtend.net/omnivus/assets/img/latest-news/03.jpg",
        author: "Admin",
        date: "05 Aug 2019",
        title: "How We Used WebAssembly To Speed Up Our Web App By Omnivus",
        link: "#"
    }
];

const LatestNewsSection = () => (
    <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h5 className="text-blue-700 font-semibold tracking-widest uppercase mb-2 text-sm">
                    Latest News
                </h5>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-8">
                    Read Our Latest <br /> News & Blog
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {blogPosts.map((post, idx) => (
                    <div key={idx} className="bg-white shadow">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-8 flex flex-col flex-1">
                            <div className="text-blue-700 font-semibold text-sm mb-2">
                                By {post.author}, {post.date}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 leading-snug">
                                {post.title}
                            </h3>
                            <a
                                href={post.link}
                                className="mt-auto text-gray-900 font-semibold flex items-center gap-2 hover:text-blue-700 transition"
                            >
                                Read More
                                <span className="text-xl">&#8594;</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default LatestNewsSection;