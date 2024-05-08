import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <h2 className='fnt text-4xl font-bold text-textBlue pb-5'>Get In Touch</h2>
            <p className='text-base font-bold text-my-subText pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
            <form className='flex flex-col gap-12'>
                <div className='flex gap-8'>
                    <input type="text" placeholder='Your Name*' className='w-full px-6 py-3 outline-none border border-[#BFCCD8] rounded-md'/>
                    <input type="text" placeholder='Your Email*' className='w-full px-6 py-3 outline-none border border-[#BFCCD8] rounded-md'/>
                </div>
                <input type="text" placeholder='Subject*' className='w-full px-6 py-3 outline-none border border-[#BFCCD8] rounded-md'/>
                <textarea placeholder='Type Your Message' className='w-full h-40 leading-tight resize-none px-6 py-3 outline-none border border-[#BFCCD8] rounded-md'></textarea>
            </form>
        </div>

    );
};

export default ContactForm;
