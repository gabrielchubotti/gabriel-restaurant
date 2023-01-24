import React from 'react';
import { SubHeading } from '../../components';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
      {/*
      - - imagine the header horizontally, on the left side we have the information: title + description, on the right a nice image
      */}
      <div className='app__wrapper_info'>
        <SubHeading  title=''/>
        <h1 className='app__header-h1'>They Key to Fine Dining</h1>
      </div>

      <div className='app__wrapper_img'>
       </div>
  </div>
);

export default Header;
