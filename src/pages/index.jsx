import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Info from '../components/Info'
import { homeObjOne, homeObjTwo, homeObjThree,homeObjFour} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Display from '../components/Display';
import Sidebar from '../components/SideBar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...homeObjTwo}/>
      <Info {...homeObjOne}/>
      <Display/>
      <Info {...homeObjThree}/>
      <Info {...homeObjFour}/>
      <Footer />
    </>
  )
}

export default Home
