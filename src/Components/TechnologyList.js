import RoundedLabel from "./RoundedLabel";
import "../styles/TechnologyList.css";


const TechnologyList = ({ technologies }) => {

    return (
        <div className="TechnologyListContainer">
            {technologies.map(technology => <RoundedLabel text={technology}/>)}
        </div>
    )
}

export default TechnologyList;

