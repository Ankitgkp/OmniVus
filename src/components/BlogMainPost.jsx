import React from 'react';

const BlogMainPost = ({ post }) => (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-8">
        {post.video ? (
            <div className="w-full h-48 sm:h-72 mb-6 flex items-center justify-center">
                <iframe
                    width="100%"
                    height="100%"
                    src={post.video}
                    title={post.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-md w-full h-48 sm:h-72"
                ></iframe>
            </div>
        ) : (
            <img src={post.image} alt={post.title} className="w-full h-48 sm:h-72 object-cover rounded-md mb-6" />
        )}
        <div className="mb-2">
            <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">{post.category}</span>
        </div>
        <h2 className="text-lg sm:text-2xl font-bold text-blue-900 mb-2">{post.title}</h2>
        <div className="flex flex-wrap items-center text-gray-400 text-xs sm:text-sm mb-4 gap-2 sm:gap-4">
            <span>👁️ {post.views} Views</span>
            <span>💬 {post.comments} Comments</span>
            <span>📅 {post.date}</span>
        </div>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">{post.excerpt}</p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
            <div className="flex items-center gap-2">
                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                <span className="text-blue-900 font-semibold text-sm">by {post.author.name}</span>
            </div>
            <a href={post.link} className="text-blue-600 font-bold hover:underline text-sm sm:text-base">READ MORE →</a>
        </div>
    </div>
);

export default BlogMainPost;
