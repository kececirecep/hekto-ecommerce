import React, { useEffect, useState } from 'react'
import LeatesProductCard from '../../../components/ProductCards/LeatesProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/getProducts';


const Leatest = () => {
    const [randomArray, setRandomArray] = useState([]);

    const allProduct = useSelector((state) => state.getProducts.data)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    useEffect(() => {
        let newArray = [];

        if (allProduct.length >= 1) {
            for (let i = 1; i <= 3; i++) {
                const random = Math.floor(Math.random() * 9);
                newArray.push(allProduct[random])
            }
            setRandomArray(newArray)
        }

    }, [allProduct]) 


    return (
        <div className='pt-20'>
            <div className='container mx-auto'>
                <h2 className='text-sectionTitle fnt text-3xl md:text-4xl font-bold text-center py-4'>Leatest Products</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {allProduct && randomArray.map((item, index) => {
                        return (
                            <LeatesProductCard key={index} leatesData={item} />
                        )
                    })
                    }
                </div>

            </div>
        </div>
    )
}

export default Leatest