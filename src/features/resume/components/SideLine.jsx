import React from 'react'
import styles from "./SideLine.module.css";


const SideLine = ({header, description, dataInPoints}) => {
 return (
    <div className={styles.wrapper}> 
      <div className={styles.circle}></div>

      <h3 className={styles.name}>{header}</h3>

      <p className={styles.description}>
       {description}
      </p>

      <ul className={styles.list}>
        {dataInPoints?.map((item) => (

        <li className={styles.listItem}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SideLine
