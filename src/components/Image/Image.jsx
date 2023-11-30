import React, {useEffect, useState, useContext} from 'react'
import { useNavigate, useParams, Link } from "react-router-dom"
import { MyContext } from '../../App'
import Search from '../Home/Hero/Search'
import Header from '../Header'

import { IoIosArrowDown } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaH, FaRegComment } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { FaBookmark } from "react-icons/fa";
import { BsFillBookmarkCheckFill } from "react-icons/bs";


import './Image.css'

// const INPUT_DATA = {
//     comment: ''
// }

// const getLocalStorageSaved = () => {
//     let saved = localStorage.getItem('saved')

//     if (localStorage.getItem('saved')){
//         saved = localStorage.getItem('saved')
//     }

//     return saved
// }

const Image = () => {
    const [imagePage, setImagePage] = useState([])
    const [comments, setComments] = useState([])
    const {images} = useContext(MyContext)

    const [changeColor, setChangeColor] = useState(false)
    const [clickUnclick, setClickUnclick] = useState(false)

    // const [form, setForm] = useState(INPUT_DATA)
    const [postComment, setPostComment] = useState('')

    const [coms, setComs] = useState([])
    const [saved, setSaved] = useState([])
    const [showSaved, setShowSaved] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        if (images && id ){
            const findImage = images.find(image => Number(image.id === Number(id)))
            setImagePage(findImage)
        }
        fetch(`https://dummyjson.com/comments?limit=10`)
        .then(res => res.json())
        .then(data => setComments(data.comments))
    }, [images, id])

    if(!imagePage) {
        return <p>Loading...</p>
    }

    // const handleChange = (event) => {

    //     const {name, value} = event.target

    //     setForm({...form, [name]: value, postId: 1, userId: 2})

    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        
        const options = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                body: postComment,
                postId: 3,
                userId: 5
            })
          }

        fetch(`https://dummyjson.com/comments/add`, options)
        .then(res => res.json())
        .then((data) => {
            console.log(data.body)
            // coms.push(data.body)
            setComs(data.body)
        })

        setPostComment('')
    }

    const handleClick = (e) => {
        id = e.target.value
    }


  return (
    <div className='img-page'>
            <Header />
        <div className="img-page-body">
            <div className="img-page-left">
                <div className="img-body-img-container">
                    <img src={imagePage.largeImageURL} alt="" className='img-page-img'/>
                <div>
              </div>
                </div>
                <div className="comments-container">
                    <form className="form" onSubmit={(handleSubmit)}>
                        <input type="text" placeholder='Leave a comment' name='comment' value={postComment} onChange={(event) => setPostComment(event.target.value)}/>
                    </form>

                    <ul className='comments-list'>
                        {coms.length > 0 && (
                    <li className="each-comment">
                                <div className="user-img">
                                    <h4>IS</h4>
                                </div>
                                <div className="comment-body">
                                    <h5>Ilham Saleh</h5>
                                    <p>{coms}</p>
                                </div>
                            </li>
                          )}
                        {comments.map(comment => (
                            <li className="each-comment" key={comment.id}>
                                <div className="user-img">
                                    <h4>{comment.user.username[0]}{comment.user.username[1]}</h4>
                                </div>
                                <div className="comment-body">
                                    <h5>{comment.user.username}</h5>
                                    <p>{comment.body}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <h3 className='related'>Related Images...</h3>

                <ul className='img-gallery'>
                {images.map(image => (
                    <li key={image.id}>
                        <Link to={`/${image.id}`} onClick={handleClick}>
                        <img src={image.largeImageURL}/>
                        <div className="hover">
                            <p className='userName'>{image.user}</p>
                        </div>
                        </Link>
                   </li>
                ))}
                </ul>
            </div>

            <div className="img-page-right">
                <div className="sticky">
                        <div className='top'>
                    <div>
                        <a href='' download={imagePage.largeImageURL} target='_blank'>
                                <button className='hero-btn'>Download<span><IoIosArrowDown className='arrow-down'/></span></button>
                        </a>
                    </div>
                            <div>
                                <button className='hero-btn' onClick={() => {
                                        setSaved(imagePage)
                                        localStorage.setItem('saved', imagePage.largeImageURL)
                                        }}>
                                    <FaBookmark />
                                        Save
                                </button>
                            </div>

                            <div>
                                <button className='hero-btn' onClick={() => {
                                    setShowSaved(!showSaved)                                   
                                }}>
                                    <BsFillBookmarkCheckFill className='saved-logo' />
                                        Saved
                                </button>
                            </div>
                        </div>
                    <div className='middle'>
                        <div className="middle-btns">
                            <button className='button logo-btn' onClick={() => {
                                setClickUnclick(!clickUnclick)
                                setChangeColor(!changeColor)
                            }}> 
                            <span>{changeColor ? <FaHeart className='red' /> : <IoMdHeartEmpty />}</span> Likes {clickUnclick ? imagePage.likes + 1 : imagePage.likes}
                            </button>
                            <button className='button logo-btn'> 
                            <span><FaRegComment  /></span> Comments {imagePage.comments}
                            </button>
                            {/* <button className='button logo-btn'>Save</button> */}
                        </div>
                        <div>
                            <div className="details">
                                <p>Views</p>
                                <p>{imagePage.views}</p>
                            </div>
                            <div className="details">
                                <p>Downloads</p>
                                <p>{imagePage.downloads}</p>
                            </div>
                            <div className="details">
                                <p>Collections</p>
                                <p>{imagePage.collections}</p>
                            </div>
                            <div className="details">
                                <p>Image Size</p>
                                <p>{imagePage.imageSize} KB</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className="user">
                            <img src={imagePage.userImageURL} alt="" className='user-img'/>
                            <h5>{imagePage.user}</h5>
                        </div>
                    </div>
                  </div>
                <div className={showSaved ? "show-saved savedImage" : "savedImage"}>
                    {saved.largeImageURL ? (
                    <ul>
                        <li className='saved-img-flex'>
                            <img src={saved.largeImageURL} alt="" className='saved-img'/>
                            <div>
                                <h5>{saved.user}</h5>
                                <div className='saved-details'>
                                    <p><span><GrView /></span>{saved.views}</p>
                                    <p> <span><IoMdHeartEmpty /></span>{saved.likes}</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    ) : (
                        <h3>Image not saved...</h3>
                    )}
                </div>
                </div>

        </div>
    </div>
  )
}

export default Image