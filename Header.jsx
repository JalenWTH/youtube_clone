import React from 'react';
import {
  ThreeLinesMenuIcon,
  SearchIcon,
  CameraIcon,
  NotificationIcon,
  ProfileIcon
} from '../assets/Icons';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      
      <div className='header__left'>
        <ThreeLinesMenuIcon className='header__menuicon'/>
        {/*Youtube Logo*/}
        <img 
              className='header__logo'
              src='https://iili.io/HPLTPsf.png' 
              alt='Youtube' 
        />
      </div>
      
      <div className="header__center">
        <input type='text' placeholder='Search'className='header__input'/>
        <SearchIcon className='header__searchicon'/>
      </div>

      <div className="header__right">
        <CameraIcon className='header__camera'/>
        <NotificationIcon className='header__notificationicon'/>
        <ProfileIcon className='header__profileicon'/>
      </div>
    </div>
  )
}