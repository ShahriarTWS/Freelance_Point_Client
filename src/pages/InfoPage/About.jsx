import React from 'react';
import { FaUsers, FaRocket, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import teamImage from '../../assets/team.svg';
import workImage from '../../assets/getWork.svg';
import ideaImage from '../../assets/banner4.svg';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

const AboutFreelancerPoint = () => {
    return (
        <div className="bg-slate-50 min-h-screen text-gray-800 px-6 md:px-10 lg:px-24 py-16">
            <title>FreelancerPoint || About</title>
            <ScrollToTop></ScrollToTop>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-4">About Freelancer Point</h1>
                <p className="text-center text-lg text-gray-600 mb-12">
                    Empowering talent. Simplifying work. Connecting dreams with opportunity.
                </p>

                {/* Mission Section */}
                <section className="md:flex items-center gap-12 mb-20">
                    <img src={ideaImage} alt="Our Mission" className="w-full md:w-1/2 rounded-xl shadow-md mb-6 md:mb-0" />
                    <div className="flex-1">
                        <h2 className="text-3xl font-semibold text-indigo-600 mb-3">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            At <strong>Freelancer Point</strong>, our mission is to bridge the gap between clients and talented freelancers. Whether you're a student looking for side income or a business needing quick help — we’re here to make that connection seamless, affordable, and trustworthy.
                        </p>
                    </div>
                </section>

                {/* How It Works */}
                <section className="text-center mb-20">
                    <h2 className="text-3xl font-semibold text-indigo-600 mb-10">How Freelancer Point Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <FaUsers className="text-4xl text-blue-500 mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
                            <p>Sign up for free as a freelancer or client and customize your profile.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <FaRocket className="text-4xl text-purple-500 mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-2">Post or Bid on Tasks</h3>
                            <p>Clients post tasks; freelancers bid with skills and price offers. Simple and fast.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <FaHandshake className="text-4xl text-green-500 mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-2">Work & Get Paid</h3>
                            <p>Once accepted, freelancers complete tasks and receive secure payments.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="md:flex items-center gap-12 mb-20">
                    <div className="flex-1 mb-6 md:mb-0">
                        <h2 className="text-3xl font-semibold text-indigo-600 mb-3">Why Choose Freelancer Point?</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>✅ Easy and free to use</li>
                            <li>✅ Real-time bidding and updates</li>
                            <li>✅ Transparent task workflow</li>
                            <li>✅ Secure payments and data protection</li>
                            <li>✅ Fast-growing community</li>
                        </ul>
                    </div>
                    <img src={workImage} alt="Why Choose Us" className="w-full md:w-1/2 rounded-xl shadow-md" />
                </section>

                {/* Trust & Security */}
                <section className="bg-blue-50 p-8 rounded-xl shadow mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <FaShieldAlt className="text-3xl text-blue-600" />
                        <h2 className="text-2xl font-semibold text-blue-700">Your Trust, Our Priority</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Freelancer Point uses the latest encryption and security measures to ensure all transactions, data, and communications are safe. Our support team is available to assist with any issues or disputes.
                    </p>
                </section>

                {/* Team & Community */}
                <section className="md:flex items-center gap-12">
                    <img src={teamImage} alt="Our Team" className="w-full md:w-1/2 rounded-xl shadow-md mb-6 md:mb-0" />
                    <div className="flex-1">
                        <h2 className="text-3xl font-semibold text-indigo-600 mb-3">Meet the Community</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Behind Freelancer Point is a passionate team and a growing global community of freelancers, students, professionals, and businesses. Join us and be part of the future of work — flexible, fast, and fair.
                        </p>
                    </div>
                </section>

                {/* Footer note */}
                <p className="text-center text-gray-400 text-sm mt-16">© {new Date().getFullYear()} Freelancer Point. All rights reserved.</p>
            </div>
        </div>
    );
};

export default AboutFreelancerPoint;
