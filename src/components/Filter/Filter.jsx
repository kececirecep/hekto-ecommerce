import React from 'react'

const Filter = (props) => {
    return (
        <div className=''>
            <h2 className='text-textBlue fnt font-bold text-xl border-b border-textBlue inline-block'>{props.title}</h2>
            <form className='flex items-center gap-2'>
                <input type="checkbox" id="check" className={`w-[16px] h-[16px] ${props.className}`} />
                <label className='text-my-subText font-[400] py-4' for="check">{props.labelTitle}</label>
            </form>
        </div>
    )
}

export default Filter