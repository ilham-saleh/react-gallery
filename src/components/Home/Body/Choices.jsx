import React, { useContext, useState } from 'react'
import {MyContext} from '../../../App'
import './Body.css'

import { Link, NavLink } from "react-router-dom";

// const getLocalStorageChoice = () => {
//   let nature = localStorage.getItem('nature')

//   if (localStorage.getItem('nature')){
//     nature = localStorage.getItem('nature')
//   }

//   return 'nature' 
// }

const Choices = () => {
    const {setTerm} = useContext(MyContext)
    // const [nature, setNature] = useState(getLocalStorageChoice())

    // console.log(images)
  return (
    <section className='choices'>
      <button className='button term-btn' onClick={() => setTerm('nature')}>Nature</button>
      <button className='button term-btn' onClick={() => setTerm('wallpaper')}>Wallpaper</button>
      <button className='button term-btn' onClick={() => setTerm('background')}>Background</button>
      <button className='button term-btn' onClick={() => setTerm('sky')}>Sky</button>
      <button className='button term-btn' onClick={() => setTerm('cat')}>Cat</button>
      <button className='button term-btn' onClick={() => setTerm('food')}>Food</button>
      <button className='button term-btn' onClick={() => setTerm('flowers')}>Flowers</button>
      <button className='button term-btn' onClick={() => setTerm('winter')}>Winter</button>
    </section>
  )
}

export default Choices