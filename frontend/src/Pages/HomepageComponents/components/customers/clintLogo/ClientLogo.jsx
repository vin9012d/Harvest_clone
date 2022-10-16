import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './clientLogo.module.css';

export const ClientLogo = () => {
  const [logos, setLogos] = useState([]);

  const getLogo = async () => {
    const res = await axios.get('https://mysterious-ridge-11647.herokuapp.com/clientLogo');
    setLogos(res.data);
  }

  useEffect(()=> {
    getLogo();
  }, [])

  return (
    <div className={styles.logoContainer}>
      {logos.map((el)=> (
        <div key={el.id}>
          <img src={el.imageUrl} alt="client logo" />
        </div>
      ))}      
    </div>
  )
};


