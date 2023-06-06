import React from 'react'
import useCart from '../../Hooks/useCart'
import Heading from '../../Shared/Heading'
import { FaTrashAlt } from 'react-icons/fa'
import CartTableCard from './CartTableCard'

const MyCart = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className='overflow-x-auto md:px-52'>
            <div>
                <Heading head={'---My Cart---'} sub={"Welcome To Your Cart"}></Heading>
                <div className='my-20 bg-slate-300 '>
                    <div className='flex gap-10'>
                        <h1 className='text-2xl'>Total Orders : {cart?.length}</h1>
                        <h1 className='text-2xl'>Total Price : ${total}</h1>
                    </div>
                    <div className="">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    cart.map(item => <CartTableCard 
                                    key={item._id}
                                    data= {item}    
                                    ></CartTableCard>)
                                }
                            </tbody>
                            {/* foot */}


                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCart