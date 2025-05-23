import React from 'react';
import { FaCode, FaPaintBrush, FaBullhorn, FaPenNib, FaDatabase, FaMobileAlt } from 'react-icons/fa';

const categories = [
    {
        title: "Web Development",
        icon: <FaCode className="text-4xl text-blue-600" />,
        description: "Frontend, backend, and full-stack development tasks.",
    },
    {
        title: "Graphic Design",
        icon: <FaPaintBrush className="text-4xl text-pink-500" />,
        description: "Logo, branding, UI/UX, banners, and more.",
    },
    {
        title: "Digital Marketing",
        icon: <FaBullhorn className="text-4xl text-orange-500" />,
        description: "SEO, social media, ads, email marketing, and more.",
    },
    {
        title: "Content Writing",
        icon: <FaPenNib className="text-4xl text-green-600" />,
        description: "Articles, blog posts, copywriting, and editing.",
    },
    {
        title: "Database Management",
        icon: <FaDatabase className="text-4xl text-purple-600" />,
        description: "SQL, NoSQL, performance tuning, and backups.",
    },
    {
        title: "App Development",
        icon: <FaMobileAlt className="text-4xl text-yellow-500" />,
        description: "iOS, Android, cross-platform, and Flutter apps.",
    },
];

const TopCategories = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-20 text-gray-800 dark:text-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Top Categories</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    Explore the most in-demand freelance categories and find experts for any task.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                        >
                            <div className="mb-4">{category.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopCategories;
