import React from 'react';

const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
            pages.push(i);
        } else if (
            (i === 2 && currentPage > 3) ||
            (i === totalPages - 1 && currentPage < totalPages - 2)
        ) {
            pages.push('...');
        }
    }

    let lastWasDots = false;
    return (
        <div className="flex justify-center items-center gap-3 py-8">
            <button
                className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-base text-blue-300 hover:text-blue-700 transition"
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                aria-label="Previous"
            >
                &larr;
            </button>
            {pages.map((page, idx) => {
                if (page === '...') {
                    if (lastWasDots) return null;
                    lastWasDots = true;
                    return (
                        <span key={idx} className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-base text-blue-300">...</span>
                    );
                }
                lastWasDots = false;
                return (
                    <button
                        key={page}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-bold transition ${currentPage === page
                            ? 'bg-blue-700 text-white'
                            : 'bg-blue-50 text-blue-400 hover:bg-blue-200 hover:text-blue-700'
                            }`}
                        onClick={() => onPageChange(page)}
                        aria-current={currentPage === page ? 'page' : undefined}
                    >
                        {String(page).padStart(2, '0')}
                    </button>
                );
            })}
            <button
                className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-base text-blue-300 hover:text-blue-700 transition"
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next"
            >
                &rarr;
            </button>
        </div>
    );
};

export default BlogPagination;
