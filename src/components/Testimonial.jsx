import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Emily Carter",
        role: "Client",
        feedback: "FreelancerPoint helped me find a great developer in under 24 hours. The bidding system is simple and transparent.",
        image: "https://i.pravatar.cc/100?img=32",
    },
    {
        id: 2,
        name: "James Howard",
        role: "Freelancer",
        feedback: "I love how easy it is to browse tasks and place bids. The site is user-friendly and professional.",
        image: "https://i.pravatar.cc/100?img=14",
    },
    {
        id: 3,
        name: "Sophia Moore",
        role: "Freelancer",
        feedback: "This platform made freelancing so much more reliable. I’ve landed multiple gigs already!",
        image: "https://i.pravatar.cc/100?img=48",
    },
];

const Testimonial = () => {
    return (
        <section className="py-16 ">
            <div className="md:max-w-6xl w-10/12 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">What People Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map(({ id, name, role, feedback, image }) => (
                        <div
                            key={id}
                            className="bg-base-200 p-6 rounded-2xl shadow-md relative transition hover:shadow-lg"
                        >
                            <FaQuoteLeft className="text-3xl text-primary mb-4 absolute -top-4 -left-4" />
                            <p className="text-sm italic mb-6">"{feedback}"</p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                                />
                                <div className="text-left">
                                    <h4 className="text-base font-semibold">{name}</h4>
                                    <p className="text-sm ">{role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
