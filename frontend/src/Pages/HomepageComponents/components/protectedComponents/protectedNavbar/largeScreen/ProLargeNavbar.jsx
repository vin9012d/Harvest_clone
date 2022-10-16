import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './proLargeNavbar.module.css';
import axios from 'axios';

export const ProLargeNavbar = () => {
  const[data,setData]=useState([]);
  const[user,setUser]=useState({});

  useEffect(()=>
  {
    axios.get('https://mysterious-ridge-11647.herokuapp.com/registeredUsers')
    .then((r)=>setUser(r.data));
  },[])

  return (
    <div className={styles.proLContainer}>

        <div>
            <NavLink to='/time'>Time</NavLink>
            <NavLink to='/expenses'>Expenses</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/team'>Team</NavLink>
            <NavLink to='/reports'>Reports</NavLink>
            <NavLink to='/invoices'>Invoices</NavLink>
            <NavLink to='/extimates'>Estimates</NavLink>
            <NavLink to='/manage'>Manage</NavLink>
        </div>

        <div className={styles.proLDiv2}>
            <button>Setting</button>
            <button>
              <img src='https://tinyurl.com/52n2b37y' alt='userImage'/>
              <p>{user.firstName}</p>
            </button>            
        </div>      
    </div>
  )
};

