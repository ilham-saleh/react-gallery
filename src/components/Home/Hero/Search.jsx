import React, { useState,useContext } from 'react'
import { MyContext } from '../../../App';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from "react-icons/fi";

import './Hero.css'

// const getLocalStorageTerm = () => {
//   let term = localStorage.getItem('term')

//   if (localStorage.getItem('term')){
//     term = localStorage.getItem('term')
//   }

//    return term || ''
// }

// const getLocalStorageType = () => {
//   let type = localStorage.getItem('type') 


//   return {
//     type: type || ''
//   }
// }

const Search = () => {
    const {setImgType, setTerm} = useContext(MyContext)

    const [text, setText] = useState('')
    // const [type, setType] = useState(getLocalStorageType())

    const navigate = useNavigate()

    // const handleChange = (e) => {
    //   const { name, value} = e.target

    //   setText(value)
    //   localStorage.setItem(name, value)
    // }

    // const handleType = (e) => {
    //   const {name, value} = e.target

    //   setType(value)
    //   setImgType(value)
    //   localStorage.setItem('type', value)
    // }

    function handleSubmit(e) {
        e.preventDefault() 

        setTerm(text)
        setText('')
        localStorage.clear()
        navigate('/')
      
    }
  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <div className="form-container">
              <button type='submit' className='button search-btn' ><FiSearch className='search-icon'/></button>
              <input type="text"
              name='term'
               placeholder='Search Image Term'
               className='search'
               value={text}
               onChange={(e) => setText(e.target.value)}/>
             <select className='select button' onChange={(e) => setImgType(e.target.value)}>
              <option value="">All Images</option>
              <option value="vector">Vector</option>
              <option value="illustration">Illustration</option>
            </select>
            </div>
        </form>
    </div>
  )
}

export default Search