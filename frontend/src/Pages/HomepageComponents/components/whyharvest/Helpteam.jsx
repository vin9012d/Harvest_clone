import React from "react";
import { Link } from "react-router-dom";
import styles from './helpteam.module.css';
import {useNavigate} from "react-router-dom"

export const Helpteam = () => {
    return (
        <div className={styles.helpcontainer}>
            <div className={styles.helpText}>
                <h1> Help your time spend time wisely</h1>
                <p>
                Harvest time tracking makes it easy to capture time, gain insights
                from past projects, and get paid for your work.
                </p>
            </div>
            <div className={styles.btnContainer}>
                <Link to="/signup">
                <button className={styles.btnTry}>Try Harvest Free</button>
                </Link>
                <p>Free 30-day trial. No credit card required.</p>
            </div>
            <div className={styles.line}></div>

        </div>
    );
};

// export default Helpteam;