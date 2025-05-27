import React from "react";

const newsFeeds = [
    {
        image: "https://html.webtend.net/omnivus/assets/img/latest-news/04.jpg",
        category: "Design/SEO",
        title: "A series of iOS 7 inspired vector icons.",
    },
    {
        image: "https://html.webtend.net/omnivus/assets/img/latest-news/05.jpg",
        category: "Design/SEO",
        title: "A series of iOS 7 inspired vector icons.",
    },
    {
        image: "https://html.webtend.net/omnivus/assets/img/latest-news/06.jpg",
        category: "Design/SEO",
        title: "A series of iOS 7 inspired vector icons.",
    },
];

const ServicesNews = () => (
    <section className="bg-[#002249] py-20 px-4">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-5xl md:text-6xl font-extrabold text-center mb-6">
                News Feeds
            </h2>
            <p className="text-blue-100 text-center max-w-2xl mx-auto mb-14 text-lg font-medium">
                Does any industry face a more complex audience journey and marketing sales process than B2B technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {newsFeeds.map((feed, idx) => (
                    <div
                        key={idx}
                        className="relative group overflow-hidden shadow-lg"
                    >
                        <img
                            src={feed.image}
                            alt={feed.title}
                            className="w-full h-80 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#032d53]/60"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                            <div className="text-white text-sm font-semibold mb-2">{feed.category}</div>
                            <div className="text-white text-2xl font-extrabold leading-tight">
                                {feed.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ServicesNews;