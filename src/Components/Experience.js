import "./Experience.css"

function Experience({experience}){
    return(
        <>
        {experience.map((e,i)=> <div key={i}>
            <h3>{e.company}</h3>
            <div>
                <strong>{e.position} | {e.duration}</strong>
            </div>
        </div>)}
        </>
    );
}

export default Experience;