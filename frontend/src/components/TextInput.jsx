import React from 'react'

const TextInput = ({label, placeholder,className,value,setValue,labelClassName}) => {
  return (
    <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
        <label className={`font-semibold ${labelClassName}`}>{label}</label>
        <input  
        type='text' 
        placeholder={placeholder} 
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        className='p-2 border border-gray-400 rounded placeholder-gray-500'
        />
    </div>
    )
}

export default TextInput