import React from "react";
import styles from "./PortFolioCards.module.css";
import { Eye, ArrowRight } from "lucide-react";

const Card = ({ image, category, title, desc, hovered }) => {





    const onDescriptionHandler = () => {

    }
    const onViewHandler = () => {

    }
  return (
    <div className={`${styles.card} ${hovered ? styles.forceHover : ""}`}>
      
      <div className={styles.imageWrapper}>
        <img src={image} alt="" className={styles.image} />

        <div className={styles.overlay}>
          <div className={styles.iconBtn} onClick={onViewHandler}>
            <Eye size={18} />
          </div>
          <div className={styles.iconBtn} onClick={onDescriptionHandler}>
            <ArrowRight size={18} />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
};

const PortfolioCards = () => {
  return (
       <div className={styles.portfolioContainer}>
        <span className={styles.title1}>Projects</span>
    <div className={styles.container}>
      {/* LEFT (Hovered) */}
      <Card
        // hovered
        image="/assets/logoMain.png"
        category="CameCase"
        title="Components Made Simple"
        desc="camelCase is a collection of ready-to-use UI components built with JavaScript and CSS Modules."
      />

      {/* RIGHT (Normal) */}
      <Card
        image="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
        category="GRAPHICS"
        title="Creative Brand Identity"
        desc="Vestibulum id ligula porta felis euismod semper at vulputate."
      />
    </div>
    <div className={styles.container}>
      {/* LEFT (Hovered) */}
      <Card
        // hovered
        image="/assets/logoMain.png"
        category="CameCase"
        title="Components Made Simple"
        desc="camelCase is a collection of ready-to-use UI components built with JavaScript and CSS Modules."
      />

      {/* RIGHT (Normal) */}
      <Card
        image="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
        category="GRAPHICS"
        title="Creative Brand Identity"
        desc="Vestibulum id ligula porta felis euismod semper at vulputate."
      />
    </div>
       </div>
  );
};

export default PortfolioCards;