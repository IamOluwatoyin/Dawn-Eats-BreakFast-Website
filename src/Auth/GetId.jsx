import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetId = () => {
  const [userData, setUserData] = useState()
  const BaseUrl = import.meta.env.VITE_BaseUrl
  
  const UserId = async () =>{

    try{
      const id = (localStorage.getItem("userId"))
     
      const res = await axios.get(`${BaseUrl}/users/${id}`)
      setUserData(res.data.data)
      console.log(res.data.data)

    }catch(err){
      console.log('not working', err)
    }
  }
  useEffect(()=>{
    UserId()
  },[])
  return (
    <div>
      {userData ? (
        <div style={{display:"flex", gap:"5px"}}>
          <h4 style={{textTransform:"capitalize"}}>{userData.firstName}</h4>
          <h4 style={{textTransform:"capitalize"}}>{userData.lastName}</h4>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default GetId
