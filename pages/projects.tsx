import styles from "../styles/pages/projects.module.css";
import { allProjects, Project } from "../data/projectData";
import { Montserrat } from "@next/font/google";
import { useMediaQuery } from "@react-hook/media-query";
import OutlinedButton from "../components/outlined-button";
import TextBubble from "../components/text-bubble";
import YouTube from "react-youtube";

const monsterrat = Montserrat({ weight: "900" });
const monsterratReg = Montserrat({ weight: "400" });

const Projects = () => {
  const isValidWidth = useMediaQuery("only screen and (max-width: 900px)");

  const renderProjectsAlternating = (project: Project, index: number) => {
    const description = () => (
      <div>
        <span className={monsterrat.className}>{project.title}</span>
        <span>{project.shortDescription}</span>
        <div className={styles.technologiesContainer}>
          {project.technologies.map((technology) => (
            <TextBubble
              key={`${technology}${project.title}`}
              label={technology}
            />
          ))}
        </div>
        <ul>
          {project.detailedDescription.map((description) => (
            <li key={description}>{description}</li>
          ))}
        </ul>
        <a href={project.link} target="_blank" rel="noreferrer">
          <OutlinedButton label="Source Code" />
        </a>
      </div>
    );
    const image = () => (
      <div>
        {project.youtubeId != null ? (
          <YouTube
            videoId={project.youtubeId}
            id={project.youtubeId}
            iframeClassName={styles.youTube}
          />
        ) : (
          <div style={{ backgroundImage: `url("${project.image}")` }} />
        )}
      </div>
    );
    return (
      <>
        {index % 2 == 0 || isValidWidth ? (
          <>
            {description()}
            {image()}
          </>
        ) : (
          <>
            {image()}
            {description()}
          </>
        )}
      </>
    );
  };

  return (
    <div className={`${styles.projectsContainer} ${monsterratReg.className}`}>
      <span className={`header ${monsterrat.className}`}>My Work</span>
      {allProjects.map((project, index) => (
        <div key={project.title} className={styles.projectContainer}>
          {renderProjectsAlternating(project, index)}
        </div>
      ))}
    </div>
  );
};

export default Projects;
