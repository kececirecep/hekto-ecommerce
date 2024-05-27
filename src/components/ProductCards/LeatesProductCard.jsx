import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { addToFav } from '../../redux/favoriteSlice';
import { addItemCart } from '../../redux/addToCart';

const LeatesProductCard = (props) => {
    const dispatch = useDispatch()


    const handleAddToCart = () => {
        dispatch(addItemCart({
            id: props.leatesData.id,
            title: props.leatesData.title,
            description: props.leatesData.description,
            category: props.leatesData.category,
            price: props.leatesData.price,
            image: props.leatesData.image,
            adet: 1,
        }))
    }

    const handleAddToFav = () => {
        dispatch(addToFav({
            id: props.leatesData.id,
            title: props.leatesData.title,
            image: props.leatesData.image,
            price: props.leatesData.price
        }))
    }

    return (
        <div key={props.key} className='w-full my-12 group shadow p-2'>
            <div className='bg-white flex justify-center p-8 relative'>
                <div className='bg-[#3F509E] fnt text-white -rotate-12 px-8 py-1 absolute top-6 left-4 opacity-0 group-hover:opacity-100 duration-150 rounded-tl-lg rounded-br-lg'>
                    Sale
                </div>
                <img src={props.leatesData.image} className='w-[223px] h-[229px] object-contain mb-8' alt="" />
                <div className='flex flex-col items-center gap-4 opacity-0 group-hover:opacity-100 duration-150 absolute bottom-4 left-4'>
                    <Link to="#" className='bg-[#EEEFFB] p-2 rounded-full text-textBlue' onClick={() => handleAddToCart()}><LuShoppingCart size="22px" /></Link>
                    <Link to="#" className='bg-[#EEEFFB] p-2 rounded-full text-textBlue' onClick={() => handleAddToFav()}><IoMdHeartEmpty size="22px" /></Link>
                    <Link to={`/product-details/${props.leatesData.id}`} className='bg-[#EEEFFB] p-2 rounded-full text-textBlue'><IoMdSearch size="22px" /></Link>
                </div>
            </div>
            <div className='flex items-center justify-between fnt text-textBlue pt-4 pb-1'>
                <Link to={`/product-details/${props.leatesData.id}`} className='border-b-4 border-gray-100 text-base font-[600] line-clamp-1 w-52'>{props.leatesData.title}</Link>
                <span className='flex items-center gap-4 text-my-pink text-lg'>${props.leatesData.price}</span>
            </div>
        </div>
    )
}

export default LeatesProductCard