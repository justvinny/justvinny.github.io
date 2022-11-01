import { useState, useEffect, useCallback } from "react";
import styles from "../styles/pages/projects.module.css";
import {
  allProjects,
  filteredProjects,
  Project,
  ProjectType,
} from "../data/projectData";
import { Montserrat } from "@next/font/google";
import { useMediaQuery } from "@react-hook/media-query";
import OutlinedButton from "../components/outlined-button";
import TextBubble from "../components/text-bubble";
import YouTube from "react-youtube";
import ToggleButton from "../components/toggle-button";
import Skeleton from "../components/skeleton";
import Aos from "aos";

const monsterrat = Montserrat({ weight: "900" });
const monsterratReg = Montserrat({ weight: "400" });

const Projects = () => {
  const [isLoading, setLoading] = useState<Boolean>(false);
  const [projectData, setProjectData] = useState<Array<Project>>(allProjects);
  const [isFeatured, setFeatured] = useState<Boolean>(true);
  const [isCompleted, setCompleted] = useState<Boolean>(false);
  const [isMobile, setMobile] = useState<Boolean>(false);
  const [isWeb, setWeb] = useState<Boolean>(false);
  const [isDesktop, setDesktop] = useState<Boolean>(false);

  const isValidWidth = useMediaQuery("only screen and (max-width: 900px)");

  const enableLoading = () => {
    setLoading(true);
  };

  const filteredProjectsCallback = useCallback(() => {
    const projectTypes = [];
    if (isMobile) projectTypes.push(ProjectType.MOBILE);
    if (isWeb) projectTypes.push(ProjectType.WEB);
    if (isDesktop) projectTypes.push(ProjectType.DESKTOP);
    setProjectData(filteredProjects(isFeatured, isCompleted, projectTypes));
    setLoading(false);

    setTimeout(() => {
      Aos.refresh();
    }, 500);
  }, [isFeatured, isCompleted, isMobile, isWeb, isDesktop]);

  useEffect(() => {
    filteredProjectsCallback();
  }, [filteredProjectsCallback]);

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
      <span className={`header ${monsterrat.className}`} data-aos="zoom-out">
        My Work
      </span>
      <div className={styles.filterContainer} data-aos="zoom-out">
        <span className={monsterrat.className}>Filters</span>
        <ToggleButton
          label="Featured"
          isActive={isFeatured}
          setState={setFeatured}
          callback={enableLoading}
        />
        <ToggleButton
          label="Completed"
          isActive={isCompleted}
          setState={setCompleted}
          callback={enableLoading}
        />
        <ToggleButton
          label="Mobile"
          isActive={isMobile}
          setState={setMobile}
          callback={enableLoading}
        />
        <ToggleButton
          label="Web"
          isActive={isWeb}
          setState={setWeb}
          callback={enableLoading}
        />
        <ToggleButton
          label="Desktop"
          isActive={isDesktop}
          setState={setDesktop}
          callback={enableLoading}
        />
      </div>
      {isLoading ? (
        <Skeleton />
      ) : (
        projectData.map((project, index) => (
          <div
            key={project.title}
            className={styles.projectContainer}
            data-aos="zoom-out"
          >
            {renderProjectsAlternating(project, index)}
          </div>
        ))
      )}
    </div>
  );
};

export default Projects;
