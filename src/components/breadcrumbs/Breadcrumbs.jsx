import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { GoAlert } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Breadcrumbs = (props) => {
    return (
        <div className='py-36 bg-[#F6F5FF]'>
            <div className="container mx-auto">
                <h2 className='fnt text-4xl text-textBlue font-bold pb-2'>{props.title}</h2>
                <ul className='flex items-center text-black gap-2 text-xl'>
                    <Link><li>Home</li></Link>
                    <Link><li>. Pages</li></Link>
                    <Link><li className='text-my-pink'>. {props.title}</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumbs