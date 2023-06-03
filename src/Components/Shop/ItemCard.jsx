import React from 'react'

const ItemCard = ({data}) => {
    return (
        <div>
            <div className="card w-84 h-[450px] bg-base-100 shadow-xl">
                <figure><img src={data.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard