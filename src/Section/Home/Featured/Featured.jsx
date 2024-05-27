import React, { useEffect } from 'react'
import FeaturedProductCard from '../../../components/ProductCards/FeaturedProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../redux/getProducts'

const Featured = () => {
    const allProduct = useSelector((state) => state.getProducts.data)

    const dispacth = useDispatch()

    useEffect(() => {
        dispacth(getProducts())
    }, [])

    const newProducts = allProduct.slice(0, 3)


    return (
        <div className='pt-20'>
            <div className='container mx-auto'>
                <h2 className='text-sectionTitle fnt text-3xl md:text-4xl font-bold text-center py-4'>Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {
                        allProduct && newProducts.map((item, index) => {
                            return (
                                <FeaturedProductCard key={index} allProduct={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Featured