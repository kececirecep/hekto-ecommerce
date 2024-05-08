import React from 'react'
import Header from '../../components/Header/Header'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'

const About = () => {
    return (
        <div>
            <HeaderBar />
            <Header />
            <Breadcrumbs
                title="About Us" />
        </div>
    )
}

export default About