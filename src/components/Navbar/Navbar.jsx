import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt='app logo gericht restaurant'/>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>Home </a></li>
    </ul>

    <GiHamburgerMenu />
    <MdOutlineRestaurantMenu />
  </nav>
);

export default Navbar;
