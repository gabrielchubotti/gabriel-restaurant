import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
      {/*
      - - imagine the header horizontally, on the left side we have the information: title + description, on the right a nice image
      */}
      <div className='app__wrapper_info'>
        <SubHeading  title=''/>
        <h1 className='app__header-h1'>They Key to Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0', padding: '0 0 2rem 0'}}>GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan GoVegan </p>
        <button type='button' className='custom__button'>GoVegan</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.findus} alt='header image - food with a spoon'/>
       </div>
  </div>
);

export default Header;
