import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'

const IconText = ({iconName, displayText, active, targetPath,onClick}) => {
  return (
    <Link to={targetPath}>
    <div className='flex items-center justify-start cursor-pointer' onClick={onClick}>
        <div className='px-5 py-2'>
            <Icon icon={iconName} color={active?"white":"gray"} fontSize={25}/>
        </div>
        <div className={`${active?"text-white":"text-gray-400"} text-sm font-semibold hover:text-white`}>
            {displayText}
        </div>
    </div>
    </Link>
  )
}

export default IconText