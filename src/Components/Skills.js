import "./Skills.css"

function Skills({skills}){
    return(
        <>
        <h3>Skills</h3>
            {skills.map((e,i)=><span key={i}>
                <span> {e} </span>
            </span>)
            }
        </>
    );
}

export default Skills;