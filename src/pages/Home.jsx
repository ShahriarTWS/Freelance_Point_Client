import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';

const Home = () => {
    return (
        <div>
            <header className='relative'>
                <div className='sticky top-0'>
                    <Header></Header>
                </div>
                <Banner></Banner>
            </header>
            <main>

            </main>
            <footer>
                
            </footer>
        </div>
    );
};

export default Home;