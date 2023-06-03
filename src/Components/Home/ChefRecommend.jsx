import React from 'react'
import Heading from '../Shared/Heading'
import cardImg from '../../assets/menu/dessert-bg.jpeg'

const ChefRecommend = () => {
    return (
        <div className='mx-auto my-20'>
            <Heading head={"----Should Try----"} sub={"Chef Recommends"}></Heading>
            <div className='md:grid md:grid-cols-3 mx-20 gap-6'>
                <div className="card  h-[450px] bg-base-100 shadow-xl">
                    <figure><img src={cardImg} alt="Shoes" /></figure>
                    <div className="my-10 text-left">
                        <h2 className="card-title">Delicious Desert</h2>
                        <p className=''>Sugar,Flour,Butter,Egg,Honey,Fruits,Nuts, <br /> Oil,Vanila extract etc...</p>
                        <div className=" card-actions justify-center">
                            <button className="btn btn-ghost  border-2 border-b-gray-600 absolute bottom-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card   h-[450px] bg-base-100 shadow-xl">
                    <figure><img src={cardImg} alt="Shoes" /></figure>
                    <div className=" text-left my-10 ">
                        <h2 className="card-title">Delicious Desert</h2>
                        <p className=''>Sugar,Flour,Butter,Egg,Honey,Fruits,Nuts, <br /> Oil,Vanila extract etc...</p>
                        <div className="card-actions justify-center ">
                            <button className="btn btn-ghost  border-2 border-b-gray-600 absolute bottom-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card   h-[450px] bg-base-100 shadow-xl">
                    <figure><img src={cardImg} alt="Shoes" /></figure>
                    <div className="my-10 text-left">
                        <h2 className="card-title">Delicious Desert</h2>
                        <p className=''>Sugar,Flour,Butter,Egg,Honey,Fruits,Nuts, <br /> Oil,Vanila extract etc...</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-ghost  border-2 border-b-gray-600 absolute bottom-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ChefRecommend