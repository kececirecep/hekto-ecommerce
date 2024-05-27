import React from 'react'
import Header from '../../components/Header/Header'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import AboutSectionOne from '../../Section/About/AboutSectionOne/AboutSectionOne'
import OfferCard from '../../components/OfferCard/OfferCard'
import AboutSectionTwo from '../../Section/About/AboutSectionTwo/AboutSectionTwo'
import Footer from '../../components/Footer/Footer' 

const About = () => {
    return (
        <div>
            <HeaderBar />
            <Header />
            <Breadcrumbs
                title="About Us" />
            <div className='py-32'>
                <AboutSectionOne />
            </div>

            <div className='container mx-auto'>
                <h2 className='fnt text-4xl font-bold text-center pb-24'>Our Features</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <OfferCard />
                    <OfferCard />
                    <OfferCard />
                </div>
            </div>

            <div className='pt-32'>
                <AboutSectionTwo />
            </div>

            <Footer />
        </div>
    )
}

export default About