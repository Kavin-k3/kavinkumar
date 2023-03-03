import React from "react";
import './member.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationPinLock } from "@fortawesome/free-solid-svg-icons";
export function Login(){
    return(
        <>
        
       
        <div className="main container-fluid p-5" >
            <div className="memberdiv1 row p-5 mt-5">
            <div className="col-lg-2   ">&nbsp;

             </div>
                <div className="col-lg-3 p-5 mt-5">
                <img src="https://cdn.xxl.thumbs.canstockphoto.com/desktop-computer-modern-desktop-computer-with-white-blank-screen-isolated-on-white-background-clipart_csp16629616.jpg" className="ml-auto mr-auto col-lg-8"/>
                </div>
                <div className="col-lg-1">

                </div>
                <div className="col-lg-6">
                     <form className="center">
                        <h2 className=" align p-5">Member Login</h2>
                        <div className="forminput p-3  col-lg-6 mb-3 bordercustom text-center">
                            <FontAwesomeIcon icon={faEnvelope} className="align"/> 
                            <input type="text" placeholder="Email" className="inputborder align"/>
                        </div>
                        <div className="forminput p-3  col-lg-6 bordercustom text-center">
                            <FontAwesomeIcon icon={faLocationPinLock}/> 
                            <input type="text" placeholder="password" className="inputborder"/>
                        </div>
                        <div className="">
                        <button className=" mt-3 p-2 bg-success ml-5">Login</button>
                        </div>
                     </form>
                </div>
            </div>
        </div>
        
     </>
  )
}