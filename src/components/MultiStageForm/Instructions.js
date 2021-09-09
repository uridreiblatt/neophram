import React from 'react'

function Instructions({ field_id, field_label, field_placeholder, field_value,field_type,field_disable }) {
    return (
        <div className="form-group" >
      <p className="form-control instructions" disabled={true}>
      { field_value.split(".").map((item,i) => (
              <span>
              {item + "."}
              <br/>
            </span>        
      ))
      }  
    </p>
          
         
        </div>
     
    )
    
}

export default Instructions
