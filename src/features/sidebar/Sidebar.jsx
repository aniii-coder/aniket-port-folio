import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import { navUtils } from "./SidebarUtil";
import Image from "next/image";
import { useRouter } from "next/router";

const Sidebar = ({ children, style }) => {
  const router = useRouter();
  const [active, setActive] = useState("#home");

useEffect(() => {
  const sections = navUtils.map((item) =>
    document.querySelector(item.link)
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => {
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, []);
  return (
    <div style={{ display: "flex", width: "100%", gap: "60px" }}>
      <div
        style={{
          position: "fixed",
          zIndex: "-999",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          opacity: "0.2",
        }}
      >
        <Image src={"/assets/basrGif.gif"} height={700} width={900} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.menu}>
          {navUtils.map((item) => {
            const Icon = item.icon;
            const isActive = item.link === active;

            return (
              <a
                key={item.id}
                href={item.link}
                className={styles.menuWrapper}
                onClick={() => setActive(item.link)}
              >
                <div
                  className={styles.iconItem}
                  style={isActive ? { background: "#0563bb" } : {}}
                >
                  <Icon size={20} color={isActive ? "white" : "#45505b"} />
                </div>

                <div className={styles.menuItem}>
                  <div style={{ marginLeft: "5px", marginRight: "20px" }}>
                    <Icon size={20} />
                  </div>
                  <span>{item.name}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div
        style={{
          flex: 1,
          marginLeft: "180px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
