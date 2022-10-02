import React from 'react';
import { useDispatch } from 'react-redux';
import { queryIngegrationAPI } from '../../../store/integrationReducer/integration.action';
import styles from './leftIntegrations.module.css';

export const LeftIntegrations = ({whichLink, address}) => {
  const dispatch = useDispatch();
   
  return (
    <div className={styles.leftContainer}>
      {whichLink.map((text)=> (
        <div key={text.id}>
          <button onClick={()=> dispatch(queryIngegrationAPI({text: text.link, address: address}))}>{text.linkTexts}</button>
        </div>
      ))}
    </div>
  )
};


