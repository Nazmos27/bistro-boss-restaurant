import React from 'react'

const MenuCard = ({data}) => {
    const {_id,image,recipe,category,price,name} = data
  return (
    <div className='flex items-center'>
        <img className='md:h-14 md:w-14 h-10 w-10 rounded-b-full rounded-tr-full' src={image} alt="" />
        <div className='text-left'>
        <h2 className='md:text-xl text-sm text-gray-600'>{name}</h2>
        <p className='md:text-sm text-xs'>{recipe}</p>
        </div>
        <h3 className='text-xl'>${price}</h3>
    </div>
  )
}

export default MenuCard