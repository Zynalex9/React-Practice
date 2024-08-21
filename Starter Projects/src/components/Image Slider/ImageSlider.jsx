import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  async function getImages(getURL) {
    setLoading(true);
    try {
      const response = await fetch(`${getURL}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") getImages(url);
  }, [url]);

  function handlePrev() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  console.log(currentSlide);
  return (
    <>
      {loading && <div>Loading Images</div>}
      <div className="image-container">
        <BsArrowLeftCircleFill
          onClick={handlePrev}
          className="arrow arrow-left"
        />
        {images.map((item, idx) => {
          return (
            <img
              key={idx}
              src={item.download_url}
              className={
                idx === currentSlide
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          );
        })}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={handleNext}
        />
        <span className="circle-indicators">
          {images.map((item, idx) => {
            return (
              <button
              onClick={()=>setCurrentSlide(idx)}
                key={idx}
                className={
                  idx === currentSlide
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
              ></button>
            );
          })}
        </span>
      </div>
    </>
  );
};

export default ImageSlider;
