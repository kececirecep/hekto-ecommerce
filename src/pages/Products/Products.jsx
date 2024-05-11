import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Filter from '../../components/Filter/Filter'
import ListProduct from '../../components/ProductCards/ListProduct'

const Products = () => {
    return (
        <div>
            <HeaderBar />
            <Header />
            <Breadcrumbs
                title="Shop Grid Default" />

            <div className='container mx-auto py-16'>
                <div className='py-8'>
                    <h2 className='text-textBlue fnt font-bold text-2xl'>Ecommerce Acceories & Fashion item </h2>
                    <h6 className='text-my-subText text-sm'>About 9,620 results (0.62 seconds)</h6>
                </div>
                <div className='flex gap-4 '>
                    <div className='  w-[25%]'>
                        <Filter
                            title="Product Brand"
                            labelTitle="Coaster Furniture"
                            className="accent-[#ffdbe7] focus:accent-my-pink"
                        />
                    </div>
                    <div className='w-[75%]'>
                        <ListProduct /> 
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products