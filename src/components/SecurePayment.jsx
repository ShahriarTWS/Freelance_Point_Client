import React from 'react';
import { FaLock, FaShieldAlt, FaMoneyCheckAlt, FaCreditCard } from 'react-icons/fa';

const paymentFeatures = [
  {
    icon: <FaLock className="text-4xl text-blue-600" />,
    title: "Encrypted Transactions",
    description: "Your payment data is protected with industry-grade encryption and security protocols.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-green-600" />,
    title: "Trusted Escrow System",
    description: "Payments are held securely in escrow and released only after the task is approved.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-4xl text-yellow-600" />,
    title: "Multiple Payment Methods",
    description: "Pay securely using cards, mobile banking, or supported e-wallets.",
  },
  {
    icon: <FaCreditCard className="text-4xl text-purple-600" />,
    title: "No Hidden Fees",
    description: "Transparent pricing with no surprise charges or hidden fees.",
  },
];

const SecurePayment = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-20 text-gray-800 dark:text-white">
      <div className="w-10/12 mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-bold mb-6 text-blue-700 dark:text-white">Secure & Reliable Payments</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Your safety is our priority. FreelancerPoint uses best-in-class technology to keep your payments secure, simple, and stress-free.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {paymentFeatures.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurePayment;
