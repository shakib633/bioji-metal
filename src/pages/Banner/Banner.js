import React from 'react';
import css from './Banner.css'

const Banner = () => {
    return (
        
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <img src="https://i.ibb.co/gjHfL3s/bioji1.jpg" alt="img" border="0" className="w-full"></img>

  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src="https://i.ibb.co/1sLYMF9/bioji2.jpg" alt="img" border="0" className=" w-full"></img>
  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
  <img src="https://i.ibb.co/L9GhSv2/img4.jpg" alt="img" border="0" className=" w-full"></img>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>  
  
    );
};

export default Banner;

// https://i.ibb.co/j8FrRt3/img2.jpg