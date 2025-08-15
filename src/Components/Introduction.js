import "./Introduction.css"

function Introduction({name, email, mobile}){
    return(
        <>
        <h1>{name}</h1>
        <h3>Email:{email}, Phone no.:{mobile}</h3>
        </>
    );
}

export default Introduction;