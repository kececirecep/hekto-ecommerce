import React from 'react'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Header from '../../components/Header/Header'
import Hero from '../../Section/Home/Hero/Hero'
import Featured from '../../Section/Home/Featured/Featured'
import Leatest from '../../Section/Home/Leatest/Leatest'
import ShopexOffer from '../../Section/Home/ShopexOffer/ShopexOffer'
import Unique from '../../Section/Home/Unique/Unique' 
import Discount from '../../Section/Home/Discount/Discount'
import Newslater from '../../Section/Home/Newslater/Newslater'
import Brands from '../../Section/Home/Brands/Brands'
import LeatestBlog from '../../Section/Home/Blog/LeatestBlog'
import Footer from '../../components/Footer/Footer'


const Home = () => {
    return (
        <div>
            <HeaderBar />
            <Header />
            <Hero />
            <Featured />
            <Leatest />
            <Unique /> 
            <ShopexOffer />
            <Discount />
            <Newslater />
            <Brands />
            <LeatestBlog />
            <Footer />
        </div>
    )
}

export default Home