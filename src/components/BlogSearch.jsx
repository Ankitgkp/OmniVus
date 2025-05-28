import React from 'react';

const BlogSearch = () => (
    <div className="bg-white shadow p-4 sm:p-6 mb-8">
        <h3 className="text-blue-900 font-bold mb-4 text-base sm:text-lg">Search Objects</h3>
        <form className="flex">
            <input
                type="text"
                placeholder="Search your keyword..."
                className="flex-1 border border-blue-200 px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button type="submit" className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center ml-2 rounded hover:bg-blue-700" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z" />
                </svg>
            </button>
        </form>
    </div>
);

export default BlogSearch;
