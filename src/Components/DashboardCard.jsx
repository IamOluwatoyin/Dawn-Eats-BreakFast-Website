import React from 'react'
import { exploreCards } from '../utils'
import "./DashboardCard.css"

const DashboardCard = () => {
  return (
   <div className='card-wrapper'>
  <div className='card-container'>
    {exploreCards.map((item) => (
      <div key={item.id} className='img-content-holder'>
        
        
        <div className='image-holder'>
          <img src={item.image} className='img' alt={item.name}/>
        </div>

        
        <div className='text-holder'>
          <p>{item.name}</p>
        </div>

      </div>
    ))}
  </div>
</div>

  )
}

export default DashboardCard
