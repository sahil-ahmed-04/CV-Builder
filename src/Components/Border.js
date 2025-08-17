import React from 'react';

function Border({children}){
    const childArr = React.Children.toArray(children)
    return(
        <div>
        {childArr.map((child,i)=><div key={i} style={{border:"2px solid black"}} >{child}</div>)}
        </div>
    )
  }

export default Border;