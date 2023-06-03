import React, { useEffect, useState } from 'react'
import Cover from '../Shared/Cover'
import Heading from '../Shared/Heading'
import MenuCard from '../Shared/MenuCard'

// impoting image for menu page

import banner from '../../assets/menu/banner3.jpg'
import desertImg from '../../assets/menu/dessert-bg.jpeg' 
import pizzaImg from '../../assets/menu/pizza-bg.jpg' 
import saladImg from '../../assets/menu/salad-bg.jpg' 
import soupsImg from '../../assets/menu/soup-bg.jpg' 
import useFetch from '../Hooks/useFetch'

const Menu = () => {
    const [data] = useFetch()
    const offered = data.filter(item => item.category ==='offered')
    const desertItem = data.filter(item => item.category === 'dessert')
    const pizzaItem = data.filter(item => item.category==='pizza')
    const saladItem = data.filter(item => item.category === 'salad')
    const soupsItem = data.filter(item => item.category==='soup')
  return (
    <div>
        <Cover 
        title= {"Our Menu"} 
        description={"Would you like to try a dish"} 
        img={banner}
        ></Cover>
        <Heading head = {"---Don't Miss---"} sub={"Today's Offer"}></Heading>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 w-2/3 mx-auto my-10'>
            {
                offered.map(item => <MenuCard
                data={item}
                key={item._id}
                ></MenuCard>)
            }
        </div>
        <button className='btn btn-accent text-white md:mb-20'>Order Your Favorite Food</button>
        <Cover 
        title= {"Deserts"} 
        description={"Taste some desert from'Heaven',not actually but bet you will say so!"} 
        img={desertImg}
        ></Cover>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 w-2/3 mx-auto my-10'>
            {
                desertItem.map(item => <MenuCard
                data={item}
                key={item._id}
                ></MenuCard>)
            }
        </div>
        <Cover 
        title= {"Pizzas"} 
        description={"Would you like to try a world class Pizza?"} 
        img={pizzaImg}
        ></Cover>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 w-2/3 mx-auto my-10'>
            {
                pizzaItem.map(item => <MenuCard
                data={item}
                key={item._id}
                ></MenuCard>)
            }
        </div>
        <Cover 
        title= {"Salads"} 
        description={"have some unique salad,try some healthy!"} 
        img={saladImg}
        ></Cover>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 w-2/3 mx-auto my-10'>
            {
                saladItem.map(item => <MenuCard
                data={item}
                key={item._id}
                ></MenuCard>)
            }
        </div>
        <Cover 
        title= {"Soups"} 
        description={"Have a look at our Finest soups collection"} 
        img={soupsImg}
        ></Cover>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 w-2/3 mx-auto my-10'>
            {
                soupsItem.map(item => <MenuCard
                data={item}
                key={item._id}
                ></MenuCard>)
            }
        </div>

    </div>
  )
}

export default Menu