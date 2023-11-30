import React, { useContext, useState } from 'react'
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { SiPixiv } from "react-icons/si"; 
import Search from './Search'
import Header from '../../Header';

// import { MyContext } from '../../../App';

import './Hero.css'
import Explore from './Explore';

const Hero = () => {
  // const {setTerm} = useContext(MyContext)

  const [showExplore, setShowExplore] = useState(false)

  return (
    <section className='hero'>
      {/* <div className="hero-header">
        <SiPixiv className='logo' />
        <div className="hero-header-left">
          <div className="explore" onClick={() => setShowExplore(!showExplore)}>
            <h5>Explore <span><IoIosArrowDown /></span></h5>
          </div>
          <FaBell />
          <button className='hero-btn'><span><MdOutlineFileUpload className='upload-icon'/></span> Upload</button>
        </div>
      </div> */}
      <Header setShowExplore={setShowExplore} showExplore={showExplore} />
      <div className="hero-body">
        <div className="hero-content">
          <h2 className='hero-title'>Stunning royalty-free images & royalty-free stock</h2>
          <p>Over 4.2 million+ high quality stock images, videos and music shared by our talented community.</p>
        </div>
        <Search />
      </div>
          {showExplore && (
           <Explore />
          )}
    </section>
  )
}

export default Hero