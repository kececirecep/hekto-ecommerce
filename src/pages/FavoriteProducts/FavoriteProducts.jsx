import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Link } from 'react-router-dom'
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { addToFav, removeToFav } from '../../redux/favoriteSlice'


const FavoriteProducts = (props) => {

    const allFavItem = useSelector(state => state.favorite.favoriteArray)
    const dispacth = useDispatch()


    const handleDeleteToFav = (id) => {
        dispacth(removeToFav(id))
    }



    return (
        <div className=''>
            <HeaderBar />
            <Header />
            <Breadcrumbs
                title="Favorite Products" />

            <div className='container mx-auto'>
                {
                    allFavItem.length === 0 &&
                    <div className='mt-12'>
                        <h2 className='text-textBlue font-semibold fnt text-4xl mb-4'>Your Favorite List is Empty</h2>
                        <h6 className=''>Browse <Link to="/products"><span className='text-my-pink fnt font-semibold'>Products</span></Link> to Shop</h6>
                    </div>
                }
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-12'>
                    {
                        allFavItem.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col items-start justify-center shadow p-4 rounded-xl'>
                                    <Link to={`/product-details/${item.id}`}><img src={item.image} alt="" className='w-64 h-64 object-contain  ' /></Link>
                                    <Link to={`/product-details/${item.id}`}><h2 className='fnt font-semibold line-clamp-1 w-52 mt-4'>{item.title}</h2></Link>
                                    <div className='flex items-center justify-between w-full text-xl mt-2'>
                                        <span>${item.price || 0}</span>
                                        <div onClick={() => handleDeleteToFav(item.id)}><IoMdHeart className='text-my-pink cursor-pointer' size="20px" /></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default FavoriteProducts