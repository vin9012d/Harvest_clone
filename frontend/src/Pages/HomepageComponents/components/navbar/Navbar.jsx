import React from 'react'
import LNavbar from './largeScreen/LNavbar';
import SNavbar from './smallScreen/SNavbar';

export const Navbar = () => {
  return (
    <div style={{position: 'sticky', top: '0', zIndex: '99'}}>
        <LNavbar/> 
        <SNavbar/>     
    </div>
  )
};
    