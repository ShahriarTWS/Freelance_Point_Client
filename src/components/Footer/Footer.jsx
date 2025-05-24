import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 pt-12 pb-6">
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                    <p className="flex items-center gap-2"><FaMapMarkerAlt /> Rajshahi, Bangladesh</p>
                    <p className="flex items-center gap-2 mt-2"><FaEnvelope /> info@freelancerpoint.com</p>
                    <p className="flex items-center gap-2 mt-2"><FaPhoneAlt /> +880 1611 683400</p>
                </div>

                {/* Terms and About */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">About</h3>
                    <ul className="space-y-2">
                        <li><Link to="/info/terms&condition" className="hover:underline">Terms & Conditions</Link></li>
                        <li><Link to="/info/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                        <li><Link to="/info/about" className="hover:underline">About FreelancerPoint</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/snjoy.420" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebookF size={20} /></a>
                        <a href="https://x.com/snjoy420" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter size={20} /></a>
                        <a href="https://www.linkedin.com/in/snjoy420" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedinIn size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-gray-500 mt-10 border-t border-gray-600 pt-6 text-sm">
                &copy; {new Date().getFullYear()} FreelancerPoint. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
