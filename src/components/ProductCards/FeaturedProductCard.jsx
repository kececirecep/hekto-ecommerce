import React from 'react'
import Button from '../Button/Button'
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router-dom'; 
import { addItemCart } from '../../redux/addToCart';
import { addToFav } from '../../redux/favoriteSlice';
import { useDispatch, useSelector } from 'react-redux';

const FeaturedProductCard = (props) => {

    const dispacth = useDispatch()

    const favArray = useSelector((state) => state.favorite.favoriteArray)


    const addToCart = () => {
        dispacth(addItemCart({
            id: props.allProduct.id,
            title: props.allProduct.title,
            description: props.allProduct.description,
            category: props.allProduct.category,
            price: props.allProduct.price,
            image: props.allProduct.image,
            adet: 1,
        }))
    }

    const handleAddToFav = () => {
        dispacth(addToFav({
            id: props.allProduct.id,
            title: props.allProduct.title,
            image: props.allProduct.image,
            price: props.allProduct.price
        }))
    }


    return (
        <div key={props.key} className='w-full shadow my-12 group hover:bg-productHover duration-150'>
            <div className='flex flex-col justify-center items-center bg-white p-10 relative'>
                <div className='flex items-center gap-4 opacity-0 group-hover:opacity-100 duration-150 absolute top-4 left-4'>

                    <Link to="#" className='bg-[#EEEFFB] p-2 rounded-full text-my-purple' onClick={() => addToCart()}><LuShoppingCart size="22px" /></Link>
                    <Link to="#" className='bg-[#EEEFFB] p-2 rounded-full text-my-pink' onClick={() => handleAddToFav()}>
                        {
                            favArray.find((item) => item.id == props.allProduct.id) ? <IoMdHeart className="text-my-pink" size="22px" fontWeight="700" /> : <IoMdHeartEmpty size="22px" fontWeight="700" />
                        }
                    </Link>
                </div>
                <img src={props.allProduct.image} className=" w-[178px] h-[178px] object-cover mb-8" alt="" />
                <div>
                    <Button
                        className="bg-[#08D15F] rounded px-3 py-2 text-white opacity-0 group-hover:opacity-100 duration-150"
                        title="View Details"
                        link={`/product-details/${props.allProduct.id}`} />
                </div>
            </div>
            <div className='border-t border-gray-200 flex flex-col items-center py-4'>
                <Link to={`/product-details/${props.allProduct.id}`} className='font-bold text-xl -tracking-tight text-textBlue group-hover:text-white line-clamp-1 text-center px-2'>{props.allProduct.title}</Link>
                <h6 className='text-gray-500 text-lg font-[600] text-md group-hover:text-white'>${props.allProduct.price}</h6>
            </div>
        </div >
    )
}

export default FeaturedProductCard