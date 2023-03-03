import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
 import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import { faBell } from "@fortawesome/free-solid-svg-icons";
 export function Success(){
    return(
        <>
        <div className="container-fluid p-5">
        <h2 className="text-center">Notifications</h2> 
        <div className="row">
            <div className="col-lg-3 bg-primary  mt-1">
            <h6> <FontAwesomeIcon icon={faCircleCheck}/> Information Message</h6>

            </div>
            <div className="col-lg-3 bg-success mt-1">
            <h6> <FontAwesomeIcon icon={faCircleCheck}/> Success Message</h6>
                
            </div>
            <div className="col-lg-3 bg-warning  mt-1">
            <h6> <FontAwesomeIcon icon={faBell }/> warning Message</h6>

            </div>
            <div className="col-lg-3 bg-danger  mt-1">
            <h6> <FontAwesomeIcon icon={faCircleExclamation}/> Error Message</h6>

            </div>

           
            
            
        </div>
        </div>
            

        </>

    )
 } 

