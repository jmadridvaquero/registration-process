import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


function Summary() {
    return(
        <div>
            <ProgressBar now={90} />
            <h1>This is the summary of your registration : </h1>
        </div>
    )
}

export default Summary;