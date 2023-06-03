import React, { useEffect, useState } from 'react'
import Heading from '../Shared/Heading'
import MenuCard from '../Shared/MenuCard'
import useFetch from '../Hooks/useFetch'

const MenuSection = () => {
    const [data] = useFetch()
    const popularItems = data.filter(item => item.category === 'popular')

    // const [data,setData] = useState([])
    // useEffect(()=> {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setData(popularItems)
    //     })
    // },[])

  return (
    <div className='my-20'>
        <Heading head={"---- Check It Out ----"} sub={"From Our Menu"}></Heading>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 w-2/3 mx-auto my-10'>
            {
                popularItems.map((item,index) => <MenuCard
                key={index}
                data= {item}
                ></MenuCard>)
            }
        </div>
        <button className='btn btn-ghost border-b-2 border-black'>View Full Menu</button>
    </div>
  )
}

export default MenuSection