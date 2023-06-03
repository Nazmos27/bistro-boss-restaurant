import React from 'react'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import  { EffectCoverflow, Pagination  } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import './category.css'

// img importing

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import Heading from '../Shared/Heading';


const Category = () => {
  return (
    <div className='w-11/12 mx-auto my-20'>
      <Heading head={"----- From 11 am to 12 pm -----"} sub={"Order Online"}></Heading>
        <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,  
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide  >
          <img src={slide1} />
          <p className='md:text-4xl text-3xl text-white -top-40 relative uppercase'>Salad</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <p className='md:text-4xl text-3xl text-white -top-40 relative uppercase'>Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <p className='md:text-4xl text-3xl text-white -top-40 relative uppercase'>Soup</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <p className='md:text-4xl text-3xl text-white -top-40 relative uppercase'>Pastry</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <p className='md:text-4xl text-3xl text-white -top-40 relative uppercase'>Salad</p>
        </SwiperSlide>
        
      </Swiper>
    </>

    </div>
  )
}

export default Category