import React from 'react'
import FeaturedProductCard from '../../../components/ProductCards/FeaturedProductCard'

const Featured = () => {
    return (
        <div className='pt-20'>
            <div className='container mx-auto'>
                <h2 className='text-sectionTitle fnt text-4xl font-bold text-center py-12'>Featured Products</h2>
                <FeaturedProductCard/>
            </div>
        </div>
    )
}

export default Featured