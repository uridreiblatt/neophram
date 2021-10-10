import React, { Component } from 'react'
import { useHistory,Link } from 'react-router-dom';
import BarcodeReader from 'react-barcode-reader'
 
class BarcodeScanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: 'No result from scanner',
      err:'',
      keepScan:true
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  
  handleScan(data){
    
    this.setState({
      result: data,
      keepScan:false,
    })
    
  }
  handleError(err){
    
    console.error(err)
  }
  render(){
 
    return(
      <div>
        <BarcodeReader
          onError={this.handleError}
          onScan={this.handleScan}
         
          />
        <p>{this.state.result}</p>
        <Link disable={true}  to={`/MultiStageForm/PRP2100002`} className="btn btn-primary" > Goto Form</Link>
       
      </div>
    )
  }
}
export default BarcodeScanner