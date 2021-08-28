import ProjectCard from "../Components/ProjectCard";
import { ongoingProjects } from "../Components/Projects/ProjectData";
import "../styles/OngoingProjects.css";

const OngoingProjects = () => {
    return (
        <div className="ongoing-projects">
            <ProjectCard projects={ongoingProjects} />
        </div>
    )
}

export default OngoingProjects;
