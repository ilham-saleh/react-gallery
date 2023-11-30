import React from 'react'

import { IoCamera } from "react-icons/io5";
import { FaPenFancy } from "react-icons/fa";
import { FaPenNib, FaV } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const Explore = () => {
  return (
    <div className="explore-content">
    <div className="explore-grid">
      <div className='explore-cell'>
        <h4 className='explore-content-header'>Media</h4>
        <div className="explore-cell-content">
          <div><IoCamera /></div>
          Photos
        </div>
        <div className="explore-cell-content">
          <div><FaPenFancy /></div>
          Illustrations
        </div>
        <div className="explore-cell-content">
          <div><FaPenNib /></div>
          Vectors
        </div>
        <div className="explore-cell-content">
          <div><FaVideo /></div>
          Videos
        </div>
        <div className="explore-cell-content">
          <div><FaMusic /></div>
          Music
        </div>
      </div>
      <div className='explore-cell'>
        <h4 className='explore-content-header'>Discover</h4>
        <div className="explore-cell-content">
          Editor's Choice
        </div>
        <div className="explore-cell-content">
          Curated Collections
        </div>
        <div className="explore-cell-content">
          Pixabay Radio
        </div>
        <div className="explore-cell-content">
          Popular Images
        </div>
      </div>
      <div className='explore-cell'>
        <h4 className='explore-content-header'>Community</h4>
        <div className="explore-cell-content">
          Creators
        </div>
        <div className="explore-cell-content">
          Blog
        </div>
        <div className="explore-cell-content">
          Cameras
        </div>
      </div>
      <div className='explore-cell'>
        <h4 className='explore-content-header'>About</h4>
        <div className="explore-cell-content">
          About Us
        </div>
        <div className="explore-cell-content">
          FAQ
        </div>
        <div className="explore-cell-content">
          Terms of Service
        </div>
        <div className="explore-cell-content">
          Privacy Policy
        </div>
        <div className="explore-cell-content">
          Cookies Policy
        </div>
      </div>
    </div>

    <div className="explore-footer">
      <div className=""><FaFacebook /></div>
      <div className=""><FaInstagram /></div>
      <div className=""><FaTwitter /></div>
      <div className=""><FaPinterest /></div>
    </div>
  </div>
  )
}

export default Explore