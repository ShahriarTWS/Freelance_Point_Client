import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const AuthenticationPage = () => {
    return (
        <div>
            <header className='relative'>
                <div className='sticky top-0 z-50'>
                    <Header></Header>
                </div>
            <Outlet></Outlet>
            </header>
            <Footer></Footer>
        </div>
    );
};

export default AuthenticationPage;