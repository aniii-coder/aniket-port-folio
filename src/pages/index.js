import React from "react";
import Sidebar from "../features/sidebar/Sidebar";
import MainPage from "../features/main-page/MainPage";
import styles from "./index.module.css";
import About from "../features/about/About";
import Skills from "../features/skills/Skills";
import Resume from "../features/resume/Resume";
import PortfolioCards from "../features/project-card/PortFolioCards";

const index = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar style={{ display: "flex" , flexDirection:"çolumn"}}>
          <div id="home" style={{height:'100%'}}>
            <MainPage />
          </div>
          <div id="about" style={{height:'100%'}}>
            <About />
          </div>
         <div id="skills" style={{height:'100%'}}>
            <Skills />
          </div>
          <div id="resume" style={{height:'100%'}}>
            <Resume />
          </div>
          <div id="projects" style={{height:'100%'}}>
            {/* <MainPage /> */}
            <PortfolioCards />
          </div>
          {/* <div id="contact" style={{height:'100%'}}>
            <MainPage />
          </div>   */}
        </Sidebar>
      </div>
    </div>
  );
};

export default index;
