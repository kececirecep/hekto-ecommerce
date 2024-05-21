import React from 'react'
import TrendingProductCard from '../../../components/ProductCards/TrendingProductCard'

const Trending = () => {
    return (
        <div className='pt-20'>
            <div className='container mx-auto'>
                <h2 className='text-sectionTitle fnt text-4xl font-bold text-center py-4'>Trending Products</h2>
                <TrendingProductCard />
            </div>
        </div>
    )
}

export default Trending