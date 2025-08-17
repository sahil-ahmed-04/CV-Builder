import "./Introduction.css"

function Introduction({intro}){
    return(
        <div>
            <h1>{intro.name}</h1>
            <strong>Email:{intro.email}, Phone no.:{intro.phone}</strong>
        </div>
    );
}

export default Introduction;