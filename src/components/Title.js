import React from 'react';

export default function Title({name,title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto text-center my-2">
               <h1 className="text-title font-weight-bold"> 
                   {name} <strong style={{color:"white",background:"#f4adb6",padding:"5px 10px"}}>{title}</strong>
               </h1>
            </div>
        </div>
    )
}

