import React from 'react';
import bannerImg from '../../assets/banner4.svg'

const Banner = () => {
    return (
        <div className='bg-gradient-to-b from-blue-400 to-indigo-500 h-full'>
            <div className='md:flex justify-between w-10/12 mx-auto items-center'>
                <div className='flex-1 pt-8  md:pt-0 md:text-start'>
                    <h2 className='text-white font-medium text-4xl md:text-7xl md:w-4/5'>Find <span className='font-semibold'>Freelancers</span> for Any Task</h2>
                    <p className='py-8 text-base md:text-2xl text-white'>Need help with small tasks? Connect with top freelancers or post your own project and hire the best talent — all within your budget and timeline.</p>
                    <button className="btn btn-primary text-base font-medium py-4 px-6 md:py-6  md:px-12 hover:bg-neutral">Post Your Task Now</button>
                </div>
                <div className='flex-1 w-full pt-12 pb-4 flex justify-end'>
                    <img className='' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;