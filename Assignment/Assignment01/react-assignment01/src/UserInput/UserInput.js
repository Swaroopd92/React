import React from 'react';
import './UserInput.css';

const userinput = (props) => {
    return(
        <div >
            <input className="UserInput" onChange={props.change} value={props.firstname}/>
        </div>
    );
}

export default userinput;