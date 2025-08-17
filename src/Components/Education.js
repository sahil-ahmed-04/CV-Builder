import "./Education.css"

function Education({education}){
    return(
        <div>
            {education.map((e,i)=><div key={i}>
                <h3>{e.name}</h3>
                <p>{e.course} | {e.year}</p>
                <p>{e.marks}</p>
                </div>
                )}
        </div>
    );
}

export default Education;