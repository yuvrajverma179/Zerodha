import React from 'react'
import NavBar from '../NavBar';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Footer from '../Footer';

function ProductsPage() {
    return ( 
        <>
        <NavBar />
        <Hero />
        <LeftSection />
        <RightSection />
        <LeftSection />
        <RightSection />
        <LeftSection />
        <Universe />
        <Footer />
        </>
    );
}

export default ProductsPage;