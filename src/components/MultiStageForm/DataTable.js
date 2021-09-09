import React from 'react'

export default function DataTable() {

    const tableHeader =  [         
         
              {
                Header: 'שם תרופה',
                accessor: 'firstName',
                value:[{text_display:"fff"}]
              },
              {
                Header: 'כמות במ"ל',
                accessor: 'lastName',
                value:[{text_display:"ftttff"}]
              },
            
              {
                Header: 'סוג מומס נפח סופי',
                accessor: 'age',
                value:[{text_display:"eee"}]
              },
              {
                Header: 'סוג אינפיוזר',
                accessor: 'visits',
                value:[{text_display:"1212"}]
              },
              
            ]


            const tableData =  [         
         
                {
                   value:[{text_display:"ddd"},{text_display:"fff"},{text_display:"ggg"},{text_display:"hhh"}]
                },
                {
                    value:[{text_display:"fff"},{text_display:"fff"},{text_display:"fff"},{text_display:"fff"}]
                },
              
                {
                    value:[{text_display:"fff"},{text_display:"fff"},{text_display:"fff"},{text_display:"fff"}]
                }
                
              ]        
    return (
        <div>
 <table className="form-control" >
      <thead>
      {
            <tr>
              {tableHeader.map(cell => {
                return <td >{cell.Header}</td>
              })}
            </tr>
         
        }
      
      </thead>
      <tbody >
      {tableData.map(row =>{
          return <tr>
              {row.value.map(cell => {
                return <td >{cell.text_display}</td>
                })}
          </tr>
      })}
      </tbody> 
    </table>
            
        </div>
    )
}

