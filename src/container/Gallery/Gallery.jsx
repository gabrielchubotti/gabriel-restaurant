import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants'
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import './Gallery.css';



const Gallery = () => {
  return (
    <div className='app__gallery flex__center' id='gallery'>
       <div className='app__gallery-content'>
          <SubHeading title="Instagram"/>
          <h1 className='headtext__cormorant'>Photo Gallery</h1>
          <p className='p__opensans' style={{color: "#AAA", marginTop: "2rem"}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
          <button type='button' className='custom__button'>View More</button>
      </div> 

      <div className='app__gallery-gallery'>
       <img src={images.gallery03}/>
      </div>
   </div>
  )
};

export default Gallery;
