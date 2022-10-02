import React from 'react';
import styles from './protectedFooter.module.css';
import harvest_logo from '../../../assets/sadeHarvest.svg';

export const ProtectedFooter = () => {
  return (
    <div className={styles.footerContainer}>
      <div><a href=""><img src={harvest_logo} alt="harvest" /></a></div>
      <div><a href="https://www.getharvest.com/services/terms-of-service">Terms</a></div>
      <div><a href="https://www.getharvest.com/services/privacy-policy">Privacy</a></div>
      <div><a href="http://www.harveststatus.com/">Status</a></div>
      <div><a href="https://blog.getharvest.com/">Blog</a></div>
      <div><a href="https://help.getharvest.com/harvest?harvestappreferral=https%3A%2F%2Fna178.harvestapp.com%2Ftime">Help</a></div>
    </div>
  )
};

