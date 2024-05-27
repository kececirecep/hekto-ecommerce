import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import '../../../node_modules/react-loading-skeleton/dist/skeleton.css'

import { useDispatch, useSelector } from 'react-redux';

import { addItemCart } from '../../redux/addToCart';

import toast from 'react-hot-toast';

import { addToFav } from '../../redux/favoriteSlice';

const ListProduct = (props) => {

    const loading = useSelector((state) => state.getProducts.loading)

     

    const dispacth = useDispatch()

    const favArray = useSelector((state) => state.favorite.favoriteArray)


    const addToCart = () => {
        dispacth(addItemCart({
            id: props.details.id,
            title: props.details.title,
            description: props.details.description,
            category: props.details.category,
            price: props.details.price,
            image: props.details.image,
            adet: 1,
        }))
    }
    const handleAddToFav = () => {
        dispacth(addToFav({
            id: props.details.id,
            title: props.details.title,
            image: props.details.image,
            price: props.details.price
        }))
    }

    return (
        <div className='flex flex-col md:flex-row items-center gap-4 shadow p-3 mb-4'>
            {
                loading ? <SkeletonTheme baseColor="#dfdede" highlightColor="#6b6b6b" >
                    <p className='py-24'>
                        <Skeleton count={5} className='my-1' />
                    </p>
                </SkeletonTheme> :
                    <>
                        <Link to={`/product-details/${props.details.id}`}>
                            <img src={props.details.image} className='md:min-w-[200px] md:max-w-[200px] h-[197px] object-contain' alt="" />
                        </Link>
                        <div className=''>
                            <Link to={`/product-details/${props.details.id}`}><h2 className='text-textBlue font-bold text-lg fnt'>{props.details.title}</h2></Link>
                            <span className='flex items-center fnt text-textBlue gap-2'>${props.details.price} <h6 className='text-my-pink line-through'>${(props.details.price + 10).toFixed(2)}</h6></span>
                            <p className='text-my-subText py-3'>{props.details.description}</p>
                            <p className='text-my-subText py-3'><span className='font-semibold text-my-subText'>Categories:</span> {props.details.category}</p>
                            <div className='flex items-center gap-4 '>
                                <Link to="#" className='shadow p-2 rounded-full text-[#535399]' onClick={() => addToCart()}><LuShoppingCart size="16px" /></Link>

                                <Link to="#" className='shadow p-2 rounded-full text-[#535399]' onClick={() => handleAddToFav()}>
                                    {
                                        favArray.find((item) => item.id == props.details.id) ? <IoMdHeart className="text-my-pink" size="20px" fontWeight="700" /> : <IoMdHeartEmpty size="20px" fontWeight="700" />
                                    }
                                </Link>
                            </div>
                        </div>
                    </>
            }

        </div>
    )
}

export default ListProduct