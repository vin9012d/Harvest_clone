import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngegrationAPI } from "../../../store/integrationReducer/integration.action";
import styles from "./card.module.css";

export const Cards = ({address}) => {  
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.integration);

  useEffect(() => {
    dispatch(getIngegrationAPI(address));
  }, [address,dispatch]);
 
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error...</div>
      ) : (
        <div className={styles.cardMainDiv}>
          {data.map((el) => (
            <div key={el.id}>
              <div>
                <img
                  src={el.imageUrl}
                  alt="icons"
                />
              </div>

              <div>
                <h1>{el?.title}</h1>
                <p>{el.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
