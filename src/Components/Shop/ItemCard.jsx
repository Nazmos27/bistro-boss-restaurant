import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../Hooks/useCart';



const ItemCard = ({data}) => {
    const {_id,image,name,price} = data
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [,refetch] = useCart()

    const handleCart = (data) => {
        
        console.log(data);
        if(user && user.email){
            const cartItem = {foodId : _id , name, image, price,email:user.email }
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      
                }
            } )
        }else{
            Swal.fire({
                title: 'Please Log In!',
                text: "You Have To Login First To Add Item On Cart!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log In'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state : { from : location }})
                }
              })
        }

    }

    return (
        <div>
            <div className="card w-84 h-[450px] bg-base-100 shadow-xl">
                <figure><img src={data.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleCart(data)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard