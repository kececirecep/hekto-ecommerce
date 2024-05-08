import React from 'react';
import Button from '../../../components/Button/Button';

const Newslater = () => {
    const divStyle = {
        backgroundImage: `url('/images/newslater/newslater.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '300px',
    };

    return (
        <div className="relative" style={divStyle}>
            <div className="absolute inset-0 z-0 bg-gray-300 opacity-50"></div>
            <div className="textDiv relative z-10 flex flex-col justify-center items-center container mx-auto ">
                <h1 className='text-4xl text-textBlue font-bold fnt text-center mt-20 pb-12'>Get Leatest Update By Subscribe<br /> 0ur Newslater  </h1>
                <Button
                    className="bg-my-pink px-8 py-2 rounded text-white font-bold"
                    title="Shop Now" />
            </div>
        </div>
    );
};

export default Newslater;
