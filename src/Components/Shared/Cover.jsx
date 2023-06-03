import React from 'react'


const Cover = ({title,description,img}) => {
  return (
    <div>
        <div className="hero h-[500px]" style={{ backgroundImage: `url(${img})` }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5 md:text-3xl">{description}</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Cover