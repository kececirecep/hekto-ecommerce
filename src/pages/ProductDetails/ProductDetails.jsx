import React, { useState, useEffect } from 'react';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import Header from '../../components/Header/Header';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Footer from '../../components/Footer/Footer';
import ProductPageCard from '../../components/ProductCards/ProductPageCard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductId } from '../../redux/getProductId';


import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import '../../../node_modules/react-loading-skeleton/dist/skeleton.css'

const ProductDetails = () => {
    const { id } = useParams();

    const dispacth = useDispatch()
    const products = useSelector((state) => state.getProductId)

    const [productTab, setProductTab] = useState([
        {
            title: "Description",
            text: "xx",
            statusCheck: true,
        }, {
            title: "Additional Info",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi veritatis aut cum minus debitis, facilis iusto fugiat enim fugit quod.",
            statusCheck: false,
        }, {
            title: "Reviews",
            text: "Necessitatibus nam cum, alias possimus reiciendis cupiditate ex provident quo odit.",
            statusCheck: false,
        }, {
            title: "Video",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptates provident numquam saepe! Repellat, maxime tempore voluptatibus rem animi cum saepe veniam pariatur voluptas alias dicta vel nulla beatae amet accusantium. Numquam facere distinctio tempore placeat, voluptates voluptatem repudiandae quibusdam deserunt provident maiores atque natus necessitatibus dolor modi, laudantium doloremque est? Dicta quos obcaecati dignissimos illo ipsam sapiente eos quidem.",
            statusCheck: false,
        },
    ]);
    const tabClick = (index) => {
        const updatedTabs = productTab.map((tab, i) => {
            if (i === index) {
                return { ...tab, statusCheck: true };
            } else {
                return { ...tab, statusCheck: false };
            }
        });
        setProductTab(updatedTabs);
    };
    useEffect(() => {
        dispacth(getProductId(id))
    }, [])

    

    return (
        <div>
            <HeaderBar />
            <Header />
            <Breadcrumbs title="Product Details" />

            <div className='container mx-auto'>
                {
                    products.loading ? <SkeletonTheme baseColor="#dfdede" highlightColor="#6b6b6b" >
                        <p className='py-24'>
                            <Skeleton count={5} className='my-2' />
                        </p>
                    </SkeletonTheme> : <ProductPageCard product={products.data} loading={products.loading} details={products.data} />
                }
            </div>

            <div className='bg-[#F9F8FE]'>
                <div className='container mx-auto py-36'>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 pb-4 md:pb-12'>
                        {productTab.map((item, index) => (
                            <div key={index} className={`cursor-pointer border-b-2 border-transparent ${item.statusCheck && "border-b-2 border-my-pink"}`}>
                                <div onClick={() => tabClick(index)}>
                                    <h2 className='fnt text-textBlue text-2xl font-semibold'>{item.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        {productTab.map((item, index) => (
                            <div key={index} className=''>
                                {item.statusCheck && <div><p>{index == 0 ? products.data.description : item.text}</p></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ProductDetails;
