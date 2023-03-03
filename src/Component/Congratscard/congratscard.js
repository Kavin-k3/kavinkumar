import React from "react";

function Card(){
    return(
        <>
        <div className="bg p-5 container-fluid">
        <h1>Congratulations</h1>
            <div className="container1 col-lg-5">
        
        <img src=" https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" className="m-lg-3 col-lg-3 col-7"/>
        <p className="name">Kiran V</p>
        <p className="p-1">Vishnu Institute of Computer Education and Technology,</p>
        <p>Bhimavaram</p>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" className="img1 col-lg-4 col-9 mb-2"/>
        </div>
        </div>
        </>
    );
}
export default Card; 