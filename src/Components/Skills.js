import "./Skills.css"
import { List } from "./List";


function Skills({skills}){
    return(
        <>
        <h3>Skills</h3>
            <List layout="bullets" items={skills} />
        </>
    );
}

export default Skills;