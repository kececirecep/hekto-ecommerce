import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";


const CartTotal = (props) => {
    return (
        <div className='p-4 w-full'>
            <div className=''>
                <h2 className='fnt font-bold text-textBlue text-xl text-center mb-6'>Cart Totals</h2>
                <div className='p-4 bg-[#F4F4FC] shadow'>
                    <div className='flex items-center justify-between p-4 border-b border-my-subText text-lg font-semibold text-textBlue'>
                        <h4>Totals:</h4>
                        <span className=''>${props.total || 0}</span>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                {
                    props.length >= 1 && <button
                        className='bg-my-pink text-white max-w-max px-4 py-2 rounded flex items-center gap-2 mb-12'
                        onClick={props.onClick}><FaRegTrashAlt /> All Clear</button>
                }
            </div>
        </div>
    )
}

export default CartTotal