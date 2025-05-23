import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';
import HowItWorks from '../components/HowItsWork';
import SecurePayment from '../components/SecurePayment';
import TopCategories from '../components/TopCategories';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/task')
            .then(res => res.json())
            .then(fetchedData => {
                setData(fetchedData)
            })
            .catch(err => {
                // console.log(err);
            })
    }, [])

    return (
        <div>
            <header className='relative'>
                <div className='sticky top-0 z-50'>
                    <Header></Header>
                </div>
                <Banner></Banner>
            </header>
            <main>

                <Outlet context={data}></Outlet>

                <HowItWorks></HowItWorks>

                <SecurePayment></SecurePayment>

                <TopCategories></TopCategories>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;