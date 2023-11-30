import React, { useContext } from 'react'
import { MyContext } from '../../../../App'
import { Link } from 'react-router-dom';

import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const ImgBody = () => {
    const {images, loading, setTerm} = useContext(MyContext)

    if (loading) {
        return <h1 className='loading'>Loading...</h1>
    }

    // console.log(images[0].comments)

  return (
    <section className='img-body'>
      <ul className='img-gallery'>
        {images.map(image => (
          <li key={image.id}>
            <Link to={`/${image.id}`}>
              {/* <div className='images-container' key={image.id}> */}
                <img src={image.largeImageURL} alt={image.id} className='img'/>
              <div className="hover">
                <div className="hover-logo-container">
                  <FaBookmark className='hover-logo'/>
                  <FaHeart className='hover-logo'/>
                </div>
                <p className='userName'>{image.user}</p>
              </div>
            {/* </div> */}
          </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ImgBody
