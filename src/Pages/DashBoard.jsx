import React from 'react'
import Footer from '../Components/Footer'
import Header from './Header'
import DashboardCard from '../Components/DashboardCard'
import { exploreCards } from '../utils'
import "./DashBoard.css"

const DashBoard = () => {
  return (
    <div className='content-holder'> 
      <Header/>
      <div className='content-container' >
       <h1>Explore Menu</h1>
       <DashboardCard/>
       <section className='section2-holder'>
        <div className='image1holder'>
         <p style={{color:"white", fontWeight:"400", fontSize:"40px",  left:"10%", position:"absolute"}}>Get any <br/> breakfast of<br/> your choice</p>
        </div>
        <div className='image1holder2'> 
         <p style={{color:"white", fontWeight:"400", fontSize:"40px", left:"10%", position:"absolute"}}> Delivered to <br/>anywhere within <br/> your location</p>
        </div>
       </section>

       <section className='section2-holder'>
        <h1>Restaurants</h1>
        <div className='image1holder'>
         <p style={{color:"white", fontWeight:"400", fontSize:"40px",  left:"10%", position:"absolute"}}>Get any <br/> breakfast of<br/> your choice</p>
        </div>
        <div className='image1holder2'> 
         <p style={{color:"white", fontWeight:"400", fontSize:"40px", left:"10%", position:"absolute"}}> Delivered to <br/>anywhere within <br/> your location</p>
        </div>
       </section>
      </div>
      
      
      <Footer />
    </div>
  )
}

export default DashBoard
