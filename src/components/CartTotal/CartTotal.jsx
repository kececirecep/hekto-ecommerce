import React from 'react'

const CartTotal = () => {
    return (
        <div className='p-4 w-full'>
            <h2 className='fnt font-bold text-textBlue text-xl text-center pb-6'>Cart Totals</h2>
            <div className='p-4 bg-[#F4F4FC]'>
                <div className='flex items-center justify-between p-4 border-b border-my-subText text-lg font-medium text-textBlue'>
                    <h4>Subtotals:</h4>
                    <span>£219.00</span>
                </div>
                <div className='flex items-center justify-between p-4 border-b border-my-subText text-lg font-medium text-textBlue'>
                    <h4>Totals:</h4>
                    <span>£219.00</span>
                </div>
            </div>
        </div>
    )
}

export default CartTotal