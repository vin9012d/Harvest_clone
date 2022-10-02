import React from 'react'
import styles from './hero.module.css';

import socialImage from '../../../assets/social_circle.png';

export const Hero = () => {
  return (
    <div className={styles.heroContainer}>

      <div className={styles.timeDiv}>
        <h1>Time tracking integrated with your team’s favorite apps.</h1>
        <p>Harvest works with the most popular tools so your team can track time effortlessly.</p>
      </div>

      <div className={styles.imageDiv}>
        <img src={socialImage} alt="social icons" />
      </div>
    </div>
  )
};

