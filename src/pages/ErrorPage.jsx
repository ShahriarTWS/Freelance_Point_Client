import React from 'react';
import errorAnim from '../assets/error.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Lottie className='h-[80vh]' animationData={errorAnim}></Lottie>
            <Link to={'/'}>
                <p className='text-center'>
                    <button className="btn btn-primary text-base font-medium py-4 px-6 md:py-6 md:px-12 hover:bg-neutral">
                        Back to home
                    </button>
                </p>
            </Link>
        </div>
    );
};

export default ErrorPage;