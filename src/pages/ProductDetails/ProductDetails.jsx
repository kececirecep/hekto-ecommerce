import React, { useState } from 'react';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import Header from '../../components/Header/Header';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Brands from '../../Section/Home/Brands/Brands';
import Footer from '../../components/Footer/Footer';
import Trending from '../../Section/Home/Trending/Trending';
import TrendingProductCard from '../../components/ProductCards/TrendingProductCard';
import ProductPageCard from '../../components/ProductCards/ProductPageCard';

const ProductDetails = () => {
    const [productTab, setProductTab] = useState([
        {
            title: "Description",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sit est ullam explicabo quo eaque quae impedit et perspiciatis repudiandae!",
            statusCheck: true,
        }, {
            title: "Additional Info",
            text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sit est ullam explicabo quo eaque quae impedit et perspiciatis repudiandae!",
            statusCheck: false,
        }, {
            title: "Reviews",
            text: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sit est ullam explicabo quo eaque quae impedit et perspiciatis repudiandae!",
            statusCheck: false,
        }, {
            title: "Video",
            text: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sit est ullam explicabo quo eaque quae impedit et perspiciatis repudiandae!",
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

    return (
        <div>
            {/* <HeaderBar />
            <Header /> 
            <Breadcrumbs title="Product Details" />

            <div className='container mx-auto'>
                <ProductPageCard />
            </div>

            <div className='bg-[#F9F8FE]'>
                <div className='container mx-auto py-36'>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 pb-4 md:pb-12'>
                        {productTab.map((item, index) => (
                            <div key={index} className='cursor-pointer'>
                                <div onClick={() => tabClick(index)}>
                                    <h2 className='fnt text-textBlue text-2xl font-semibold'>{item.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        {productTab.map((item, index) => (
                            <div key={index} className=''>
                                {item.statusCheck && <div><p>{item.text}</p></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>*/}

            <div className="container mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    <TrendingProductCard />
                    <TrendingProductCard />
                    <TrendingProductCard /> 
                </div>
            </div>{/*  */}

            <Brands />
           {/*  <Footer /> */}
        </div>
    );
}

export default ProductDetails;
