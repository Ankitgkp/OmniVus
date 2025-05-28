import React from 'react';

const BlogAboutMe = ({ author }) => (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-8 text-center">
        <h3 className="text-blue-900 font-bold mb-4 text-base sm:text-lg">About Me</h3>
        <img src={author.avatar} alt={author.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 object-cover" />
        <div className="text-blue-900 font-semibold text-sm sm:text-base mb-1">{author.name}</div>
        <div className="text-gray-400 text-xs sm:text-sm mb-2">{author.bio}</div>
        <div className="flex justify-center gap-2 sm:gap-3 mt-2">
            {author.socials.map(s => (
                <a key={s.label} href={s.link} aria-label={s.label} className="text-blue-900 hover:text-blue-600 text-lg">
                    <i className={s.icon} />
                </a>
            ))}
        </div>
    </div>
);

export default BlogAboutMe;
