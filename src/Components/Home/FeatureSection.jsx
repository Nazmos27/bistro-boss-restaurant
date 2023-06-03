import React from 'react'
import featureImg from '../../assets/home/featured.jpg'
import Heading from '../Shared/Heading'
const FeatureSection = () => {
  return (
    <div className=' md:flex md:flex-col md:mx-20 bg-cover h-[500px] bg-no-repeat bg-fixed' style={{backgroundImage:`url(${featureImg})`}}>
        <Heading head={"---Check It Out---"} sub={"From Our Menu"}></Heading>
        <div className='md:flex md:justify-center md:items-center md:mx-40 md:my-4 my-2 gap-10  bg-slate-400 bg-opacity-30'>
            <img className='h-56 w-80' src={featureImg} alt="" />
            <div className='text-left md:space-y-2 text-white'>
                <p className='font-semibold'>March 20,2023</p>
                <h1 className='text-2xl'>Where Can I Get Some?</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ratione aperiam nesciunt quis quisquam aut accusantium ducimus voluptatibus incidunt nulla.</p>
                <button className='btn border-2 border-b-gray-500'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default FeatureSection