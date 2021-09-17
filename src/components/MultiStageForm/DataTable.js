import React from 'react'



const DataTable = ({ field_type,field_id,field_label, field_value,table_options }) => {


     
    return (
      
 <table className="form-control " style={{backgroundColor:"lightslategray"}} >
   {/* <h3>{field_label}</h3> */}
      <thead>
      {
            <tr>
              {table_options.table_header.map(cell => {
                return <td >{cell}</td>
              })}
            </tr>
         
        }
      
      </thead>
      <tbody >
      {table_options.table_row.map(row =>{
          return <tr>
              {row.table_cell.map(cell => {
                return <td >{cell}</td>
                })}
          </tr>
      })}
      </tbody> 
    </table>
  
    )
}
export default DataTable 

