import React from 'react'

const TextwithHover = ({text}) => {
  return (
    <div className='text-gray-300 hover:text-white font-semibold text-lg cursor-pointer'>{text}</div>
  )
}

export default TextwithHover