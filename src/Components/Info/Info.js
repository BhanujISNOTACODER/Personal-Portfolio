import React from 'react'
import Hero from "../../Assets/Images/img1.jpg" 
import'./info.css'
const Info = () => {
  return (
    <div className='bg-dark'>
      <div className="container details">
        <img src={Hero} width="400" height="400" className="img-fluid profile-pic" alt="Img" />
        <p id="about-text">Hola, My name is Bhanuj Sharma and I am a third year CSE student. I love to code, and my interest lies in Web Dev, CP, Game Dev and AI. I have worked on several projects in all of the above domains. I continously look to upskill myself and learn new things. </p>
      </div>
    </div>
  )
}

export default Info
