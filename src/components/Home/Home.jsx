import React, { useContext } from 'react'

import Hero from './Hero/Hero'
import Choices from './Body/Choices'
import ImgBody from './Body/ImgBody/ImgBody'
// import MyContext from '../../App'
const Home = () => {
    // const {images} = useContext(MyContext)

    // console.log(images)
  return (
    <>
        <Hero />
        <Choices />
        <ImgBody />
    </>
  )
}

export default Home
