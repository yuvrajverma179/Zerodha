import React from 'react'
import NavBar from '../NavBar';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Brokerrage from './Brokerrage';
import Footer from '../Footer';

function PricingPage() {
    return ( 
        <>
        <NavBar />
        <Hero />
        <OpenAccount />
        <Brokerrage />
        <Footer />
        </>
    );
}

export default PricingPage;