import { Footer } from 'components/home/Footer';
import Header from 'components/home/Header';
import React from 'react'
import { Page } from 'zmp-ui'

interface IHome { }

export const Home: React.FC<IHome> = () => {
    return (
        <>
            <Page name='home' className='bg-[#f5f5f5] h-screen overflow-y-auto'>
                <Header />
                <Footer />
            </Page>
        </>
    );
};
