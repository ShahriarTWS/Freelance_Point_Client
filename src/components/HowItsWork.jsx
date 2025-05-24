import React from 'react';
import { FaRegLightbulb, FaTasks, FaGavel, FaHandshake } from 'react-icons/fa';

const steps = [
    {
        icon: <FaRegLightbulb className="text-4xl text-blue-600" />,
        title: "1. Post a Task",
        description: "Clients describe the work they need done including budget, category, and details.",
    },
    {
        icon: <FaGavel className="text-4xl text-green-600" />,
        title: "2. Freelancers Bid",
        description: "Freelancers explore tasks and place a single bid with their price and details.",
    },
    {
        icon: <FaHandshake className="text-4xl text-yellow-600" />,
        title: "3. Choose & Hire",
        description: "Clients review bids and hire the best-fit freelancer to get the job done.",
    },
    {
        icon: <FaTasks className="text-4xl text-purple-600" />,
        title: "4. Complete & Review",
        description: "After task completion, both parties can rate and review each other.",
    }
];

const HowItWorks = () => {
    return (
        <div className=" py-16 px-6 md:px-20  ">
            <div className=" w-10/12 mx-auto text-center">
                <h2 className="md:text-4xl text-3xl font-bold mb-6 ">How Freelance Point Works</h2>
                <p className=" dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                    Whether you're a freelancer or a client, getting started is easy. Just follow these simple steps to connect and collaborate.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-base-200  p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
