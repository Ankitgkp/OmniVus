import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ServicesNavbar from '../components/ServicesNavbar';
import BlogMainPost from '../components/BlogMainPost';
import BlogAboutMe from '../components/BlogAboutMe';
import BlogSearch from '../components/BlogSearch';
import BlogPopularFeed from '../components/BlogPopularFeed';
import BlogPagination from '../components/BlogPagination';
import ServiceFooter from '../components/ServiceFooter';
import { setPosts } from '../redux/slices/blogSlice';

const demoAuthor = {
    name: 'Rosalina D. Williamson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    socials: [
        { label: 'Facebook', link: '#', icon: 'fab fa-facebook-f' },
        { label: 'Twitter', link: '#', icon: 'fab fa-twitter' },
        { label: 'Behance', link: '#', icon: 'fab fa-behance' },
        { label: 'LinkedIn', link: '#', icon: 'fab fa-linkedin-in' },
    ],
};

const demoPosts = [
    {
        id: 1,
        image: 'https://html.webtend.net/omnivus/assets/img/blog/blog-standard-1.jpg',
        category: 'Business',
        title: 'Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.',
        views: 232,
        comments: 35,
        date: '24th March 2019',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
        author: demoAuthor,
        link: '#',
    },
    {
        id: 2,
        video: 'https://www.youtube.com/embed/t8mvutAh4AE',
        image: 'https://html.webtend.net/omnivus/assets/img/blog/blog-standard-3.jpg',
        category: 'Technology',
        title: 'Watch: The Future of IT Services in 2025',
        views: 410,
        comments: 22,
        date: '12th April 2024',
        excerpt: 'Explore the latest trends in IT services and how technology is shaping the future. Watch this insightful video to learn more about what to expect in the coming years.',
        author: demoAuthor,
        link: '#',
    },
    {
        id: 3,
        image: 'https://html.webtend.net/omnivus/assets/img/blog/blog-standard-2.jpg',
        category: 'Development',
        title: 'How to Build Scalable Web Applications',
        views: 180,
        comments: 18,
        date: '2nd May 2024',
        excerpt: 'Building scalable web applications requires careful planning and the right technology stack. In this article, we discuss best practices and tools for modern web development.',
        author: demoAuthor,
        link: '#',
    },
    {
        id: 4,
        image: 'https://html.webtend.net/omnivus/assets/img/blog/blog-standard-3.jpg',
        category: 'Design',
        title: 'UI/UX Design Trends to Watch',
        views: 95,
        comments: 7,
        date: '15th May 2024',
        excerpt: 'Stay ahead of the curve with the latest UI/UX design trends. Discover what’s new and what’s next in the world of digital design.',
        author: demoAuthor,
        link: '#',
    },
];

const demoFeeds = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        title: 'Lorem ipsum dolor sit cing elit, sed do.',
        date: '24th March 2019',
    },
    {
        id: 2,
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        title: 'Lorem ipsum dolor sit cing elit, sed do.',
        date: '24th March 2019',
    },
    {
        id: 3,
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        title: 'Lorem ipsum dolor sit cing elit, sed do.',
        date: '24th March 2019',
    },
    {
        id: 4,
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        title: 'Lorem ipsum dolor sit cing elit, sed do.',
        date: '24th March 2019',
    },
];

const POSTS_PER_PAGE = 2;

const Blog = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.blog.posts);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    useEffect(() => {
        dispatch(setPosts(demoPosts));
    }, [dispatch]);

    const paginatedPosts = posts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col">
            <ServicesNavbar />
            <div className="pt-10 sm:pt-16 pb-6 sm:pb-8 text-center px-2">
                <h1 className="text-3xl sm:text-5xl font-bold text-blue-900 mb-2">News Standard</h1>
                <div className="text-blue-400 text-base sm:text-xl font-semibold">Home <span className="text-blue-900">|</span> News</div>
            </div>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col lg:flex-row gap-6 sm:gap-8 flex-1 w-full">
                <div className="flex-1 min-w-0">
                    {paginatedPosts.map((post) => (
                        <BlogMainPost key={post.id} post={post} />
                    ))}
                    <BlogPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
                <aside className="w-full lg:w-80 flex-shrink-0">
                    <BlogAboutMe author={demoAuthor} />
                    <BlogSearch />
                    <BlogPopularFeed feeds={demoFeeds} />
                    <div className="bg-white rounded-lg shadow p-6 mb-8">
                        <h3 className="text-blue-900 font-bold mb-4 text-lg flex items-center gap-2">
                            <span className="text-blue-700">&#9632;</span> Categories
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded font-medium text-blue-900">Business <span className="bg-blue-900 text-white rounded px-2 py-0.5 text-xs">26</span></li>
                            <li className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded font-medium text-blue-900">Consultant <span className="bg-blue-900 text-white rounded px-2 py-0.5 text-xs">30</span></li>
                            <li className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded font-medium text-blue-900">Creative <span className="bg-blue-900 text-white rounded px-2 py-0.5 text-xs">71</span></li>
                            <li className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded font-medium text-blue-900">UI/UX <span className="bg-blue-900 text-white rounded px-2 py-0.5 text-xs">56</span></li>
                            <li className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded font-medium text-blue-900">Technology <span className="bg-blue-900 text-white rounded px-2 py-0.5 text-xs">60</span></li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 mb-8">
                        <h3 className="text-blue-900 font-bold mb-4 text-lg flex items-center gap-2">
                            <span className="text-blue-700">&#9632;</span> Never Miss News
                        </h3>
                        <div className="flex gap-3">
                            <a href="#" className="bg-blue-900 text-white rounded p-2"><i className="fab fa-facebook-f" /></a>
                            <a href="#" className="bg-blue-900 text-white rounded p-2"><i className="fab fa-twitter" /></a>
                            <a href="#" className="bg-blue-900 text-white rounded p-2"><i className="fab fa-behance" /></a>
                            <a href="#" className="bg-blue-900 text-white rounded p-2"><i className="fab fa-linkedin-in" /></a>
                            <a href="#" className="bg-blue-900 text-white rounded p-2"><i className="fab fa-pinterest-p" /></a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 mb-8">
                        <h3 className="text-blue-900 font-bold mb-4 text-lg flex items-center gap-2">
                            <span className="text-blue-700">&#9632;</span> Twitter Feeds
                        </h3>
                        <div className="space-y-4 text-xs text-blue-900">
                            <div>
                                <i className="fab fa-twitter text-blue-400 mr-2" /> Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2rP0jOyGvC <br /> https://t.co/DaNbj1jCul
                                <div className="text-gray-400 mt-1">November 25, 2018</div>
                            </div>
                            <div>
                                <i className="fab fa-twitter text-blue-400 mr-2" /> Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2rP0jOyGvC <br /> https://t.co/DaNbj1jCul
                                <div className="text-gray-400 mt-1">November 25, 2018</div>
                            </div>
                            <div>
                                <i className="fab fa-twitter text-blue-400 mr-2" /> Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2rP0jOyGvC <br /> https://t.co/DaNbj1jCul
                                <div className="text-gray-400 mt-1">November 25, 2018</div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            <ServiceFooter />
        </div>
    );
};

export default Blog;
