import React from 'react'

const Card = ({title,description,imgUrl}) => {
  return (
    <div className='bg-black bg-opacity-40 w-full p-4 rounded-lg flex flex-col justify-center align-center cursor-pointer'>
         <div className='py-4'>
            <img className='rounded-md' alt="label image" src={imgUrl}/>
        </div>
        <div className='text-white font-semibold text-sm pb-2' >{title}</div>
        <div className='text-gray-500 text-sm'>{description}</div>
    </div>
  )
}

export default Card