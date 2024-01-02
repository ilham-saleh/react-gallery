import { createContext, useEffect, useState, Link } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Image from "./components/Image/Image";

const MyContext = createContext();

// &per_page=${20}

const getLocalStorageType = () => {
  let type = localStorage.getItem("type");

  if (localStorage.getItem("type")) {
    type = localStorage.getItem("type");
  }

  return type;
};

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [currentPage, setCurrentPage] = useState(1)
  // const [imgPerPage, setImgPerPage] = useState(10)

  const [term, setTerm] = useState("");
  const [imgType, setImgType] = useState("");
  const [category, setCategory] = useState("");

  const API_KEY = "40931564-0f68f3f827ca0d852ef95bd8e";

  useEffect(() => {
    const fetchImages = () => {
      setLoading(true);
      fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=${imgType}&category=${category}&per_page=${40}`
      )
        .then((res) => res.json())
        .then((data) => {
          setImages(data.hits);
          setLoading(false);
          // console.log(data.hits)
        });
    };
    fetchImages();
  }, [term, imgType]);

  // const indexOfLastImg = currentPage * imgPerPage
  // const indexOfFirstImg = currentPage - imgPerPage
  // const currentImgs = images.slice(indexOfFirstImg, indexOfLastImg)

  // console.log("Current images", currentImgs)

  //   const pageNumbers = []
  //   const totalImgs = images.length

  //   console.log(totalImgs)

  //   for (let i = 1; i <= Math.ceil(totalImgs / imgPerPage); i++){
  //     pageNumbers.push(i)
  //   }

  return (
    <MyContext.Provider
      value={{
        images,
        setImages,
        term,
        setTerm,
        imgType,
        setImgType,
        loading,
        setLoading,
        category,
        setCategory,
      }}
    >
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Image />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export { App, MyContext };
