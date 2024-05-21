import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Filter from '../../components/Filter/Filter'
import ListProduct from '../../components/ProductCards/ListProduct'
import Search from '../../components/Header/Search'

const Products = () => {
    return (
        <div>
            {/* <HeaderBar />
            <Header /> */}
            <Breadcrumbs
                title="Shop Grid Default" />

            <div className='container mx-auto py-16'>
                <div className='py-8'>
                    <h2 className='text-textBlue fnt font-bold text-2xl'>Ecommerce Acceories & Fashion item </h2>
                    <h6 className='text-my-subText text-sm'>About 9,620 results (0.62 seconds)</h6>
                </div>
                <div className='grid grid-cols-8 gap-4'>
                    <div className='col-span-8 md:col-span-2'>
                        <div className='mb-4'>
                            <Search />
                        </div>
                        <Filter
                            title="Product Brand"
                            labelTitle="Coaster Furniture"
                            className="accent-[#ffdbe7] focus:accent-my-pink"
                        />
                    </div>
                    <div className='col-span-8 md:col-span-6'>
                        <ListProduct />
                        <ListProduct />
                        <ListProduct />
                        <ListProduct />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products