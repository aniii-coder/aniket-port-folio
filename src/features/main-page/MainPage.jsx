import React, { useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import TextTyping from "../../components/TextTyping";
import { Github, Instagram, Linkedin, LucideTwitter, X } from "lucide-react";
import Link from "next/link";

const MainPage = () => {
  const arr = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  const connIcons = [
    { name: "Twitter", icon: LucideTwitter, link: "https://x.com/aniTheKoder" },
    { name: "Github", icon: Github, link: "https://github.com/aniii-coder" },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/aniketsingh_93/",
    },
    {
      name: "Linkedin",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/aniket-v-singh/",
    },
  ];

  return (
    <div className={styles.mainPage} href='#home'>
      <div className={styles.nameArea}>
        <div className={styles.namingSection}>
          <TextTyping textToDisplay={"Aniket Singh"} time={100} isUnderLineVisible={true} />
        </div>
        <div className={styles.professionalField}>
          <TextTyping
            textToDisplay={"I'm  "}
            textToAnimate={arr}
            time={100}
            toLoop={true}
            isUnderLineVisible={true}
          />
        </div>
        <div className={styles.connection}>
          {connIcons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className={styles.iconBox}>
                <Link href={item.link}>
                  <Icon size={22} color="#272829" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
