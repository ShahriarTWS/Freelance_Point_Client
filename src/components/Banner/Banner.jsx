import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bannerImg from '../../assets/banner4.svg';
import teamImg from '../../assets/team.svg';
import workImg from '../../assets/getWork.svg'

const Banner = () => {
    const slides = [
        {
            title: 'Find Freelancers for Any Task',
            description: 'Need help with small tasks? Connect with top freelancers or post your own project and hire the best talent — all within your budget and timeline.',
            buttonText: 'Post Your Task Now',
            image: bannerImg
        },
        {
            title: 'Get Hired for What You Love',
            description: 'Create your profile and start bidding on tasks that match your skills. Thousands of clients are waiting for talents like you.',
            buttonText: 'Start Earning Today',
            image: workImg
        },
        {
            title: 'Trusted by Thousands Worldwide',
            description: 'Join a growing community that values security, transparency, and reliable payments. Your trust means everything.',
            buttonText: 'Join Our Community',
            image: teamImg
        }
    ];

    return (
        <div className='bg-gradient-to-b from-blue-400 to-indigo-500 h-full'>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='md:flex justify-between w-10/12 mx-auto items-center py-8'>
                            <div className='flex-1 pt-8 md:pt-0 md:text-start'>
                                <h2 className='text-white font-medium text-4xl md:text-7xl md:w-4/5'>
                                    {slide.title.includes('Freelancers') ? (
                                        <>Find <span className='font-semibold'>Freelancers</span> for Any Task</>
                                    ) : (
                                        slide.title
                                    )}
                                </h2>
                                <p className='py-8 text-base md:text-2xl text-white'>{slide.description}</p>
                                <button className="btn btn-primary text-base font-medium py-4 px-6 md:py-6 md:px-12 hover:bg-neutral">
                                    {slide.buttonText}
                                </button>
                            </div>
                            <div className='flex-1 w-full pt-12 pb-4 flex justify-end'>
                                <img src={slide.image} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
