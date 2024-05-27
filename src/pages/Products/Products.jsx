import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Filter from '../../components/Filter/Filter'
import ListProduct from '../../components/ProductCards/ListProduct'
import Search from '../../components/Header/Search'

import { getProducts } from '../../redux/getProducts'
import { useDispatch, useSelector } from 'react-redux';


const Products = () => {
    const [searchValue, setSearchValue] = useState("");

    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryToggle = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category))
        } else {
            const newS = [...selectedCategories, category]
            setSelectedCategories(newS)
        }
    }

    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(999999);

    const handleMin = (e) => {
        setMinPrice(e.target.value)
    }
    const handleMax = (e) => {
        setMaxPrice(e.target.value)
    }



    const handleSearchValue = (event) => {
        setSearchValue(event.target.value)
    }


    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.getProducts)


    useEffect(() => {
        dispatch(getProducts())
    }, [])

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
                <div className='grid grid-cols-8 gap-4'>
                    <div className='col-span-8 md:col-span-2'>
                        <div className='mb-4'>
                            <Search onChange={handleSearchValue} text={searchValue} />
                        </div>
                        <div className='flex flex-col md:flex-row items-start gap-4 mb-4'>
                            <div>
                                <h6 className='fnt text-textBlue'>Min.</h6>
                                <input onChange={(e) => handleMin(e)}
                                    type="number" min="1" value={minPrice} className='border border-my-gray outline-none p-2 w-full' placeholder='min' />
                            </div>
                            <div>
                                <h6 className='fnt text-textBlue'>Max.</h6>
                                <input onChange={(e) => handleMax(e)}
                                    type="number" min="2" value={maxPrice} className='border border-my-gray outline-none p-2 w-full' placeholder='max' />
                            </div>
                        </div>
                        <h4 className='fnt text-textBlue text-lg'>Categories:</h4>
                        <label className='flex ites-center gap-2 pt-2'>
                            <input
                                onChange={() => handleCategoryToggle("men's clothing")} checked={selectedCategories.includes("men's clothing")}
                                type="checkbox" id="check" className="accent-[#ffdbe7] focus:accent-my-pink" />
                            <span className='capitalize text-my-subText font-[400] '>men's clothing</span>
                        </label>
                        <label className='flex ites-center gap-2 pt-2'>
                            <input
                                onChange={() => handleCategoryToggle("jewelery")} checked={selectedCategories.includes("jewelery")}
                                type="checkbox" id="check" className="accent-[#ffdbe7] focus:accent-my-pink" />
                            <span className='capitalize text-my-subText font-[400] '>jewelery</span>
                        </label>
                        <label className='flex ites-center gap-2 pt-2'>
                            <input
                                onChange={() => handleCategoryToggle("electronics")} checked={selectedCategories.includes("electronics")}
                                type="checkbox" id="check" className="accent-[#ffdbe7] focus:accent-my-pink" />
                            <span className='capitalize text-my-subText font-[400] '>electronics</span>
                        </label>
                        <label className='flex ites-center gap-2 pt-2'>
                            <input
                                onChange={() => handleCategoryToggle("women's clothing")} checked={selectedCategories.includes("women's clothing")}
                                type="checkbox" id="check" className="accent-[#ffdbe7] focus:accent-my-pink" />
                            <span className='capitalize text-my-subText font-[400] '>women's clothing</span>
                        </label>
                    </div>
                    <div className='col-span-8 md:col-span-6'>
                        {
                            allProducts.data &&
                            allProducts.data
                                .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                                .filter(item => item.price >= minPrice && item.price <= maxPrice)
                                .filter(item => selectedCategories.length == 0 || selectedCategories.includes(item.category))
                                .map((item, index) => {
                                    return (
                                        <ListProduct key={index} details={item} />
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products