import React from 'react'
import Card from './Card'

const PlaylistView = ({titleText}) => {
  return (
    <div className='text-white mt-8'>
        <div className='text-2xl font-semibold my-5'>{titleText}</div>

        <div className='w-full flex justify-between space-x-4'>
        <Card 
            title={"Peaceful Piano"}
            description={"Relax and indulge with beautiful piano pieces"}
            imgUrl={"https://images.unsplash.com/photo-1703426108384-f5f3f45de1aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
                <Card 
            title={"Peaceful Piano"}
            description={"Relax and indulge with beautiful piano pieces"}
            imgUrl={"https://images.unsplash.com/photo-1703426108384-f5f3f45de1aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

        />
                <Card 
            title={"Peaceful Piano"}
            description={"Relax and indulge with beautiful piano pieces"}
            imgUrl={"https://images.unsplash.com/photo-1703426108384-f5f3f45de1aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

        />
                <Card 
            title={"Peaceful Piano"}
            description={"Relax and indulge with beautiful piano pieces"}
            imgUrl={"https://images.unsplash.com/photo-1703426108384-f5f3f45de1aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

        />
                <Card 
            title={"Peaceful Piano"}
            description={"Relax and indulge with beautiful piano pieces"}
            imgUrl={"https://images.unsplash.com/photo-1703426108384-f5f3f45de1aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

        />

        <Card 
            title={"Peaceful Piano"}
            description={"Relax and indulge with beautiful piano pieces"}
            imgUrl={"https://images.unsplash.com/photo-1703426108384-f5f3f45de1aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

        />
        </div>

        
        
    </div>
  )
}

export default PlaylistView