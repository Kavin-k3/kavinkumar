import React from "react";
import './socialbutton.css';
function Social(){
    return(
        <>
        <div className="bg-img text-center">
            <h1 className="s1">Social Buttons</h1>
         <div className="bg-img1">
            <button className='btn btn-warning text-white m-3 kavi'>Like</button>
            <button className='btn btn-light  m-3 kavi'>Comment</button>
            <button className='btn btn-info m-3 kavi'>Share</button>


          </div>
         </div>
        </>
    )
}
export default Social;