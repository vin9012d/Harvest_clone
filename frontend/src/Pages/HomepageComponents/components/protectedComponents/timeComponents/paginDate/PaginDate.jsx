import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./paginDate.module.css";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';

export const PaginDate = ({dateData, setDateData}) => {
  const [startDate, setStartDate] = useState(new Date());
  const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];  
  let date = Number(startDate.getDate());
  let month = Number(startDate.getMonth());
  let today = new Date().toLocaleDateString() === startDate.toLocaleDateString();
  

  useEffect(()=> {
    setDateData({
      ...dateData,
      day: weekArray[date%7],
      date: date,
      month: monthArray[month],
      year: startDate.getFullYear(),
      fullUserDate: startDate,
    });
  }, [startDate]);

  return (
    <div className={styles.paginContainer} >

      <div className={styles.paginDiv1}>
        <button className={styles.paginButton1}><HiOutlineArrowSmLeft/></button>
        <button className={styles.paginButton2}><HiOutlineArrowSmRight/></button>
        <div>
          <span className={styles.today}>{today && "Today:"}</span>
          <span>{`${weekArray[date%7]}, ${date} ${monthArray[month]}`} </span>
          <span onClick={()=> setStartDate(new Date())} className={styles.returnto} >{!today? "Return to today": ''}</span>
        </div>
      </div>

      <div className={styles.paginDiv2}>
        <div className={styles.calander}>        
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> 
        </div>        
       
        <div>
          <button className={styles.paginButton1}>Day</button>
          <button className={styles.paginButton2}>Week</button>
        </div>
      </div>
      
    </div>
  );
};
