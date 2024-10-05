import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
            <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">  
            <img src={assets.contact_img} alt="" className="w-full md:max-w-[480px]" />
            <div className="flex flex-col justify-center items-start gap-6">
                <p className='font-semibold text-xl'>Our Store</p>
                <p className='text-gray-500 '> 54709 Williams Station <br /> Suite 350, Washington, USA</p>
                <p className='text-gray-500'> Tel: (+234) 000 000 <br /> Email:abubakarsholly002@gmail.com</p>
                <p className=' font-semibold text-xl text-gray-600'>Careers at Forever</p>
                <p className='  text-gray-600'>Learn more about our teams and job openings.</p>
                <button className=" border border-black hover:bg-black px-8 py-4 text-sm hover:text-white transition-all duration-500"> Explore Jobs</button>
            </div>
      </div>

      <Newsletter/>
    </div>
  )
}

export default Contact