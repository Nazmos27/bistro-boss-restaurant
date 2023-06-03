import React from 'react'
import Banner from './Banner'
import Category from './Category'
import BistroSection from './BistroSection'
import MenuSection from './MenuSection'
import ChefRecommend from './ChefRecommend'
import FeatureSection from './FeatureSection'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <BistroSection></BistroSection>
        <MenuSection></MenuSection>
        <ChefRecommend></ChefRecommend>
        <FeatureSection></FeatureSection>
    </div>
  )
}

export default Home