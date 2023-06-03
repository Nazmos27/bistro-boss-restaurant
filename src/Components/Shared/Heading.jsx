import React from 'react'

const Heading = ({head,sub}) => {
  return (
    <div>
        <p className='text-orange-600 md:my-4 my-2'>{head}</p>
        <hr className='border-2 border-gray-400 w-60 mx-auto'/>
        <h1 className='md:my-6 my-3 md:text-3xl text-2xl'>{sub}</h1>
        <hr className='border-2 border-gray-400 w-60 mx-auto'/>

    </div>
  )
}

export default Heading