import React from 'react'
import Button from '../Button/Button'
import { RiQuillPenLine } from "react-icons/ri";
import { BsCalendar2Date } from "react-icons/bs";

const BlogCard = (props) => {
    const writeIcon = {
        color: "#FB2E86"
    }
    const dateIcon = {
        color: "#FFA454"
    }

    return (
        <div className='w-full'>
            <div className='shadow rounded-lg group'>
                <img src="/images/blog/blog.png" className='w-full rounded-md' alt="" />
                <div className='py-8 px-4'>
                    <div className='flex items-center gap-8'>
                        <span className='flex items-center gap-2'><RiQuillPenLine style={writeIcon} />SaberAli</span>
                        <span className='flex items-center gap-2'><BsCalendar2Date style={dateIcon} />21 August,2020</span>
                    </div>
                    <h2 className='text-textBlue fnt font-bold text-lg py-4 group-hover:text-my-pink'>Top esssential Trends in 2021</h2>
                    <p className='text-[#72718F] font-[400] mb-4'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                    <Button
                        className="bg-transparent font-bold text-base group-hover:text-my-pink border-b border-textBlue group-hover:border-my-pink  "
                        title="Read More" />
                </div>
            </div>
        </div >
    )
}

export default BlogCard