import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const CartTableCard = ({data}) => {
    const {_id,image,name,price} = data
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    
                </div>
            </td>
            <td>
                {name}        
            </td>
            <td>{price}</td>
            <th>
                <button className="btn bg-red-600 btn-sm"> <FaTrashAlt></FaTrashAlt> </button>
            </th>
        </tr>

    )
}

export default CartTableCard