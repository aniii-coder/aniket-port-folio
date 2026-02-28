import SideLine from "./components/SideLine";
import styles from "./Resume.module.css";

export default function Resume() {
  const data12th = [
    "Studied in the Science stream with a focus on computer-related subjects.",
    "Achieved 68.2% in HSC board examinations with consistent academic performance.",
    "Developed logical thinking, problem-solving ability, and a strong academic foundation.",
  ];
  const dataGrad = [
    "Graduated with a CGPA of 9.4 demonstrating strong academic performance.",
    "Gained practical knowledge in programming, web development, and software engineering concepts.",
    "Developed problem-solving skills through projects, internships, and hands-on technical learning.",
  ];
  const dataCodtech = [
    "Built and enhanced a MERN stack blog application with secure authentication.",
    "Implemented RESTful CRUD operations and JWT-based user login system.",
    "Worked with MongoDB Atlas for cloud database integration.",
  ];
  const dataF60 = [
    "Developed admin and client-side pages using Next.js.",
    "Created reusable and responsive UI components.",
    "Improved understanding of scalable frontend architecture.",
  ];
  const dataF60Job = [
  "Working on real-time production projects and feature development.",
  "Collaborating with backend teams to understand workflows.",
  "Enhancing UI performance and implementing new design features."
];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "40px",
          width: "100%",
          // border: "1px solid red",
        }}
      >
        <div className={styles.title}>Resume</div>
        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ flex: "1" }}>
            <h3 className={styles.name}>Education Qualification</h3>
            <SideLine
              header={"HSC "}
              description={
                "Completed Higher Secondary Certificate (HSC) from Model College of Arts, Science & Commerce, in the Science stream, gaining strong academic fundamentals, analytical thinking skills, and a solid foundation for higher studies in Computer Science."
              }
              dataInPoints={data12th}
            />
            <SideLine
              header={"Graduation (B.Sc Computer Science) "}
              dataInPoints={dataGrad}
              description={
                "Completed Bachelor of Science in Computer Science from B.K. Birla College of Arts, Science & Commerce, building strong technical knowledge in programming, software development, and modern web technologies with consistent academic excellence."
              }
            />
          </div>
          <div style={{ flex: "1" }}>
            <h3 className={styles.name}>Professional Experience</h3>
            <SideLine
              header={"CodeTechIT Solution (Internship)"}
              description={
                "Worked as a Full Stack Developer Intern at CodTechIT Solutions, where I contributed to building and improving a MERN stack application while gaining hands-on experience in real-world development practices."
              }
              dataInPoints={dataCodtech}
            />
            <SideLine
              header={"Frontend Developer Intern — F60 Host LLP"}
              dataInPoints={dataF60}
              description={
                "Worked as a Frontend Developer Intern at F60 Host LLP, where I gained hands-on experience building responsive web applications and reusable UI components using modern frontend technologies."
              }
            />
            <SideLine
              header={"Frontend Developer — F60 Host LLP"}
              dataInPoints={dataF60Job}
              description={
"Currently working as a Frontend Developer at F60 Host LLP, contributing to live production projects and collaborating with teams to deliver new features and improve user experience."              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
