import React from 'react';

const BlogPopularFeed = ({ feeds }) => (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-8">
        <h3 className="text-blue-900 font-bold mb-4 text-base sm:text-lg">Popular Feeds</h3>
        <ul className="space-y-3 sm:space-y-4">
            {feeds.map(feed => (
                <li key={feed.id} className="flex items-center gap-3">
                    <img src={feed.image} alt={feed.title} className="w-12 h-12 rounded object-cover" />
                    <div>
                        <div className="text-blue-900 font-semibold text-sm leading-tight">{feed.title}</div>
                        <div className="text-gray-400 text-xs">{feed.date}</div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default BlogPopularFeed;
