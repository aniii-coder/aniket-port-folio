import React from "react";
import styles from "./PortFolioCards.module.css";
import { Eye, ArrowRight } from "lucide-react";
import { useRouter } from "next/router";

const Card = ({ image, category, title, inprogress =false, desc, hovered, onViewHandler = () => {}, onDescriptionHandler = () => {}}) => {
  // const onDescriptionHandler = () => {};
  // const onViewHandler = () => {};
  return (
    <div className={`${styles.card} ${hovered ? styles.forceHover : ""}`}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="" className={styles.image} />

       {inprogress 
       ?  <div className={styles.iconBtn} onClick={(title) => onViewHandler(title)}>
            In Progress....
          </div> :
           <div className={styles.overlay}>
          <div className={styles.iconBtn} onClick={(title) => onViewHandler(title)}>
            <Eye size={18} />
          </div>
          <div className={styles.iconBtn} onClick={(title) => onDescriptionHandler(title)}>
            <ArrowRight size={18} />
          </div>
        </div>}
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
  const router = useRouter()
  return (
    <div className={styles.portfolioContainer}>
      <span className={styles.title1}>Projects</span>
      <div className={styles.container}>
        {/* LEFT (Hovered) */}
        <Card
          // hovered
          onViewHandler={() => {
            router.push("https://real-time-code-editor-jet.vercel.app/")
          }}
          onDescriptionHandler={() => {
            router.push("https://github.com/aniii-coder/real-time-code-editor")
          }}
          image="/assets/image.png"
          category="CodeCove"
          title="Write. Run. Collaborate."
          desc="Real-time collaborative coding for teams"
        />

        {/* RIGHT (Normal) */}
        {/* <Card
          image="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
          category="GRAPHICS"
          title="Creative Brand Identity"
          desc="Vestibulum id ligula porta felis euismod semper at vulputate."
        /> */}
         <Card
          image="/assets/logoMain.png"
          inprogress={true}
          category="CameCase"
          title="Components Made Simple"
          desc="camelCase is a collection of ready-to-use UI components built with JavaScript and CSS Modules."
        />
      </div>
      <Card
        image="/assets/img2.png"
        category="Coming Soon...."
        title="Coming Soon...."
        // desc="camelCase is a collection of ready-to-use UI components built with JavaScript and CSS Modules."
      />
      {/* <div className={styles.container}>

        <Card
          image="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
          category="GRAPHICS"
          title="Creative Brand Identity"
          desc="Vestibulum id ligula porta felis euismod semper at vulputate."
        />
      </div> */}
    </div>
  );
};

export default PortfolioCards;
