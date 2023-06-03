import React from 'react' 
import bgimg from '../../assets/home/chef-service.jpg'

const BistroSection = () => {
  return (
    <div className='md:h-80 h-64 md:bg-cover bg-cover bg-center bg-no-repeat md:mx-auto md:w-2/3 relative' style={{backgroundImage : `url(${bgimg})`}}>
        <div className='bg-white md:h-48 h-44 w-2/3 md:mx-36 mx-16 top-10 md:top-0  left-auto md:my-20 absolute'>
            <h1 className='text-xl my-2 md:mt-10'>Bistro Boss</h1>
            <p className='text-xs px-4 md:px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim, reiciendis dicta voluptate nisi sequi ea praesentium expedita consectetur soluta eos rerum unde? Amet ad aspernatur qui saepe aliquam? Nulla!</p>
        </div>
    </div>
  )
}

export default BistroSection