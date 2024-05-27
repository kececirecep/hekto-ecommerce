import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { addItemCart } from '../../redux/addToCart';
import { addToFav } from '../../redux/favoriteSlice';




const ProductPageCard = (props) => {

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
        <div className='py-16'>
            <div className='shadow p-6 flex flex-col md:flex-row items-start'>
                <div className='flex  items-start gap-4'>
                    <div>
                        <img src={props.product.image} className='md:min-w-[550px] h-[440px] object-contain' alt="" />
                    </div>
                </div>
                <div className='p-4 md:p-12'>
                    <h2 className='fnt text-4xl font-semibold text-textBlue'>{props.product.title}</h2>
                    <span className='flex items-center fnt text-textBlue gap-2 py-2'>${props.product.price} <h6 className='text-my-pink line-through'>${props.product.price + 4}</h6></span>
                    <p className='text-my-subText fnt text-lg py-5 first-letter:uppercase'>{props.product.description}</p>
                    <div className='flex items-center gap-4 mb-4'>
                        <div className='shadow p-2 rounded-full text-[#535399] cursor-pointer' onClick={() => addToCart()}><LuShoppingCart size="20px" /></div>
                        <div className='shadow p-2 rounded-full text-[#535399] cursor-pointer' onClick={() => handleAddToFav()}>
                            {
                                favArray.find((item) => item.id == props.details.id) ? <IoMdHeart className="text-my-pink" size="20px" fontWeight="700" /> : <IoMdHeartEmpty size="20px" fontWeight="700" />
                            }
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h6 className='text-textBlue fnt text-base font-semibold'>Categories:</h6>
                        <span className='text-my-subText fnt text-lg'>{props.product.category}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPageCard