import React from "react";
import styles from "./About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutContainer}>
        <div className={styles.heading}>About</div>
        <div className={styles.aboutHeader}>
          Aspiring Web Developer with a strong foundation in intermediate-level
          web development and Machine Learning. Proficient in React.js and
          Streamlit, with a growing understanding of the MERN stack. Eager to
          apply my skills to build innovative web applications and contribute to
          dynamic development teams.
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.ImageContainer}>
            <Image
              src={"/assets/profile.jpeg"}
              style={{ opacity: "0.9" }}
              height={700}
              width={700}
            />
          </div>
          <div className={styles.personalData}>
            <div
              style={{
                flex: "0.5",
                fontSize: "30px",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#45505b",
              }}
              className={styles.infoContainer}
            >
              Full Stack Developer (MERN)
            </div>
            <div
              style={{
                flex: "0.3",
                fontSize: "20px",
                fontWeight: "400",
                fontStyle: "italic",
                color: "black",
              }}
              className={styles.infoContainer}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div style={{ flex: "2.2" }} className={styles.infoContainer}>
              <div className={styles.infoLeft}>
                <div className={styles.infoItem}>
                  <span className={styles.arrow}>›</span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#45505b",
                    }}
                  >
                    Birthday:{" "}
                  </span>
                  <span> 7 Sept 2004</span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.arrow}>›</span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#45505b",
                    }}
                  >
                    Website:
                  </span>
                  <span>Coming Soon....</span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.arrow}>›</span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#45505b",
                    }}
                  >
                    Phone:
                  </span>
                  <span>9326334201</span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.arrow}>›</span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#45505b",
                    }}
                  >
                    City:
                  </span>
                  <span>Kalyan</span>
                </div>
              </div>

              <div className={styles.right}>
                <div className={styles.infoItem}>
                  <span className={styles.arrow}>›</span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#45505b",
                    }}
                  >
                    Age:
                  </span>
                  <span>22</span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.arrow}>›</span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#45505b",
                    }}
                  >
                    Degree:
                  </span>
                  <span>B.Sc Computer Science</span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.arrow}>›</span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#45505b",
                    }}
                  >
                    Email:
                  </span>
                  <span>aksingh22356@gmail.com</span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.arrow}>›</span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#45505b",
                    }}
                  >
                    Commute:
                  </span>
                  <span>Ready</span>
                </div>
              </div>
            </div>
            <div style={{ flex: "0.8" }} className={styles.infoContainer}>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
