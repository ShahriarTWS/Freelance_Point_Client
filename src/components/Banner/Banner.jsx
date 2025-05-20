import React from 'react';
import bannerImg from '../../assets/banner4.svg'

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-blue-400 to-indigo-500'>
            <div className='md:flex justify-between w-10/12 mx-auto items-center'>
                <div className='flex-1 pt-8  md:pt-0 md:text-start'>
                    <h2 className='text-white font-medium text-4xl md:text-7xl md:w-4/5'>Find <span className='font-semibold'>Freelancers</span> for Any Task</h2>
                    <p className='py-8 text-base md:text-2xl text-white'>Post your task and connect with skilled Freelancers</p>
                    <button className="btn btn-primary text-base font-medium py-6 px-12">Post Your Task Now</button>
                </div>
                <div className='flex-1 w-full pt-12 pb-4 flex justify-end'>
                    <img className='w-[85vh]' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;