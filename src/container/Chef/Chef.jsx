import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper__img__reverse'> 
      <img src={images.chef} alt ="chef" />
    </div>

    <div className='app__wrapper__info'>
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant"> What We Believe In!</h1>

      <div className='app__chef__content'>
        <div className='app__chef-content_qupte'> 
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet v Lorem ipsum dolor sit amet</p>
        </div>
        <p className='p__opensans'>sjdnfsjd nfsjnfdjnf sjdn fsjdnf jsn jsdfnjsdnfjsdnfj sndfjnsdfjn sdjf nsdjf nsdjfnsd fjn </p>
       </div>
       
       <div className='app__chef-sign'> 
        <p>Kevin Luo</p>
        <p className='p__opensasn'>Chef & Founder</p>
        <img src={images.sign} alt="sign"/>
    </div>
  </div>
  </div>
);

export default Chef;
