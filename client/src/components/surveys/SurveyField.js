import React from 'react';

export default ({ input, label, meta: { error, touched } }) =>{
   
    return(
        <div>
            
            <label style={{color: "black"}} >{ label }</label>
            <input {...input} placeholder="Add a validate text" style={{marginBottom:'5px'}} />
            
            <div className="red-text" style={{marginBottom:'20px'}} >
                <p>{ touched && error }</p>
            </div>
        </div>
    );
};