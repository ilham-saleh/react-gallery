import React, {useState, useEffect} from 'react'
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { SiPixiv } from "react-icons/si"; 

import Search from './Home/Hero/Search';

import { useNavigate } from 'react-router-dom';



const Header = ({ showExplore, setShowExplore}) => {

  const navigate = useNavigate()


  return ( 
 <div className="hero-header">
    <div className='hero-header-left'>
        <SiPixiv className='logo' onClick={() => navigate('/')}/>
        <Search />
    </div>
    <div className="hero-header-left">
      <div className="explore" onClick={() => setShowExplore(!showExplore)}>
        <h5>Explore <span><IoIosArrowDown /></span></h5>
      </div>
      <FaBell />
      <button className='hero-btn'><span><MdOutlineFileUpload className='upload-icon'/></span> Upload</button>
    </div>
  </div>
  )
}

export default Header