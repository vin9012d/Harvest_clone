import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import harvest_logo from '../../../assets/harvest_logo.png';
import styles from './lnavbar.module.css';

const LNavbar = () => {
  const navigate = useNavigate();
  const [isWhite, setIsWhite] = useState(false);
  const changeColor = () => {
    if(window.scrollY>=50){
      setIsWhite(true);
    }else{
      setIsWhite(false);
    }
  }
  window.addEventListener('scroll', changeColor);
    
  return (
    <div className={isWhite? styles.lNavContainerW : styles.lNavContainer}>

      <div className={styles.linkDiv}>
        <div className={styles.imgDiv}><NavLink to='/'><img className={styles.lnimage} src={harvest_logo} alt="harvest logo" /></NavLink></div>
        <NaveLink to={''}>Why Harvest?</NaveLink>
        <NaveLink to={''}>Features</NaveLink>
        <NaveLink to={''}>Customers</NaveLink>
        <NaveLink to={''}>Integrations</NaveLink>
        <NaveLink to={''}>Pricing</NaveLink>
      </div>

      <div className={styles.buttonDiv}>
        <div><button className={styles.notActiveLink} onClick={()=> navigate('/login')} >Sign in</button></div>
        <div><button className={styles.tryButton} onClick={()=> navigate('/Signup')}>Try Harvest free</button></div>
      </div>

    </div>
  )
};

export default LNavbar;

const NaveLink = ({children, to}) => {
    return (
        <div><NavLink className={({isActive})=>isActive ? styles.activeLink : styles.notActiveLink} to={to}>{children}</NavLink></div>
    )
};
