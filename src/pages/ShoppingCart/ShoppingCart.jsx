import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Footer from '../../components/Footer/Footer'
import CartTotal from '../../components/CartTotal/CartTotal'
import { useDispatch, useSelector } from 'react-redux'
import { allClearCart, removeItemCart, urunArttir, urunAzalt } from '../../redux/addToCart'

import { IoCloseOutline } from "react-icons/io5";

import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom'

const ShoppingCart = () => {
    const dispacth = useDispatch()
    const allCartItems = useSelector((state) => state.cart)


    const removeItem = (item) => {
        dispacth(removeItemCart(item)) 
    }

    const handleAllClear = () => {
        dispacth(allClearCart())
    }

    const handleArttir = (id) => {
        dispacth(urunArttir(id))
    }
    const handleAzalt = (id) => {
        dispacth(urunAzalt(id))

    }

    let toplam = 0;

    allCartItems && allCartItems.cart.forEach(element => {
        toplam += element.adet * element.price;
    });


    return (
        <div>
            <HeaderBar />
            <Header />
            <Breadcrumbs
                title="Shopping Cart" />

            <div className="container mx-auto py-24 grid grid-cols-3">
                <div className='flex flex-col h-[500px] overflow-y-auto overflow-x-hidden col-span-3 md:col-span-2 scrollrec'>

                    {
                        allCartItems.cart.length === 0 &&
                        <div className='my-4'>
                            <h2 className='text-textBlue font-semibold fnt text-4xl mb-4'>Your Cart is Empty</h2>
                            <h6 className=''>Browse <Link to="/products"><span className='text-my-pink fnt font-semibold'>Products</span></Link> to Shop</h6>
                        </div>
                    }
                    {
                        allCartItems.loading == false &&
                        allCartItems.cart.map((item, index) => {
                            return (
                                <div key={index} className='flex items-start mb-2'>
                                    <img src={item.image} alt={item.name} className='w-[150px] object-contain mr-4' />
                                    <div className='flex w-full md:justify-between md:flex-row flex-col px-8'>
                                        <div className='flex flex-col'>
                                            <Link to={`/product-details/${item.id}`} className='fnt text-textBlue font-semibold text-lg line-clamp-2'>
                                                {item.title}
                                            </Link>
                                            <span className='text-my-subText fnt'>Categories:
                                                {item.category}
                                            </span>
                                            <div className='flex items-center gap-2 my-2'>
                                                <button className='border border-gray-300 flex justify-center items-center bg-gray-200 text-black h-6 w-6 rounded'
                                                    onClick={() => handleAzalt(item.id)}><FaMinus size="12px" /></button>
                                                <input type="text" value={item.adet} className="border border-gray-300 px-2  w-20 focus:outline-none focus:border-[#fb2e86] my-1" />
                                                <button className='border border-gray-300 flex justify-center items-center bg-gray-200 text-black h-6 w-6 rounded'
                                                    onClick={() => handleArttir(item.id)}><FaPlus size="12px" /></button>
                                            </div>
                                            <div className='fnt text-textBlue text-lg'>${item.price}</div>
                                        </div>
                                        <div>
                                            <div className='text-my-pink cursor-pointer border border-my-pink rounded hover:bg-my-pink hover:text-white max-w-max' onClick={() => removeItem(item)}>
                                                <IoCloseOutline size="22px" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='col-span-3 md:col-span-1 mt-7 md:mt-0'>
                    <CartTotal total={toplam.toFixed(2)} length={allCartItems.cart.length} onClick={() => handleAllClear()} />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default ShoppingCart