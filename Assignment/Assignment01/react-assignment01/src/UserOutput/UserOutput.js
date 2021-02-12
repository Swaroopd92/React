import React from 'react';

const useroutput = (props) => {
    return(
        <div style={props.style}>
            <p>
                Hi I am {props.firstname}.
            </p>
                
            <p>
                My username is '{props.username}'
            </p>
        </div>
    )
}

export default useroutput;