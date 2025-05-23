import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
    return (
        <div className="bg-gradient-to-b from-white to-slate-100 min-h-screen px-6 md:px-10 lg:px-32 py-16 text-gray-800">
            <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">
                <h1 className="text-4xl font-bold text-indigo-600 mb-2 border-b border-indigo-200 pb-3">Privacy Policy</h1>
                <p className="text-xs text-gray-400 mb-10">Effective Date: May 23, 2025</p>

                {[
                    {
                        title: '1. Introduction',
                        content:
                            'At Freelancer Point, we are committed to protecting your personal information and your right to privacy. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.',
                    },
                    {
                        title: '2. Information We Collect',
                        content: (
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Personal Information: name, email, phone number, and payment details.</li>
                                <li>Account Activity: tasks posted, bids placed, messages sent.</li>
                                <li>Device & Usage Data: IP address, browser type, operating system, and pages visited.</li>
                            </ul>
                        ),
                    },
                    {
                        title: '3. How We Use Your Information',
                        content: (
                            <ul className="list-disc pl-6 space-y-1">
                                <li>To facilitate and manage tasks and transactions.</li>
                                <li>To provide customer support and respond to inquiries.</li>
                                <li>To improve site features, security, and usability.</li>
                                <li>To send updates, promotions, or important notices (you can opt out).</li>
                            </ul>
                        ),
                    },
                    {
                        title: '4. How We Share Your Information',
                        content:
                            'We do not sell your personal data. We may share information with trusted third parties like payment processors, analytics providers, or as required by law.',
                    },
                    {
                        title: '5. Cookies & Tracking Technologies',
                        content:
                            'We use cookies to enhance your browsing experience, analyze traffic, and personalize content. You can control cookie preferences in your browser settings.',
                    },
                    {
                        title: '6. Data Security',
                        content:
                            'We use encryption, secure servers, and other modern practices to protect your personal data. However, no online service is 100% secure.',
                    },
                    {
                        title: '7. Your Rights & Choices',
                        content: (
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Access or update your personal information anytime.</li>
                                <li>Request deletion of your account and data.</li>
                                <li>Opt out of marketing emails.</li>
                            </ul>
                        ),
                    },
                    {
                        title: '8. Children\'s Privacy',
                        content:
                            'Freelancer Point is not intended for users under the age of 18. We do not knowingly collect data from minors.',
                    },
                    {
                        title: '9. Changes to This Policy',
                        content:
                            'We may update this Privacy Policy periodically. We will notify you about significant changes through the website or by email.',
                    },
                    {
                        title: '10. Contact Us',
                        content: (
                            <p className="flex items-center gap-2">
                                <FaEnvelope className="text-blue-600" />
                                <a href="mailto:support@freelancerpoint.com" className="text-blue-500 hover:underline">
                                    support@freelancerpoint.com
                                </a>
                            </p>
                        ),
                    },
                ].map((section, idx) => (
                    <section className="mb-8" key={idx}>
                        <h2 className="text-xl font-semibold text-indigo-700 mb-2">{section.title}</h2>
                        <div className="text-gray-700 text-base leading-relaxed">{section.content}</div>
                    </section>
                ))}

                <p className="text-center text-sm text-gray-400 mt-12 pt-8 border-t border-gray-200">
                    © {new Date().getFullYear()} Freelancer Point. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
