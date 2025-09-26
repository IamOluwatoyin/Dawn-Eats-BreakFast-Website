import React, { useEffect, useState } from 'react'
import "./LandingPage.css"

const LandingPage = () => {

  const Content =[
    {
      h1: "Your morning, your \nway ",
      span: "Choose from local favourites or healthy picks, delivered fresh to your door"
    },

     {
      h1: "Start your day right",
      span:"Fresh healthy breakfasts delivered every morning"
    },

    {
      h1: "No more skipped \nbreakfasts",
      span: "Order in seconds, enjoy in minutes. simple fast and reliable"
    }
   
  ]
  const [textIndex, setTextIndex] = useState(0)

  useEffect(()=>{
    const timer = setInterval(()=>{
      setTextIndex((prevtextIndex)=>(prevtextIndex+1)%Content.length)
    },3000)
    return ()=>clearInterval(timer)
  },[])

  return (
    <div className='general-wrapper'>
    <div className='LandingPage-Wrapper'>
      <section className='LandingPage-container'>
        <div>
          <img src='/Images/DawnEatsLogo.jpg' alt='logo' />
          
        </div>
        <div className='button-div'>
          <button className='SignUp-btn'>Sign Up</button>
          <button className='login-btn'>Sign In</button>
        </div>
      </section>

       <article className='Img-Content-section'>
        <div className='Text-content'>
          {Content.map((item, i)=>(
            <div
             key={i}
             style={{display: i === textIndex ? "block" : "none", transition:"opacity 0.5s ease-in-out"}}
             >
              <h1 style={{fontWeight: "bolder",
         fontSize: "80px", paddingBottom:"20px",
        whiteSpace:"pre-line"}}>{item.h1}</h1>
              <span  style={{ fontSize: "30px"}}>{item.span}</span>
            </div>
          ))}
          
        </div>
        </article>
    </div>
    <section className='Restaurant-section'>
          <h1>Top Restaurant in DawnEats</h1>
          <div className='Restaurant-image-holder'>
            <img src="/Images/restaurant1.jpg" alt="" className='restaurant-img-container' />
            <span className='img-text'>The Dines</span>
            <img src="/Images/restaurant2.jpg" alt="" className='restaurant-img-container'/>
            <span>The Cafe</span>
            <img src="/Images/restaurant3.jpg" alt=""className='restaurant-img-container' />
            <span>The Place</span>
          </div>
        </section>
    </div>
  )
}

export default LandingPage
