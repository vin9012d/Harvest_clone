import React from 'react';
import styles from './build.module.css';

export const Build = () => {
  return (
    <div className={styles.buildContainer}>

      <div>
        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/illo-180-integrations.svg" alt="build image" />
      </div>

      <div className={styles.buildDiv}>
        <h1>
         Build your own Harvest integration
        </h1>
        <p>
         Extend the functionality of your app by easily adding Harvest timers, or build a bespoke integration with the Harvest API.  
        </p>
        <button>Browse options</button>
      </div>

    </div>
  )
};

