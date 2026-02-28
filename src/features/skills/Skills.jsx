import React from "react";
import {
  FileCode,
  Palette,
  Braces,
  Atom,
  ArrowRightLeft,
  Server,
  Database,
  Cloud,
  GitBranch,
  Github,
  Box,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsWrapper}>
      
      {/* Heading */}
      <div className={styles.headingSection}>
        <h2 className={styles.title}>Skills </h2>
        <p className={styles.subtitle}>
          Technologies I use to build modern full-stack applications
        </p>
        <div className={styles.headingLine}></div>
      </div>

      <div className={styles.roadmap}>
        
        {/* Row 1 */}
        <div className={styles.row}>
          <div className={styles.card}><FileCode /> HTML</div>
          <div className={styles.dash}></div>
          <div className={styles.card}><Palette /> CSS</div>
          <div className={styles.dash}></div>
          <div className={styles.card}><Braces /> JavaScript</div>
          <div className={styles.dash}></div>
          <div className={styles.card}><Atom /> React</div>
        </div>

        <div className={styles.vertical}></div>

        <div className={styles.rowCenter}>
          <div className={styles.card}>Next.js</div>
        </div>

        <div className={styles.vertical}></div>

        <div className={styles.row}>
          <div className={styles.card}><ArrowRightLeft /> REST</div>
          <div className={styles.dash}></div>
          <div className={styles.card}>WebSockets</div>
        </div>

        <div className={styles.vertical}></div>

        <div className={styles.rowCenter}>
          <div className={styles.card}><Server /> Backend Layer</div>
        </div>

        <div className={styles.splitRow}>
          <div className={styles.column}>
            <div className={styles.card}>Node.js</div>
            <div className={styles.verticalSmall}></div>
            <div className={styles.card}>Express</div>
          </div>

          <div className={styles.column}>
            <div className={styles.card}>Python</div>
            <div className={styles.verticalSmall}></div>
            <div className={styles.card}>Django</div>
          </div>
        </div>

        <div className={styles.vertical}></div>

        <div className={styles.rowCenter}>
          <div className={styles.card}><ShieldCheck /> JWT Auth</div>
        </div>

        <div className={styles.vertical}></div>

        <div className={styles.rowCenter}>
          <div className={styles.card}><Database /> MongoDB</div>
        </div>

        <div className={styles.vertical}></div>

        <div className={styles.rowCenter}>
          <div className={styles.card}><Cloud /> AWS / Cloud</div>
        </div>

        <div className={styles.vertical}></div>

        {/* DevOps */}
        <div className={styles.row}>
          <div className={styles.card}><GitBranch /> Git</div>
          <div className={styles.dash}></div>
          <div className={styles.card}><Github /> GitHub</div>
          <div className={styles.dash}></div>
          <div className={styles.card}><Box /> Docker</div>
          <div className={styles.dash}></div>
          <div className={styles.card}><Wrench /> Jenkins</div>
        </div>

      </div>
    </div>
  );
};

export default Skills;