import React from 'react'
import Header from "../../Components/Header/Header"
import Info from '../../Components/Info/Info'
import Contact from '../../Components/Contact/Contact'
import './Home.css'

function Home() {
  return (
    <>
    <div className='bg-dark' id="HomePage">
        <Header/>
        <Info/>
        <Contact />
    </div>
    </>
  )
}

export default Home