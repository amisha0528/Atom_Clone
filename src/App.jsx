import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Middle from './components/Middle'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
function App() {

  return (
    <div className=" ">
      <div className=" bg-fixed block bg-contain  md:bg-cover h-screen  bg-moonbg bg-no-repeat">
        <Navbar></Navbar>
        <Middle></Middle>
      </div>
      <Footer></Footer>
      <Footer2></Footer2>
    </div>
  )
}

export default App
