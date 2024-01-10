import React from 'react'

const PassInput = ({label, placeholder, value,setValue}) => {
  return (
    <div className='textInputDiv flex flex-col space-y-2 w-full'>
        <label className='font-semibold'>{label}</label>
        <input  
        type='password' 
        placeholder={placeholder} 
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        className='p-2 border border-gray-400 rounded placeholder-gray-500'/>
    </div>
    )
}

export default PassInput