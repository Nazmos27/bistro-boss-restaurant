import React from 'react'
import Cover from '../Shared/Cover'
import banner from '../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import useFetch from '../Hooks/useFetch';
import ItemCard from './ItemCard';


const OurShop = () => {

  const [data] = useFetch()
  const desertItem = data.filter(item => item.category === 'dessert')
  const pizzaItem = data.filter(item => item.category === 'pizza')
  const saladItem = data.filter(item => item.category === 'salad')
  const soupsItem = data.filter(item => item.category === 'soup')
  const drinksItem = data.filter(item => item.category === 'drinks')



  return (
    <div>
      <Cover
        img={banner}
        title={"Our Shop"}
        description={"Welcome To Our Shop,Eat What You Want!"}
      ></Cover>
      <div>
        <Tabs>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desert</Tab>
            <Tab>Drink</Tab>
          </TabList>

          <TabPanel>
          <div className='md:grid md:grid-cols-3 md:gap-10 md:mx-10 md:my-20'>
              {
                saladItem.map(item => <ItemCard data={item}></ItemCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
          <div className='md:grid md:grid-cols-3 md:gap-10 md:mx-10 md:my-20'>
              {
                pizzaItem.map(item => <ItemCard data={item}></ItemCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
          <div className='md:grid md:grid-cols-3 md:gap-10 md:mx-10 md:my-20'>
              {
                soupsItem.map(item => <ItemCard data={item}></ItemCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className='md:grid md:grid-cols-3 md:gap-10 md:mx-10 md:my-20'>
              {
                desertItem.map(item => <ItemCard data={item}></ItemCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
          <div className='md:grid md:grid-cols-3 md:gap-10 md:mx-10 md:my-20'>
              {
                drinksItem.map(item => <ItemCard data={item}></ItemCard>)
              }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default OurShop