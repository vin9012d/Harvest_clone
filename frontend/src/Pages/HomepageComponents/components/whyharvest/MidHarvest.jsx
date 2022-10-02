import React from "react";
import styles from './MidHarvest.module.css';

const MidHarvest = ({ content }) => {
  return content.id % 2 !== 0 ? (
    <div className={styles.mainMidContainer}>
      <div className={styles.contents}>
        <div className={ styles.leftMid}>
          <h4>{content.heading}</h4>
          <p>{content.para}</p>
          {content.points.map((i) => {
            return <p className= {styles.point}>{i.line}</p>;
          })}
          <button>Browse features</button>
        </div>
        <div className="rightMid">
          <div className= {styles.imgContainer}>
            <img src={content.img} alt="" />
          </div>
          <div className= {styles.quoteContainer}>
            <p>
              <em>"{content.quote}"</em>
            </p>
            <p>{content.quote_by}</p>
          </div>
        </div>
      </div>
      <div className= {styles.line}></div>
    </div>
  ) : (
    <div className= {styles.mainMidContainer}>
      <div className={styles.contents}>
        <div className={styles.rightMid}>
          <div className={styles.imgContainer}>
            <img src={content.img} alt="" />
          </div>
          <div className={styles.quoteContainer}>
            <p>
              <em>"{content.quote}"</em>
            </p>
            <p>{content.quote_by}</p>
          </div>
        </div>
        
        <div className= {styles.leftMid}>
          <h4>{content.heading}</h4>
          <p>{content.para}</p>
          {content.points.map((i) => {
            return <p className= {styles.point}>{i.line}</p>;
          })}
          <button>Browse features</button>
        </div>
      </div>
      <div className= {styles.line}></div>
      
    </div>
    
  );
};

export default MidHarvest;
