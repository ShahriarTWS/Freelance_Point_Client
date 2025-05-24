import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

const TermsAndConditions = () => {
    return (
        <div className="bg-gradient-to-b from-white to-slate-100 min-h-screen px-6 md:px-10 lg:px-32 py-16 text-gray-800">
             <title>FreelancePoint || Terms & Conditions</title>
            <ScrollToTop></ScrollToTop>
            <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">
                <h1 className="text-4xl font-bold text-indigo-600 mb-2 border-b border-indigo-200 pb-3">Terms & Conditions</h1>
                <p className="text-xs text-gray-400 mb-10">Last updated: May 23, 2025</p>

                {[
                    {
                        title: '1. Acceptance of Terms',
                        content: 'By using Freelance Point, you agree to comply with these Terms and Conditions. If you do not agree, please do not use our services.',
                    },
                    {
                        title: '2. User Accounts',
                        content: (
                            <ul className="list-disc pl-6 space-y-1">
                                <li>You must be at least 18 years old to register.</li>
                                <li>Keep your login credentials confidential.</li>
                                <li>Provide accurate and updated information at all times.</li>
                            </ul>
                        ),
                    },
                    {
                        title: '3. Posting & Bidding on Tasks',
                        content: (
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Clients can post tasks for freelancers to complete.</li>
                                <li>Freelancers can place bids — only one bid per task is allowed.</li>
                            </ul>
                        ),
                    },
                    {
                        title: '4. Payments',
                        content: 'Freelance Point is not responsible for disputes or issues related to payments between users. All payments are securely handled by our integrated system.',
                    },
                    {
                        title: '5. Prohibited Activities',
                        content: (
                            <ul className="list-disc pl-6 space-y-1">
                                <li>No fake task posts or fraudulent bids.</li>
                                <li>No harassment or impersonation of other users.</li>
                                <li>Do not share illegal content or engage in illegal activity.</li>
                            </ul>
                        ),
                    },
                    {
                        title: '6. Termination',
                        content: 'Freelance Point reserves the right to suspend or terminate accounts that violate these terms without prior notice.',
                    },
                    {
                        title: '7. Limitation of Liability',
                        content: 'We are not liable for any indirect, incidental, or consequential damages arising out of the use of our platform.',
                    },
                    {
                        title: '8. Changes to Terms',
                        content: 'We may revise these terms at any time. Continued use of the site means you accept the updated terms.',
                    },
                    {
                        title: '9. Contact Us',
                        content: (
                            <p className="flex items-center gap-2">
                                <FaEnvelope className="text-blue-600" />
                                <a
                                    href="mailto:support@freelancepoint.com"
                                    className="text-blue-500 hover:underline"
                                >
                                    support@freelancepoint.com
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
                    © {new Date().getFullYear()} Freelance Point. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
