import React from "react";

function Progressbar(){
    return(
        <div className="container">

            <div className="progress-container">
                <div className="progress" id="progress"></div>
                <div className="step active"></div>
                <div className="step active"></div>
                <div className="step active"></div>
                <div className="step active"></div>
            </div>
        </div>
    )
}

export default Progressbar;