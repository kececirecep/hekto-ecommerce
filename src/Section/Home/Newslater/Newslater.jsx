import React from 'react';
import Button from '../../../components/Button/Button';

const Newslater = () => {
    const divStyle = {
        backgroundImage: `url('/images/newslater/newslater.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center center',
        width: '100%', 
        padding:"75px 0px"
    };

    return (
        <div className="relative" style={divStyle}>
            <div className="absolute inset-0 z-0 bg-gray-300 opacity-50"></div>
            <div className="textDiv relative z-10 flex flex-col justify-center items-center container mx-auto ">
                <h1 className='text-4xl text-textBlue font-bold fnt text-center mb-12'>Get Leatest Update By Subscribe<br /> 0ur Newslater  </h1>
                <Button
                    className="bg-my-pink px-8 py-2 rounded text-white font-bold"
                    title="Shop Now"
                    link="/products" />
            </div>
        </div>
    );
};

export default Newslater;
